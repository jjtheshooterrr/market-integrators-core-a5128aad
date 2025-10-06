import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary-foreground mb-6">
            Ready to Accelerate Your Business Growth?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get a free, customized digital marketing proposal tailored to your business goals. 
            No commitments, no pressure—just actionable strategies to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="btn-text">
              <Link to="/contact-us">
                Request Free Proposal <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <a href="tel:+1234567890">
                <Phone className="mr-2" size={18} /> (123) 456-7890
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
