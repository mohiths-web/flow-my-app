import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const ScanModes = () => {
  const scanModes = [
    {
      name: "B-MODE",
      image: "/placeholder.svg", // This would be the actual ultrasound image
      description: "Basic ultrasound imaging"
    },
    {
      name: "DOPPLER", 
      image: "/placeholder.svg",
      description: "Blood flow analysis"
    },
    {
      name: "ELASTOGRAPHY",
      image: "/placeholder.svg", 
      description: "Tissue stiffness mapping"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="text-center mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Connect your AIONS Transducer
          </h1>
        </div>

        {/* Scan Mode Selection */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {scanModes.map((mode, index) => (
            <div key={index} className="text-center">
              <p className="text-sm font-medium text-foreground mb-2">{mode.name}</p>
              <Card className="aspect-square bg-card shadow-medium border-0 overflow-hidden">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-muted-foreground/20 rounded" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Capture Button */}
        <div className="mb-8">
          <Link to="/scan-results">
            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold py-6 rounded-full">
              CAPTURE IMAGE
            </Button>
          </Link>
        </div>

        {/* Bottom Mode Selection */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10 bg-primary/10">
              <AvatarFallback className="text-primary font-medium text-sm">
                BM
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">B-Mode</span>
          </div>
          
          <Button 
            size="lg"
            className="w-20 h-20 rounded-full bg-gradient-primary hover:shadow-glow transition-smooth shadow-medium"
          >
            <span className="text-sm font-bold">START<br/>SCAN</span>
          </Button>
          
          <div className="text-right">
            <span className="text-sm font-medium text-foreground">Elastography</span>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ScanModes;