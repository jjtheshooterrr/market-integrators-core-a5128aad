import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";
import { NewLeadModal } from "./NewLeadModal";
import { LeadDetailDrawer } from "./LeadDetailDrawer";
import { formatDistanceToNow } from "date-fns";

type Lead = {
  id: string;
  title: string;
  status: string;
  service_type: string | null;
  source: string | null;
  priority: string | null;
  created_at: string;
  last_activity_at: string | null;
  companies: { name: string } | null;
  contacts: { first_name: string; last_name: string } | null;
  users: { full_name: string } | null;
};

export function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewModal, setShowNewModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ownerFilter, setOwnerFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  useEffect(() => {
    fetchLeads();
    fetchUsers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [leads, searchTerm, statusFilter, ownerFilter, serviceFilter]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads" as any)
      .select(`
        *,
        companies(name),
        contacts(first_name, last_name),
        users(full_name)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads((data as any) || []);
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    const { data } = await supabase.from("users" as any).select("*");
    setUsers((data as any) || []);
  };

  const applyFilters = () => {
    let filtered = [...leads];

    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.companies?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${lead.contacts?.first_name} ${lead.contacts?.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (ownerFilter !== "all") {
      filtered = filtered.filter(lead => lead.users?.full_name === ownerFilter);
    }

    if (serviceFilter !== "all") {
      filtered = filtered.filter(lead => lead.service_type === serviceFilter);
    }

    setFilteredLeads(filtered);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      contacted: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      discovery: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      proposal_sent: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      follow_up: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      closed_won: "bg-green-500/10 text-green-500 border-green-500/20",
      closed_lost: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colors[status] || "bg-muted text-muted-foreground";
  };

  const getPriorityColor = (priority: string | null) => {
    if (!priority) return "bg-muted text-muted-foreground";
    const colors: Record<string, string> = {
      low: "bg-slate-500/10 text-slate-500 border-slate-500/20",
      medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      high: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colors[priority] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads, companies, contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="discovery">Discovery</SelectItem>
            <SelectItem value="proposal_sent">Proposal Sent</SelectItem>
            <SelectItem value="follow_up">Follow Up</SelectItem>
            <SelectItem value="closed_won">Closed Won</SelectItem>
            <SelectItem value="closed_lost">Closed Lost</SelectItem>
          </SelectContent>
        </Select>

        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="app">App</SelectItem>
            <SelectItem value="seo">SEO</SelectItem>
            <SelectItem value="ppc">PPC</SelectItem>
            <SelectItem value="automation">Automation</SelectItem>
          </SelectContent>
        </Select>

        <Select value={ownerFilter} onValueChange={setOwnerFilter}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Owner" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Owners</SelectItem>
            {users.map(user => (
              <SelectItem key={user.id} value={user.full_name}>{user.full_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={() => setShowNewModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Lead
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lead Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center text-muted-foreground">
                  Loading leads...
                </TableCell>
              </TableRow>
            ) : filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedLead(lead.id)}
                >
                  <TableCell className="font-medium">{lead.title}</TableCell>
                  <TableCell>{lead.companies?.name || "—"}</TableCell>
                  <TableCell className="capitalize">{lead.service_type || "—"}</TableCell>
                  <TableCell className="capitalize">{lead.source || "—"}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(lead.status)}>
                      {lead.status.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPriorityColor(lead.priority)}>
                      {lead.priority || "—"}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.users?.full_name || "Unassigned"}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDistanceToNow(new Date(lead.created_at), { addSuffix: true })}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {lead.last_activity_at
                      ? formatDistanceToNow(new Date(lead.last_activity_at), { addSuffix: true })
                      : "—"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <NewLeadModal
        open={showNewModal}
        onOpenChange={setShowNewModal}
        onLeadCreated={fetchLeads}
      />

      <LeadDetailDrawer
        leadId={selectedLead}
        open={!!selectedLead}
        onOpenChange={(open) => !open && setSelectedLead(null)}
        onLeadUpdated={fetchLeads}
      />
    </div>
  );
}
