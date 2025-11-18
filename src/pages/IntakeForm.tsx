import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const SERVICES = [
  "Website Design & Development",
  "SEO (Search Engine Optimization)",
  "Paid Ads (Google/Meta/LinkedIn)",
  "Branding & Logo Design",
  "Marketing Automation",
  "Custom Software Development",
  "Social Media Management",
  "Content Marketing",
  "Email Marketing",
  "Video Production",
  "Photography",
  "3D Visual Effects & Animation",
  "AI/ML Solutions",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Data Analytics",
  "Not Sure / Need Recommendations"
];

const BUDGET_RANGES = [
  "$0–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not Sure Yet"
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  painPoints: z.string().min(10, "Please provide at least 10 characters")
});

export default function IntakeForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [] as string[],
    budget: "",
    painPoints: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    try {
      if (currentStep === 1) {
        const schema = z.object({
          name: z.string().min(2),
          email: z.string().email(),
          company: z.string().min(2),
        });
        schema.parse({
          name: formData.name,
          email: formData.email,
          company: formData.company
        });
      } else if (currentStep === 2) {
        if (formData.services.length === 0) {
          toast.error("Please select at least one service");
          return false;
        }
      } else if (currentStep === 3) {
        if (!formData.budget) {
          toast.error("Please select a budget range");
          return false;
        }
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("client_intake_submissions")
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company,
          website: formData.website || null,
          selected_services: formData.services,
          budget_range: formData.budget,
          pain_points: formData.painPoints
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Intake submitted successfully!");
      navigate(`/intake/video?id=${data.id}`);
    } catch (error) {
      console.error("Error submitting intake:", error);
      toast.error("Failed to submit intake. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 pt-24 pb-8 md:py-16 max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <Progress value={progress} className="h-2 mb-4" />
          <p className="text-sm text-muted-foreground text-center">
            Step {step} of {totalSteps}
          </p>
        </div>

        <Card className="p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <Label htmlFor="website">Company Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Services Selection</h2>
              <p className="text-muted-foreground">What services are you interested in? (Select all that apply)</p>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {SERVICES.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <Label htmlFor={service} className="font-normal cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Budget Range</h2>
              <p className="text-muted-foreground">What's your estimated budget for this project?</p>
              <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                {BUDGET_RANGES.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <RadioGroupItem value={range} id={range} />
                    <Label htmlFor={range} className="font-normal cursor-pointer">
                      {range}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Tell Us About Your Goals</h2>
              <p className="text-muted-foreground">
                What problems are you dealing with, and what does success look like for you?
              </p>
              <Textarea
                value={formData.painPoints}
                onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
                placeholder="Describe your current challenges, goals, and what you're hoping to achieve..."
                className="min-h-[200px]"
              />
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1 || isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {step < totalSteps ? (
              <Button onClick={handleNext}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
