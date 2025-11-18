import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IntakeEntry() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Learn About Your Business Before Your Consultation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Take 5 minutes to tell us about your goals, challenges, and what success looks like for your business.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => navigate("/intake/form")}
          >
            Start Intake
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
