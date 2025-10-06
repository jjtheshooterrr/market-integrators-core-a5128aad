import { Target, Lightbulb, Rocket, LineChart } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Strategy & Discovery",
      description: "We analyze your business, competitors, and market to create a data-driven marketing roadmap.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Campaign Development",
      description: "Our experts design and build campaigns optimized for maximum ROI and conversions.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Optimize",
      description: "We launch your campaigns and continuously test and optimize for better performance.",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Track & Report",
      description: "Receive detailed analytics and insights showing exactly how your investment is performing.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven process designed to deliver measurable results from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-full" />
                    <Icon className="relative text-primary" size={32} />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 text-6xl font-bold text-primary/5">
                    {step.number}
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
