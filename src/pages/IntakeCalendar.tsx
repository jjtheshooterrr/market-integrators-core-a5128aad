import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function IntakeCalendar() {
  const [searchParams] = useSearchParams();
  const submissionId = searchParams.get("id");
  const [submission, setSubmission] = useState<any>(null);

  // Replace with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/your-link";

  useEffect(() => {
    if (!submissionId) {
      toast.error("Invalid submission ID");
      return;
    }

    fetchSubmission();
  }, [submissionId]);

  const fetchSubmission = async () => {
    if (!submissionId) return;

    try {
      const { data, error } = await supabase
        .from("client_intake_submissions")
        .select("*")
        .eq("id", submissionId)
        .single();

      if (error) throw error;
      setSubmission(data);

      // Update that they reached the calendar page
      await supabase
        .from("client_intake_submissions")
        .update({ calendar_scheduled: true })
        .eq("id", submissionId);
    } catch (error) {
      console.error("Error fetching submission:", error);
    }
  };

  // Build prefilled Calendly URL
  const calendlyUrlWithParams = submission
    ? `${CALENDLY_URL}?name=${encodeURIComponent(submission.name)}&email=${encodeURIComponent(submission.email)}&a1=${encodeURIComponent(submission.company)}`
    : CALENDLY_URL;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Card className="p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              You're Almost There!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Schedule your consultation to discuss your project in detail.
            </p>
            {submission && (
              <p className="text-sm text-muted-foreground">
                Hi {submission.name}, we've pre-filled your information below.
              </p>
            )}
          </div>

          <div className="aspect-video w-full mb-8 bg-muted rounded-lg overflow-hidden border-2 border-border">
            <iframe
              src={calendlyUrlWithParams}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Consultation"
            ></iframe>
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <p className="text-sm">Choose a time that works best for you</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm">
                <strong>What to expect:</strong> During this 30-minute consultation, we'll discuss your goals, 
                review your intake responses, and create a customized strategy for your project.
              </p>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
