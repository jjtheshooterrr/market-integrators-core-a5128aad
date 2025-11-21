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

// Replaces SphereLoader with the new hex animation
const HexLoader = () => {
  const ring1 = ["c1", "c2", "c3", "c4", "c5", "c6"];
  const ring2 = ["c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16"];
  const ring3 = [
    "c17",
    "c18",
    "c19",
    "c20",
    "c21",
    "c22",
    "c23",
    "c24",
    "c25",
    "c26",
    "c27",
    "c28",
    "c29",
    "c30",
    "c31",
    "c32",
    "c33",
    "c34",
    "c35",
    "c36",
    "c37",
  ];

  const Gel = ({ cls }: { cls: string }) => (
    <div className={`gel ${cls}`}>
      <div className="hex-brick h2" />
      <div className="hex-brick h3" />
      <div className="hex-brick" />
    </div>
  );

  return (
    <div className="relative h-[200px]">
      <div className="socket">
        {/* center */}
        <div className="gel center-gel">
          <div className="hex-brick h2" />
          <div className="hex-brick h3" />
          <div className="hex-brick" />
        </div>

        {/* ring 1 */}
        {ring1.map((c) => (
          <Gel key={c} cls={`${c} r1`} />
        ))}

        {/* ring 2 */}
        {ring2.map((c) => (
          <Gel key={c} cls={`${c} r2`} />
        ))}

        {/* ring 3 */}
        {ring3.map((c) => (
          <Gel key={c} cls={`${c} r3`} />
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        .socket {
          width: 200px;
          height: 200px;
          position: absolute;
          left: 50%;
          margin-left: -100px;
          top: 50%;
          margin-top: -100px;
        }

        .hex-brick {
          background: #000000;
          width: 30px;
          height: 17px;
          position: absolute;
          top: 5px;
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
        }

        .h2 {
          transform: rotate(60deg);
          -webkit-transform: rotate(60deg);
        }

        .h3 {
          transform: rotate(-60deg);
          -webkit-transform: rotate(-60deg);
        }

        .gel {
          height: 30px;
          width: 30px;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;
          position: absolute;
          top: 50%;
          left: 50%;
        }

        .center-gel {
          margin-left: -15px;
          margin-top: -15px;
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
        }

        .c1 { margin-left: -47px; margin-top: -15px; }
        .c2 { margin-left: -31px; margin-top: -43px; }
        .c3 { margin-left: 1px; margin-top: -43px; }
        .c4 { margin-left: 17px; margin-top: -15px; }
        .c5 { margin-left: -31px; margin-top: 13px; }
        .c6 { margin-left: 1px; margin-top: 13px; }
        .c7 { margin-left: -63px; margin-top: -43px; }
        .c8 { margin-left: 33px; margin-top: -43px; }
        .c9 { margin-left: -15px; margin-top: 41px; }
        .c10 { margin-left: -63px; margin-top: 13px; }
        .c11 { margin-left: 33px; margin-top: 13px; }
        .c12 { margin-left: -15px; margin-top: -71px; }
        .c13 { margin-left: -47px; margin-top: -71px; }
        .c14 { margin-left: 17px; margin-top: -71px; }
        .c15 { margin-left: -47px; margin-top: 41px; }
        .c16 { margin-left: 17px; margin-top: 41px; }
        .c17 { margin-left: -79px; margin-top: -15px; }
        .c18 { margin-left: 49px; margin-top: -15px; }
        .c19 { margin-left: -63px; margin-top: -99px; }
        .c20 { margin-left: 33px; margin-top: -99px; }
        .c21 { margin-left: 1px; margin-top: -99px; }
        .c22 { margin-left: -31px; margin-top: -99px; }
        .c23 { margin-left: -63px; margin-top: 69px; }
        .c24 { margin-left: 33px; margin-top: 69px; }
        .c25 { margin-left: 1px; margin-top: 69px; }
        .c26 { margin-left: -31px; margin-top: 69px; }
        .c27 { margin-left: -79px; margin-top: -15px; }
        .c28 { margin-left: -95px; margin-top: -43px; }
        .c29 { margin-left: -95px; margin-top: 13px; }
        .c30 { margin-left: 49px; margin-top: 41px; }
        .c31 { margin-left: -79px; margin-top: -71px; }
        .c32 { margin-left: -111px; margin-top: -15px; }
        .c33 { margin-left: 65px; margin-top: -43px; }
        .c34 { margin-left: 65px; margin-top: 13px; }
        .c35 { margin-left: -79px; margin-top: 41px; }
        .c36 { margin-left: 49px; margin-top: -71px; }
        .c37 { margin-left: 81px; margin-top: -15px; }

        .r1 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.2s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.2s;
        }

        .r2 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.4s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.4s;
        }

        .r3 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.6s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.6s;
        }

        .r1 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.2s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.2s;
        }

        .r2 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.4s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.4s;
        }

        .r3 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: 0.6s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: 0.6s;
        }

        @keyframes pulse00 {
          0% { -webkit-transform: scale(1); transform: scale(1); }
          50% { -webkit-transform: scale(0.01); transform: scale(0.01); }
          100% { -webkit-transform: scale(1); transform: scale(1); }
        }

        @keyframes fade00 {
          0% { background: #252525; }
          50% { background: #000000; }
          100% { background: #353535; }
        }
      `}</style>
    </div>
  );
};

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const { error } = await supabase.from("contact_leads").insert({
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        company: (formData.get("company") as string) || null,
        website: (formData.get("website") as string) || null,
        service: service,
        message: formData.get("message") as string,
        consent: true,
      });
      if (error) throw error;

      // Send confirmation emails
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          company: (formData.get("company") as string) || undefined,
          website: (formData.get("website") as string) || undefined,
          service: service,
          message: formData.get("message") as string,
        },
      });
      if (emailError) {
        console.error("Error sending emails:", emailError);
        // Don't fail the whole submission if email fails
      }
      toast.success("Thank you! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setService("");
    } catch (error) {
      console.error("Error submitting form:", error);
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
        <section className="section-padding bg-secondary pb-32">
          <div className="container-custom text-center">
            <h1 className="mb-6">Let's Grow Your Business Together</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-20 text-base">
              Get a free proposal customized to your business goals. We're here to answer your questions and help you
              succeed.
            </p>
            <div className="flex justify-center mb-[-8rem]">
              <HexLoader />
            </div>
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
                        <SelectItem value="youtube">YouTube Advertising</SelectItem>
                        <SelectItem value="cro">Conversion Rate Optimization</SelectItem>
                        <SelectItem value="landing">Landing Pages</SelectItem>
                        <SelectItem value="social">Paid Social Advertising</SelectItem>
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
                      I agree to receive communications from Market Integrators about my inquiry. I understand I can
                      unsubscribe at any time.
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
                        <a
                          href="tel:+18325104920"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (832) 510-4920
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
                        <a
                          href="mailto:marketintegrator@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          marketintegrator@gmail.com
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
                          Houston, TX
                          <br />
                          Serving clients nationwide
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold mb-3">What Happens Next?</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">
                          1
                        </span>
                        <span>We'll review your information and goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">
                          2
                        </span>
                        <span>Schedule a discovery call to learn more about your business</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 text-primary font-bold">
                          3
                        </span>
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
