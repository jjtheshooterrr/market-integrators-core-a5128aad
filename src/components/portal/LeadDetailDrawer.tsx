import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { format, formatDistanceToNow } from "date-fns";

type Props = {
  leadId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadUpdated: () => void;
};

export function LeadDetailDrawer({ leadId, open, onOpenChange, onLeadUpdated }: Props) {
  const [lead, setLead] = useState<any>(null);
  const [notes, setNotes] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [newNote, setNewNote] = useState("");
  const [newTask, setNewTask] = useState({ title: "", assignee_id: "", due_at: "" });
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    if (open && leadId) {
      fetchLeadDetails();
      fetchUsers();
      getCurrentUser();
    }
  }, [open, leadId]);

  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase.from("users").select("id").eq("id", user.id).single();
      if (data) {
        setCurrentUserId(data.id);
        setNewTask(prev => ({ ...prev, assignee_id: data.id }));
      }
    }
  };

  const fetchUsers = async () => {
    const { data } = await supabase.from("users").select("*");
    setUsers(data || []);
  };

  const fetchLeadDetails = async () => {
    if (!leadId) return;
    
    setLoading(true);

    const [leadRes, notesRes, tasksRes] = await Promise.all([
      supabase
        .from("leads")
        .select(`
          *,
          companies(name),
          contacts(*),
          users(full_name)
        `)
        .eq("id", leadId)
        .single(),
      supabase
        .from("lead_notes")
        .select("*, users(full_name)")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false }),
      supabase
        .from("lead_tasks")
        .select("*, users(full_name)")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false }),
    ]);

    if (leadRes.data) setLead(leadRes.data);
    if (notesRes.data) setNotes(notesRes.data);
    if (tasksRes.data) setTasks(tasksRes.data);

    setLoading(false);
  };

  const handleUpdateLead = async (field: string, value: any) => {
    if (!leadId) return;

    const { error } = await supabase
      .from("leads")
      .update({ [field]: value })
      .eq("id", leadId);

    if (error) {
      toast.error("Failed to update lead");
    } else {
      toast.success("Lead updated");
      fetchLeadDetails();
      onLeadUpdated();
    }
  };

  const handleAddNote = async () => {
    if (!leadId || !newNote.trim()) return;

    const { error } = await supabase.from("lead_notes").insert({
      lead_id: leadId,
      author_id: currentUserId,
      body: newNote,
    });

    if (error) {
      toast.error("Failed to add note");
    } else {
      toast.success("Note added");
      setNewNote("");
      fetchLeadDetails();
      onLeadUpdated();
    }
  };

  const handleAddTask = async () => {
    if (!leadId || !newTask.title.trim()) return;

    const { error } = await supabase.from("lead_tasks").insert({
      lead_id: leadId,
      title: newTask.title,
      assignee_id: newTask.assignee_id || null,
      due_at: newTask.due_at || null,
    });

    if (error) {
      toast.error("Failed to add task");
    } else {
      toast.success("Task added");
      setNewTask({ title: "", assignee_id: currentUserId || "", due_at: "" });
      fetchLeadDetails();
      onLeadUpdated();
    }
  };

  const handleToggleTask = async (taskId: string, currentStatus: string) => {
    const newStatus = currentStatus === "open" ? "done" : "open";
    
    const { error } = await supabase
      .from("lead_tasks")
      .update({ status: newStatus })
      .eq("id", taskId);

    if (error) {
      toast.error("Failed to update task");
    } else {
      fetchLeadDetails();
      onLeadUpdated();
    }
  };

  if (!lead) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{lead.title}</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Status & Owner */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Status</Label>
              <Select
                value={lead.status}
                onValueChange={(value) => handleUpdateLead("status", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="discovery">Discovery</SelectItem>
                  <SelectItem value="proposal_sent">Proposal Sent</SelectItem>
                  <SelectItem value="follow_up">Follow Up</SelectItem>
                  <SelectItem value="closed_won">Closed Won</SelectItem>
                  <SelectItem value="closed_lost">Closed Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Owner</Label>
              <Select
                value={lead.owner_id || ""}
                onValueChange={(value) => handleUpdateLead("owner_id", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select owner" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.full_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="font-semibold">Overview</h3>
            
            {lead.companies && (
              <div>
                <Label className="text-muted-foreground">Company</Label>
                <p className="font-medium">{lead.companies.name}</p>
              </div>
            )}

            {lead.contacts && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Contact</Label>
                  <p className="font-medium">
                    {lead.contacts.first_name} {lead.contacts.last_name}
                  </p>
                </div>
                {lead.contacts.email && (
                  <div>
                    <Label className="text-muted-foreground">Email</Label>
                    <p className="font-medium">{lead.contacts.email}</p>
                  </div>
                )}
                {lead.contacts.phone && (
                  <div>
                    <Label className="text-muted-foreground">Phone</Label>
                    <p className="font-medium">{lead.contacts.phone}</p>
                  </div>
                )}
                {lead.contacts.title && (
                  <div>
                    <Label className="text-muted-foreground">Title</Label>
                    <p className="font-medium">{lead.contacts.title}</p>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {lead.service_type && (
                <div>
                  <Label className="text-muted-foreground">Service Type</Label>
                  <p className="font-medium capitalize">{lead.service_type}</p>
                </div>
              )}
              {lead.source && (
                <div>
                  <Label className="text-muted-foreground">Source</Label>
                  <p className="font-medium capitalize">{lead.source}</p>
                </div>
              )}
              {lead.budget_range && (
                <div>
                  <Label className="text-muted-foreground">Budget Range</Label>
                  <p className="font-medium">{lead.budget_range}</p>
                </div>
              )}
              {lead.amount && (
                <div>
                  <Label className="text-muted-foreground">Deal Value</Label>
                  <p className="font-medium">${lead.amount}</p>
                </div>
              )}
              {lead.close_date && (
                <div>
                  <Label className="text-muted-foreground">Expected Close</Label>
                  <p className="font-medium">{format(new Date(lead.close_date), "MMM d, yyyy")}</p>
                </div>
              )}
              {lead.priority && (
                <div>
                  <Label className="text-muted-foreground">Priority</Label>
                  <Badge variant="outline" className="capitalize">{lead.priority}</Badge>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <Label className="text-muted-foreground">Created</Label>
                <p>{format(new Date(lead.created_at), "MMM d, yyyy h:mm a")}</p>
              </div>
              {lead.last_activity_at && (
                <div>
                  <Label className="text-muted-foreground">Last Activity</Label>
                  <p>{formatDistanceToNow(new Date(lead.last_activity_at), { addSuffix: true })}</p>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Notes */}
          <div className="space-y-3">
            <h3 className="font-semibold">Notes</h3>
            
            <div className="space-y-2">
              <Textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows={3}
              />
              <Button onClick={handleAddNote} disabled={!newNote.trim()}>
                Add Note
              </Button>
            </div>

            <div className="space-y-3 mt-4">
              {notes.map((note) => (
                <div key={note.id} className="p-3 bg-muted/50 rounded-lg space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{note.users?.full_name || "Unknown"}</span>
                    <span className="text-muted-foreground">
                      {formatDistanceToNow(new Date(note.created_at), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm">{note.body}</p>
                </div>
              ))}
              {notes.length === 0 && (
                <p className="text-sm text-muted-foreground">No notes yet</p>
              )}
            </div>
          </div>

          <Separator />

          {/* Tasks */}
          <div className="space-y-3">
            <h3 className="font-semibold">Tasks</h3>
            
            <div className="space-y-2">
              <Input
                placeholder="Task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={newTask.assignee_id}
                  onValueChange={(value) => setNewTask({ ...newTask, assignee_id: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.full_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  value={newTask.due_at}
                  onChange={(e) => setNewTask({ ...newTask, due_at: e.target.value })}
                />
              </div>
              <Button onClick={handleAddTask} disabled={!newTask.title.trim()}>
                Add Task
              </Button>
            </div>

            <div className="space-y-2 mt-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Checkbox
                    checked={task.status === "done"}
                    onCheckedChange={() => handleToggleTask(task.id, task.status)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <p className={`text-sm font-medium ${task.status === "done" ? "line-through text-muted-foreground" : ""}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      {task.users && <span>{task.users.full_name}</span>}
                      {task.due_at && (
                        <span>Due: {format(new Date(task.due_at), "MMM d")}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {tasks.length === 0 && (
                <p className="text-sm text-muted-foreground">No tasks yet</p>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
