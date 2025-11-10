import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioCategories = [
  { name: "All", path: "/creative-portfolio" },
  { name: "AI Animations", path: "/creative-portfolio/artificial-intelligence-prompted-animations" },
  { name: "Graphic Design", path: "/creative-portfolio/graphic-and-visual-design" },
  { name: "Animated Videos", path: "/creative-portfolio/animated-videos-motion-graphics" },
  { name: "Edited Videos", path: "/creative-portfolio/edited-video-short-form-content" },
  { name: "Film Production", path: "/creative-portfolio/film-on-site-production" },
  { name: "Photography", path: "/creative-portfolio/photography-media" },
];

export const PortfolioTabs = () => {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-auto pb-4">
      <Tabs value={location.pathname} className="w-full">
        <TabsList className="inline-flex w-auto min-w-full">
          {portfolioCategories.map((category) => (
            <TabsTrigger key={category.path} value={category.path} asChild className="cursor-pointer">
              <Link to={category.path}>{category.name}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
