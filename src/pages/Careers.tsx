import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Rocket, TrendingUp, Users, Clock, Heart, Briefcase } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { JobCard } from "@/components/careers/JobCard";
import { ApplicationModal } from "@/components/careers/ApplicationModal";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
interface Job {
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
}
const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<{
    slug: string;
    title: string;
  } | null>(null);
  const [filters, setFilters] = useState({
    department: "all",
    employment: "all",
    seniority: "all"
  });
  const {
    toast
  } = useToast();
  const benefits = [{
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths tailored to your goals."
  }, {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive, team-oriented environment."
  }, {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options to help you thrive."
  }, {
    icon: Heart,
    title: "Competitive Benefits",
    description: "Comprehensive health coverage, 401(k), and generous PTO."
  }];
  useEffect(() => {
    fetchJobs();
  }, []);
  useEffect(() => {
    applyFilters();
  }, [jobs, filters]);
  const fetchJobs = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from("careers_open_roles" as any).select("*").order("salary_max", {
        ascending: false
      });
      if (error) throw error;
      setJobs(data as any || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load job openings. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const applyFilters = () => {
    let filtered = jobs;
    if (filters.department !== "all") {
      filtered = filtered.filter(job => job.department === filters.department);
    }
    if (filters.employment !== "all") {
      filtered = filtered.filter(job => job.employment === filters.employment);
    }
    if (filters.seniority !== "all") {
      filtered = filtered.filter(job => job.seniority === filters.seniority);
    }
    setFilteredJobs(filtered);
  };
  const uniqueDepartments = Array.from(new Set(jobs.map(j => j.department).filter(Boolean)));
  const uniqueEmployment = Array.from(new Set(jobs.map(j => j.employment).filter(Boolean)));
  const uniqueSeniority = Array.from(new Set(jobs.map(j => j.seniority).filter(Boolean)));
  const handleApply = (slug: string, title: string) => {
    setSelectedJob({
      slug,
      title
    });
  };
  const jobPostingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredJobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: job.brief || job.title,
        datePosted: new Date().toISOString(),
        employmentType: job.employment,
        hiringOrganization: {
          "@type": "Organization",
          name: "Market Integrators",
          sameAs: "https://www.marketintegrators.com"
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location
          }
        },
        baseSalary: job.salary_min && job.salary_max ? {
          "@type": "MonetaryAmount",
          currency: job.currency || "USD",
          value: {
            "@type": "QuantitativeValue",
            minValue: job.salary_min,
            maxValue: job.salary_max,
            unitText: "YEAR"
          }
        } : undefined
      }
    }))
  };
  return <div className="min-h-screen">
      <Helmet>
        <title>Careers at Market Integrators | Join Our Digital Marketing Team</title>
        <meta name="description" content="Explore career opportunities at Market Integrators. Join our team of digital marketing professionals and grow your career in PPC, SEO, web development, and more." />
        <script type="application/ld+json">{JSON.stringify(jobPostingsSchema)}</script>
      </Helmet>

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground">
                Build your career with a leading digital marketing agency. We're looking for talented, passionate individuals who want to make an impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore opportunities to grow your career with us
              </p>

              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <Select value={filters.department} onValueChange={value => setFilters({
                ...filters,
                department: value
              })}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {uniqueDepartments.map(dept => <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>)}
                  </SelectContent>
                </Select>

                <Select value={filters.employment} onValueChange={value => setFilters({
                ...filters,
                employment: value
              })}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Employment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {uniqueEmployment.map(emp => <SelectItem key={emp} value={emp}>
                        {emp}
                      </SelectItem>)}
                  </SelectContent>
                </Select>

                <Select value={filters.seniority} onValueChange={value => setFilters({
                ...filters,
                seniority: value
              })}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seniority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {uniqueSeniority.map(sen => <SelectItem key={sen} value={sen}>
                        {sen}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              {isLoading ? <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading positions...</p>
                </div> : filteredJobs.length === 0 ? <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {jobs.length === 0 ? "No open positions at the moment. Check back soon!" : "No positions match your filters."}
                  </p>
                </div> : <div className="space-y-6">
                  {filteredJobs.map(job => <JobCard key={job.slug} job={job} onApply={handleApply} />)}
                </div>}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <Button asChild size="lg">
                <Link to="/contact-us">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedJob && <ApplicationModal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)} jobSlug={selectedJob.slug} jobTitle={selectedJob.title} />}
    </div>;
};
export default Careers;