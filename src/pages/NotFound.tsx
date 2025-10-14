import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8 px-4">
        <img 
          src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp" 
          alt="Market Integrators Logo" 
          className="h-24 w-24 mx-auto"
        />
        <div className="space-y-4">
          <h1 className="font-heading text-6xl font-bold text-foreground">404</h1>
          <p className="font-body text-xl text-muted-foreground">Page not found</p>
        </div>
        <Button asChild variant="default">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
