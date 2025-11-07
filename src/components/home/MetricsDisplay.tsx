import { useQuery } from '@apollo/client/react';
import { GET_HOME_METRICS } from '@/lib/graphql/queries';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import * as Icons from 'lucide-react';

interface MetricNode {
  id: string;
  label: string;
  value: number;
  suffix: string | null;
  icon: string | null;
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
    console.log('MetricsDisplay: Loading...');
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
    console.error('MetricsDisplay Error:', error);
    return (
      <div className="text-center text-destructive p-4">
        <p>Unable to load metrics. Please try again later.</p>
      </div>
    );
  }

  console.log('MetricsDisplay Data:', data);

  const metrics = data?.mi_home_metricsCollection?.edges || [];

  const CountUpMetric = ({ value, suffix }: { value: number; suffix: string | null }) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (inView && numberRef.current) {
        gsap.from(numberRef.current, {
          textContent: 0,
          duration: 0.8,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            if (numberRef.current) {
              const val = Math.ceil(Number(this.targets()[0].textContent));
              numberRef.current.textContent = val.toLocaleString();
            }
          }
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
                .split('-')
                .map((part: string, i: number) =>
                  i === 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)
                )
                .join('')
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
                {node.suffix === '$' && <span className="text-primary">{node.suffix}</span>}
                <CountUpMetric value={node.value} suffix={node.suffix} />
                {node.suffix && node.suffix !== '$' && (
                  <span className="text-primary">{node.suffix}</span>
                )}
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
