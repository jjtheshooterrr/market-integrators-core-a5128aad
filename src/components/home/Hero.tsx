import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital Marketing Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="text-primary" size={18} />
            <span className="text-sm font-medium text-primary-foreground">Results-Driven Marketing Agency</span>
          </div>
          
          <h1 className="text-primary-foreground mb-6">
            Digital Marketing That <span className="text-primary">Moves the Needle</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Drive traffic, generate qualified leads, and increase revenue with data-driven PPC, SEO, web design, and video marketing strategies tailored to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-text shadow-red">
              <Link to="/contact-us">
                Request Free Proposal <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">$50M+</div>
              <div className="text-sm text-primary-foreground/80">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
