// MetricsDisplay.tsx
import { useQuery } from "@apollo/client"; // useQuery lives here
import { GET_HOME_METRICS } from "@/lib/graphql/queries";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import * as Icons from "lucide-react";

interface MetricNode {
  id: string;
  label: string;
  value: number;
  suffix: string | null; // e.g. "$", "+", "k", "%"
  icon: string | null; // e.g. "arrow-up-right", "users"
}

interface MetricsData {
  mi_home_metricsCollection: {
    edges: Array<{
      node: MetricNode;
    }>;
  };
}

const MetricsDisplay = () => {
  const { loading, error, data } = useQuery<MetricsData>(GET_HOME_METRICS);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-2"></div>
            <div className="h-6 bg-muted rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error("MetricsDisplay Error:", error);
    return (
      <div className="text-center text-destructive p-4">
        <p>Unable to load metrics. Please try again later.</p>
      </div>
    );
  }

  const metrics = useMemo(() => data?.mi_home_metricsCollection?.edges ?? [], [data]);

  /**
   * CountUpMetric
   * - Animates from current displayed value (or 0) to the target.
   * - Uses a proxy object { val } so we don't need GSAP TextPlugin.
   * - Guards against React StrictMode double-invocation with hasAnimated ref.
   * - Cleans up tween on unmount.
   */
  const CountUpMetric = ({ value }: { value: number }) => {
    const numberRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      if (!inView || !numberRef.current) return;

      // Prevent double-run in StrictMode and repeated re-entry
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      // Determine starting value from current text (if any)
      const currentText = numberRef.current.textContent?.replace(/[, ]/g, "") ?? "0";
      const startVal = Number.isFinite(Number(currentText)) ? Number(currentText) : 0;

      const counter = { val: startVal };
      const tween = gsap.to(counter, {
        val: value,
        duration: 1.0, // tweak for “fast moving” feel
        ease: "power1.out",
        onUpdate: () => {
          if (!numberRef.current) return;
          // If you expect decimals, change toFixed(0) to e.g. toFixed(1/2)
          numberRef.current.textContent = Math.round(counter.val).toLocaleString();
        },
      });

      return () => {
        tween.kill();
      };
    }, [inView, value]);

    return <span ref={numberRef}>0</span>;
  };

  // Turn "arrow-up-right" → "ArrowUpRight", "users" → "Users"
  const toPascalCase = (name: string) =>
    name
      .split(/[-_ ]+/g)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {metrics.map(({ node }, index) => {
        const iconKey = node.icon ? toPascalCase(node.icon) : null;
        const IconComponent = iconKey ? (Icons as Record<string, any>)[iconKey] : null;

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
                {/* Put $ before, other suffixes after */}
                {node.suffix === "$" && <span className="text-primary">{node.suffix}</span>}
                <CountUpMetric value={node.value} />
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
