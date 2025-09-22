import { Button } from "@/components/ui/button";
import { AionosLogo } from "@/components/AionosLogo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center mb-16">
          <AionosLogo size="lg" />
        </div>
        
        <div className="space-y-6">
          <Button 
            size="lg" 
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold py-6 rounded-full"
          >
            GET STARTED
          </Button>
          
          <p className="text-center text-muted-foreground">
            Already have you account?{" "}
            <Link 
              to="/dashboard" 
              className="text-primary hover:text-primary-hover font-medium transition-smooth"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;