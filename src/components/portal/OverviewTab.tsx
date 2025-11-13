import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

type Stats = {
  totalOpen: number;
  newLastWeek: number;
  byService: Record<string, number>;
  bySource: Record<string, number>;
};

type StaleLead = {
  id: string;
  title: string;
  last_activity_at: string;
  users: { full_name: string } | null;
};

export function OverviewTab() {
  const [stats, setStats] = useState<Stats>({
    totalOpen: 0,
    newLastWeek: 0,
    byService: {},
    bySource: {},
  });
  const [staleLeads, setStaleLeads] = useState<StaleLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);

    // Fetch all leads
    const { data: leads } = await supabase
      .from("leads" as any)
      .select("*, users(full_name)");

    if (leads) {
      const leadsData = leads as any[];
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      // Calculate stats
      const totalOpen = leadsData.filter(
        (l: any) => l.status !== "closed_won" && l.status !== "closed_lost"
      ).length;

      const newLastWeek = leadsData.filter(
        (l: any) => new Date(l.created_at) >= sevenDaysAgo
      ).length;

      const byService: Record<string, number> = {};
      const bySource: Record<string, number> = {};

      leadsData.forEach((lead: any) => {
        if (lead.service_type) {
          byService[lead.service_type] = (byService[lead.service_type] || 0) + 1;
        }
        if (lead.source) {
          bySource[lead.source] = (bySource[lead.source] || 0) + 1;
        }
      });

      // Find stale leads
      const stale = leadsData.filter((lead: any) => {
        if (lead.status === "closed_won" || lead.status === "closed_lost") return false;
        if (!lead.last_activity_at) return true;
        const lastActivity = new Date(lead.last_activity_at);
        return lastActivity < sevenDaysAgo;
      }).slice(0, 5);

      setStats({ totalOpen, newLastWeek, byService, bySource });
      setStaleLeads(stale as any);
    }

    setLoading(false);
  };

  if (loading) {
    return <div className="text-center text-muted-foreground py-12">Loading overview...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Open Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalOpen}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              New Leads (7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.newLastWeek}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Service Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Object.keys(stats.byService).length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Lead Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Object.keys(stats.bySource).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown by Service Type */}
      <Card>
        <CardHeader>
          <CardTitle>Leads by Service Type</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(stats.byService).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(stats.byService)
                .sort(([, a], [, b]) => b - a)
                .map(([service, count]) => (
                  <div key={service} className="flex items-center justify-between">
                    <span className="text-sm capitalize">{service}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No data available</p>
          )}
        </CardContent>
      </Card>

      {/* Breakdown by Source */}
      <Card>
        <CardHeader>
          <CardTitle>Leads by Source</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(stats.bySource).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(stats.bySource)
                .sort(([, a], [, b]) => b - a)
                .map(([source, count]) => (
                  <div key={source} className="flex items-center justify-between">
                    <span className="text-sm capitalize">{source}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No data available</p>
          )}
        </CardContent>
      </Card>

      {/* Stale Leads */}
      {staleLeads.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Stale Leads (No Activity &gt; 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {staleLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-sm">{lead.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Owner: {lead.users?.full_name || "Unassigned"}
                    </p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    {lead.last_activity_at ? (
                      <span>
                        {formatDistanceToNow(new Date(lead.last_activity_at), {
                          addSuffix: true,
                        })}
                      </span>
                    ) : (
                      <span>No activity</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
