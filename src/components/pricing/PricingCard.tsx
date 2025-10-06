import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

const PricingCard = ({
  name,
  price,
  unit = "/month",
  description,
  features,
  badge,
  popular = false,
}: PricingCardProps) => {
  return (
    <div className={`card-premium p-8 relative ${popular ? "border-2 border-primary shadow-red" : ""}`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl mb-2">{name}</h3>
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-5xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground ml-2">{unit}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-primary mr-3 mt-0.5 flex-shrink-0" size={20} />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="w-full btn-text" variant={popular ? "default" : "outline"}>
        <Link to="/contact-us">Get Started</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
