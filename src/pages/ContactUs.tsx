import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('contact_leads').insert({
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string || null,
        website: formData.get('website') as string || null,
        service: service,
        message: formData.get('message') as string,
        consent: true
      });

      if (error) throw error;
      
      toast.success("Thank you! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setService("");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <h1 className="mb-6">Let's Grow Your Business Together</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a free, no-obligation proposal customized to your business goals. We're here to answer your questions and help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="mb-8">Request Your Free Proposal</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required className="mt-2" />
                  </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input id="website" name="website" type="url" placeholder="https://" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest *</Label>
                    <Select required value={service} onValueChange={setService}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ppc">PPC Management</SelectItem>
                        <SelectItem value="seo">SEO Services</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="video">Video Production</SelectItem>
                        <SelectItem value="cro">Conversion Optimization</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell Us About Your Goals *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      required 
                      className="mt-2 min-h-32" 
                      placeholder="What are you hoping to achieve with digital marketing?"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive communications from Market Integrators about my inquiry. I understand I can unsubscribe at any time.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-text" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Free Proposal"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="card-premium p-8 sticky top-24">
                  <h3 className="text-2xl mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    Prefer to talk? We're here to help. Reach out via phone, email, or visit our office.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                          (123) 456-7890
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm CST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:info@marketintegrators.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@marketintegrators.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Office</h4>
                        <p className="text-muted-foreground">
                          Houston, TX<br />
                          Serving clients nationwide
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold mb-3">What Happens Next?</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">1</span>
                        <span>We'll review your information and goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">2</span>
                        <span>Schedule a discovery call to learn more about your business</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">3</span>
                        <span>Deliver a customized proposal with strategies and pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
