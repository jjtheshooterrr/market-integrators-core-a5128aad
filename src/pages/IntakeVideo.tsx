import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LazyStreamHLS from "@/components/LazyStreamHLS";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function IntakeVideo() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const submissionId = searchParams.get("id");
  const videoId = searchParams.get("videoId") || "a0c2a445181eb89c220f32cb39a2329f";
  const [videoEnded, setVideoEnded] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!submissionId) {
      toast.error("Invalid submission ID");
      navigate("/intake");
      return;
    }
  }, [submissionId, navigate]);

  const handleContinue = async () => {
    if (!submissionId) return;

    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from("client_intake_submissions")
        .update({ video_watched: true })
        .eq("id", submissionId);

      if (error) throw error;

      navigate(`/intake/schedule?id=${submissionId}`);
    } catch (error) {
      console.error("Error updating submission:", error);
      toast.error("Failed to update status. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Card className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Please Watch This Quick Overview
            </h1>
            <p className="text-lg text-muted-foreground">
              This 3-minute video will help you understand our process before scheduling your consultation.
            </p>
          </div>

          <div className="w-full mb-8">
            <LazyStreamHLS
              videoId={videoId}
              title="Introduction Video"
              poster={`https://customer-fupcxqt1psuecjaw.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg`}
              ratio="16:9"
              clickOnly={false}
              autoPlayMuted={false}
              controls={true}
              onEnded={() => setVideoEnded(true)}
            />
          </div>

          <div className="text-center">
            {!videoEnded ? (
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p>Please watch the video to continue</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="font-semibold">Video completed!</p>
                </div>
                <Button 
                  size="lg" 
                  onClick={handleContinue}
                  disabled={isUpdating}
                  className="px-8"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Continue to Schedule Your Consultation"
                  )}
                </Button>
              </div>
            )}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
