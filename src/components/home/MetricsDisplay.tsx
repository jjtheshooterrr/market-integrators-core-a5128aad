import { useQuery } from "@apollo/client/react"; // compatible with your build
import { GET_HOME_METRICS } from "@/lib/graphql/queries";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import * as Icons from "lucide-react";

interface MetricNode {
  id: string;
  label: string;
  value: number;
  suffix: string | null;
  icon: string | null;
}

interface MetricsData {
  mi_home_metricsCollection: {
    edges: Array<{ node: MetricNode }>;
  };
}

// Version-agnostic error logger (no Apollo types needed)
function logApolloError(err: unknown) {
  const e = err as any;
  // eslint-disable-next-line no-console
  console.error("🚨 Metrics GraphQL error:", {
    message: e?.message,
    graphQLErrors: e?.graphQLErrors,
    networkError: e?.networkError,
  });
}

const MetricsDisplay = () => {
  const { loading, error, data } = useQuery<MetricsData>(GET_HOME_METRICS);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  if (error) logApolloError(error);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-2" />
            <div className="h-6 bg-muted rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive p-4">
        <p>Unable to load metrics. Please try again later.</p>
      </div>
    );
  }

  const metrics = data?.mi_home_metricsCollection?.edges || [];

  const CountUpMetric = ({ value }: { value: number }) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (inView && numberRef.current) {
        const targetValue = Number(value);
        gsap.to(numberRef.current, {
          textContent: targetValue,
          duration: 0.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            if (numberRef.current) {
              const current = (this.targets() as any)[0]?.textContent ?? "0";
              const val = Math.ceil(Number(current));
              numberRef.current.textContent = val.toLocaleString();
            }
          },
        });
      }
    }, [inView, value]);

    return <span ref={numberRef}>0</span>;
  };

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {metrics.map(({ node }, index) => {
        const IconComponent = node.icon
          ? (Icons as any)[
              node.icon
                .split("-")
                .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
                .join("")
            ]
          : null;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
              <div className="text-4xl font-bold">
                {node.suffix === "$" && <span className="text-primary">{node.suffix}</span>}
                <CountUpMetric value={Number(node.value)} />
                {node.suffix && node.suffix !== "$" && <span className="text-primary">{node.suffix}</span>}
              </div>
            </div>
            <p className="text-muted-foreground">{node.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MetricsDisplay;
