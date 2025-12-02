import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AIAssistantTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingContext, setIsLoadingContext] = useState(false);
  const [crmContext, setCrmContext] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchCRMContext = async () => {
    setIsLoadingContext(true);
    try {
      // Fetch all CRM data
      const [leadsRes, companiesRes, contactsRes, usersRes, notesRes, tasksRes] = await Promise.all([
        supabase.from("leads").select("*, companies(name), contacts(first_name, last_name, email), users(full_name)"),
        supabase.from("companies").select("*"),
        supabase.from("contacts").select("*"),
        supabase.from("users").select("*"),
        supabase.from("lead_notes").select("*, users(full_name)"),
        supabase.from("lead_tasks").select("*, users(full_name)")
      ]);

      // Calculate stats
      const leads = leadsRes.data || [];
      const stats = {
        totalLeads: leads.length,
        newLeads: leads.filter(l => l.status === "new").length,
        contactedLeads: leads.filter(l => l.status === "contacted").length,
        discoveryLeads: leads.filter(l => l.status === "discovery").length,
        proposalSentLeads: leads.filter(l => l.status === "proposal_sent").length,
        closedWonLeads: leads.filter(l => l.status === "closed_won").length,
        closedLostLeads: leads.filter(l => l.status === "closed_lost").length,
        totalValue: leads.reduce((sum, l) => sum + (l.amount || 0), 0),
      };

      const context = {
        leads: leadsRes.data,
        companies: companiesRes.data,
        contacts: contactsRes.data,
        users: usersRes.data,
        notes: notesRes.data,
        tasks: tasksRes.data,
        stats,
        timestamp: new Date().toISOString()
      };

      setCrmContext(context);
      toast.success("CRM data loaded successfully");
    } catch (error) {
      console.error("Error fetching CRM context:", error);
      toast.error("Failed to load CRM data");
    } finally {
      setIsLoadingContext(false);
    }
  };

  useEffect(() => {
    fetchCRMContext();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("deepseek-chat", {
        body: {
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          context: crmContext,
        },
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling DeepSeek:", error);
      toast.error("Failed to get AI response");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            AI Assistant
          </h2>
          <p className="text-muted-foreground">
            Ask questions about your CRM data, get summaries, and insights
          </p>
          {crmContext && (
            <p className="text-xs text-muted-foreground mt-1">
              Data loaded: {crmContext.stats.totalLeads} leads, {crmContext.companies?.length || 0} companies
            </p>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchCRMContext}
          disabled={isLoadingContext}
        >
          {isLoadingContext ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Card className="flex-1 overflow-y-auto p-4 mb-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-center text-muted-foreground">
            <div>
              <Sparkles className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Start a conversation with your AI assistant</p>
              <p className="text-sm mt-2">
                Try: "Summarize my leads" or "What's my pipeline status?"
              </p>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-4 py-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </Card>

      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about your CRM data..."
          className="resize-none"
          rows={3}
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          size="icon"
          className="h-auto"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
