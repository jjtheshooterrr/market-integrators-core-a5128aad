import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobSlug: string;
  jobTitle: string;
}

const applicationSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(50).optional(),
  location: z.string().trim().max(200).optional(),
  linkedin_url: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  portfolio_url: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  resume_url: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  cover_letter: z.string().trim().max(2000).optional(),
});

export const ApplicationModal = ({ isOpen, onClose, jobSlug, jobTitle }: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin_url: "",
    portfolio_url: "",
    resume_url: "",
    cover_letter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = applicationSchema.parse(formData);
      setIsSubmitting(true);

      const payload = {
        job_ref: jobSlug,
        full_name: validated.full_name,
        email: validated.email,
        phone: validated.phone || null,
        location: validated.location || null,
        linkedin_url: validated.linkedin_url || null,
        portfolio_url: validated.portfolio_url || null,
        resume_url: validated.resume_url || null,
        cover_letter: validated.cover_letter || null,
        answers: {},
      };

      const { error } = await supabase.from("job_applications" as any).insert(payload);

      if (error) throw error;

      toast({
        title: "Application Submitted",
        description: "Thank you for applying! We'll review your application and get back to you soon.",
      });

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        location: "",
        linkedin_url: "",
        portfolio_url: "",
        resume_url: "",
        cover_letter: "",
      });
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="full_name">Full Name *</Label>
            <Input
              id="full_name"
              value={formData.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
              placeholder="John Doe"
              maxLength={100}
            />
            {errors.full_name && <p className="text-sm text-destructive mt-1">{errors.full_name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              maxLength={255}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+1 (555) 000-0000"
              maxLength={50}
            />
            {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Houston, TX"
              maxLength={200}
            />
          </div>

          <div>
            <Label htmlFor="linkedin_url">LinkedIn URL</Label>
            <Input
              id="linkedin_url"
              type="url"
              value={formData.linkedin_url}
              onChange={(e) => handleChange("linkedin_url", e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
            />
            {errors.linkedin_url && <p className="text-sm text-destructive mt-1">{errors.linkedin_url}</p>}
          </div>

          <div>
            <Label htmlFor="portfolio_url">Portfolio URL</Label>
            <Input
              id="portfolio_url"
              type="url"
              value={formData.portfolio_url}
              onChange={(e) => handleChange("portfolio_url", e.target.value)}
              placeholder="https://yourportfolio.com"
            />
            {errors.portfolio_url && <p className="text-sm text-destructive mt-1">{errors.portfolio_url}</p>}
          </div>

          <div>
            <Label htmlFor="resume_url">Resume URL</Label>
            <Input
              id="resume_url"
              type="url"
              value={formData.resume_url}
              onChange={(e) => handleChange("resume_url", e.target.value)}
              placeholder="https://drive.google.com/yourresume"
            />
            {errors.resume_url && <p className="text-sm text-destructive mt-1">{errors.resume_url}</p>}
          </div>

          <div>
            <Label htmlFor="cover_letter">Cover Letter</Label>
            <Textarea
              id="cover_letter"
              value={formData.cover_letter}
              onChange={(e) => handleChange("cover_letter", e.target.value)}
              placeholder="Tell us why you'd be a great fit..."
              rows={6}
              maxLength={2000}
            />
            <p className="text-xs text-muted-foreground mt-1">{formData.cover_letter.length}/2000</p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
