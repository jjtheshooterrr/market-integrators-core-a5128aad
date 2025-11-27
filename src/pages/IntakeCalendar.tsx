import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import CustomCalendar from "@/components/CustomCalendar";

export default function IntakeCalendar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const submissionId = searchParams.get("id");

  const [submission, setSubmission] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
    } catch (error) {
      console.error("Error fetching submission:", error);
      toast.error("Failed to load submission details");
    }
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleConfirmAppointment = async () => {
    if (!selectedDate || !selectedTime || !submission) {
      toast.error("Please select both a date and time");
      return;
    }

    setIsSubmitting(true);

    try {
      const scheduledDateIso = selectedDate.toISOString().split("T")[0];

      // Check for existing appointment at this date and time to avoid double booking
      try {
        const { data: existingAppointments, error: existingError } = await supabase
          .from("calendar_appointments")
          .select("id")
          .eq("scheduled_date", scheduledDateIso)
          .eq("scheduled_time", selectedTime);

        if (existingError) {
          console.error("Error checking existing appointment:", existingError);
        } else if (existingAppointments && existingAppointments.length > 0) {
          toast.error("That time slot has just been booked. Please choose another time.");
          setIsSubmitting(false);
          return;
        }
      } catch (checkError) {
        console.error("Unexpected error while checking for existing appointment:", checkError);
      }

      // Save appointment to database
      const { error: appointmentError } = await supabase.from("calendar_appointments").insert({
        submission_id: submissionId,
        customer_name: submission.name,
        customer_email: submission.email,
        scheduled_date: scheduledDateIso,
        scheduled_time: selectedTime,
      });

      if (appointmentError) throw appointmentError;

      // Update submission to mark calendar as scheduled
      const { error: updateError } = await supabase
        .from("client_intake_submissions")
        .update({ calendar_scheduled: true })
        .eq("id", submissionId);

      if (updateError) throw updateError;

      // Convert selectedTime (e.g. "2:00 PM") into a proper Date range
      const [hoursStr, minutesStr] = selectedTime.replace(/\s(AM|PM)/, "").split(":");
      const hours = Number(hoursStr);
      const minutes = Number(minutesStr);
      const isPM = selectedTime.includes("PM");
      const hour24 = isPM && hours !== 12 ? hours + 12 : !isPM && hours === 12 ? 0 : hours;

      const startDateTime = new Date(selectedDate);
      startDateTime.setHours(hour24, minutes, 0, 0);

      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 120);

      // Build selected services as an array safely
      const selectedServicesArray = Array.isArray(submission.selected_services)
        ? submission.selected_services
        : submission.selected_services
          ? [submission.selected_services]
          : [];

      // 1) Create Google Calendar event
      const calendarPayload = {
        summary: `Consultation - ${submission.name}`,
        description: `Consultation with ${submission.name} from ${submission.company || "N/A"
          }\n\nServices: ${JSON.stringify(selectedServicesArray)}\nPhone: ${submission.phone || "N/A"}`,
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        attendeeEmail: submission.email,
        attendeeName: submission.name,
      };



      const { error: calendarError } = await supabase.functions.invoke("create-calendar-event", {
        body: calendarPayload,
      });

      if (calendarError) {
        console.error("Calendar event creation failed:", calendarError);
        toast.error("Appointment saved but calendar event failed. We'll contact you shortly.");
      }

      // 2) Send confirmation emails
      const emailPayload = {
        customerName: submission.name,
        customerEmail: submission.email,
        scheduledDate: scheduledDateIso,
        scheduledTime: selectedTime,
        company: submission.company,
        phone: submission.phone,
        selectedServices: selectedServicesArray,
      };



      const { error: emailError } = await supabase.functions.invoke("send-intake-confirmation", {
        body: emailPayload,
      });

      if (emailError) throw emailError;

      setIsConfirmed(true);
      toast.success("Appointment confirmed! Check your email for details.");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error confirming appointment:", error);
      toast.error("Failed to confirm appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 pt-24 pb-8 md:py-16 max-w-3xl mx-auto w-full flex items-center justify-center">
          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">All Set!</h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your consultation has been scheduled for{" "}
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              at {selectedTime}.
            </p>
            <p className="text-sm text-muted-foreground">Check your email for confirmation details.</p>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 pt-24 pb-8 md:py-16 max-w-5xl mx-auto w-full">
        <Card className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Consultation</h1>
            <p className="text-lg text-muted-foreground mb-2">Choose a date and time that works best for you.</p>
            {submission && (
              <p className="text-sm text-muted-foreground">Hi {submission.name}, select your preferred time below.</p>
            )}
          </div>

          <CustomCalendar
            onSelectDateTime={handleDateTimeSelect}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />

          {selectedDate && selectedTime && (
            <div className="mt-8 space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">Selected Time:</p>
                <p className="text-lg">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at {selectedTime}
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm">
                  <strong>What to expect:</strong> During this 30-minute consultation, we'll discuss your goals, review
                  your intake responses, and create a customized strategy for your project.
                </p>
              </div>

              <Button onClick={handleConfirmAppointment} disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? "Confirming..." : "Confirm Appointment"}
              </Button>
            </div>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
