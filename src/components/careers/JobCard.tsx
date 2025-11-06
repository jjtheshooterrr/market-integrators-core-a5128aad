import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface JobCardProps {
  job: {
    slug: string;
    title: string;
    department: string;
    team?: string;
    location: string;
    onsite_requirement: string;
    employment: string;
    seniority: string;
    salary_min?: number;
    salary_max?: number;
    currency?: string;
    tags?: string[];
    brief?: string;
  };
  onApply: (slug: string, title: string) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
            <span>{job.department}</span>
            {job.team && (
              <>
                <span>•</span>
                <span>{job.team}</span>
              </>
            )}
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.onsite_requirement}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{job.employment}</Badge>
            <Badge variant="secondary">{job.seniority}</Badge>
          </div>
          {job.tags && job.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {job.brief && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto font-semibold"
            >
              {isExpanded ? (
                <>
                  Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  View Details <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
            {isExpanded && (
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed whitespace-pre-wrap">
                {job.brief}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <Button onClick={() => onApply(job.slug, job.title)} className="flex-1">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};
