import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { LeadDetailDrawer } from "./LeadDetailDrawer";
import { formatDistanceToNow } from "date-fns";

type Lead = {
  id: string;
  title: string;
  status: string;
  priority: string | null;
  last_activity_at: string | null;
  companies: { name: string } | null;
  users: { full_name: string } | null;
};

const COLUMNS = [
  { id: "new", label: "New" },
  { id: "contacted", label: "Contacted" },
  { id: "discovery", label: "Discovery" },
  { id: "proposal_sent", label: "Proposal Sent" },
  { id: "follow_up", label: "Follow Up" },
  { id: "closed_won", label: "Closed Won" },
  { id: "closed_lost", label: "Closed Lost" },
];

export function PipelineTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [draggedLead, setDraggedLead] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select(`
        *,
        companies(name),
        users(full_name)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const handleDragStart = (leadId: string) => {
    setDraggedLead(leadId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (status: string) => {
    if (!draggedLead) return;

    const { error } = await supabase
      .from("leads")
      .update({ status: status as any })
      .eq("id", draggedLead);

    if (!error) {
      fetchLeads();
    }
    setDraggedLead(null);
  };

  const getLeadsByStatus = (status: string) => {
    return leads.filter(lead => lead.status === status);
  };

  const getPriorityColor = (priority: string | null) => {
    if (!priority) return "bg-muted text-muted-foreground";
    const colors: Record<string, string> = {
      low: "bg-slate-500/10 text-slate-500",
      medium: "bg-yellow-500/10 text-yellow-500",
      high: "bg-red-500/10 text-red-500",
    };
    return colors[priority] || "bg-muted text-muted-foreground";
  };

  const getInitials = (name: string | null) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return <div className="text-center text-muted-foreground py-12">Loading pipeline...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {COLUMNS.map((column) => {
          const columnLeads = getLeadsByStatus(column.id);
          return (
            <div
              key={column.id}
              className="flex flex-col bg-muted/50 rounded-lg p-3 min-h-[500px]"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(column.id)}
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                <h3 className="font-semibold text-sm">{column.label}</h3>
                <Badge variant="secondary" className="text-xs">{columnLeads.length}</Badge>
              </div>

              <div className="space-y-2 flex-1">
                {columnLeads.map((lead) => (
                  <div
                    key={lead.id}
                    draggable
                    onDragStart={() => handleDragStart(lead.id)}
                    onClick={() => setSelectedLead(lead.id)}
                    className="bg-card border border-border rounded-lg p-3 cursor-move hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm line-clamp-2">{lead.title}</h4>
                      
                      {lead.companies && (
                        <p className="text-xs text-muted-foreground">{lead.companies.name}</p>
                      )}

                      <div className="flex items-center justify-between gap-2">
                        {lead.priority && (
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(lead.priority)}`}>
                            {lead.priority}
                          </Badge>
                        )}
                        
                        {lead.users && (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                            {getInitials(lead.users.full_name)}
                          </div>
                        )}
                      </div>

                      {lead.last_activity_at && (
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(lead.last_activity_at), { addSuffix: true })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {columnLeads.length === 0 && (
                  <div className="text-center text-xs text-muted-foreground py-8">
                    No leads
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <LeadDetailDrawer
        leadId={selectedLead}
        open={!!selectedLead}
        onOpenChange={(open) => !open && setSelectedLead(null)}
        onLeadUpdated={fetchLeads}
      />
    </div>
  );
}
