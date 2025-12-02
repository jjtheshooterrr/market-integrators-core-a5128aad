import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type User = {
  id: string;
  full_name: string;
  email: string;
  role: string | null;
};

type LeadCounts = {
  new: number;
  contacted: number;
  discovery: number;
  proposal_sent: number;
  follow_up: number;
  closed_won: number;
  closed_lost: number;
};

export function TeamTab() {
  const [users, setUsers] = useState<User[]>([]);
  const [leadCounts, setLeadCounts] = useState<Record<string, LeadCounts>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    setLoading(true);

    // Fetch users
    const { data: usersData } = await supabase
      .from("users" as any)
      .select("*")
      .order("full_name");

    // Fetch all leads
    const { data: leadsData } = await supabase
      .from("leads" as any)
      .select("owner_id, status");

    if (usersData && leadsData) {
      setUsers(usersData as any);

      // Calculate lead counts per user
      const counts: Record<string, LeadCounts> = {};
      
      (usersData as any[]).forEach(user => {
        counts[user.id] = {
          new: 0,
          contacted: 0,
          discovery: 0,
          proposal_sent: 0,
          follow_up: 0,
          closed_won: 0,
          closed_lost: 0,
        };
      });

      (leadsData as any[]).forEach(lead => {
        if (lead.owner_id && counts[lead.owner_id]) {
          const status = lead.status as keyof LeadCounts;
          counts[lead.owner_id][status]++;
        }
      });

      setLeadCounts(counts);
    }

    setLoading(false);
  };

  const getTotalLeads = (userId: string) => {
    const counts = leadCounts[userId];
    if (!counts) return 0;
    return Object.values(counts).reduce((sum, count) => sum + count, 0);
  };

  if (loading) {
    return <div className="text-center text-muted-foreground py-12">Loading team data...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => {
          const counts = leadCounts[user.id] || {
            new: 0,
            contacted: 0,
            discovery: 0,
            proposal_sent: 0,
            follow_up: 0,
            closed_won: 0,
            closed_lost: 0,
          };
          const total = getTotalLeads(user.id);

          return (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{user.full_name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
                  </div>
                  {user.role && (
                    <Badge variant="secondary" className="capitalize">
                      {user.role}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-sm font-medium">Total Leads</span>
                    <Badge variant="outline">{total}</Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    {counts?.new > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">New</span>
                        <span className="font-medium">{counts.new}</span>
                      </div>
                    )}
                    {counts?.contacted > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Contacted</span>
                        <span className="font-medium">{counts.contacted}</span>
                      </div>
                    )}
                    {counts?.discovery > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Discovery</span>
                        <span className="font-medium">{counts.discovery}</span>
                      </div>
                    )}
                    {counts?.proposal_sent > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Proposal Sent</span>
                        <span className="font-medium">{counts.proposal_sent}</span>
                      </div>
                    )}
                    {counts?.follow_up > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Follow Up</span>
                        <span className="font-medium">{counts.follow_up}</span>
                      </div>
                    )}
                    {counts?.closed_won > 0 && (
                      <div className="flex items-center justify-between text-green-600">
                        <span>Closed Won</span>
                        <span className="font-medium">{counts.closed_won}</span>
                      </div>
                    )}
                    {counts?.closed_lost > 0 && (
                      <div className="flex items-center justify-between text-red-600">
                        <span>Closed Lost</span>
                        <span className="font-medium">{counts.closed_lost}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {users.length === 0 && (
        <Card>
          <CardContent className="text-center py-12 text-muted-foreground">
            No team members found
          </CardContent>
        </Card>
      )}
    </div>
  );
}
