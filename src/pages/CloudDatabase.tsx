import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CheckCircle, Cloud, Shield } from "lucide-react";

const CloudDatabase = () => {
  const recentScans = [
    {
      name: "Patient: Dr Maya Sharma",
      id: "ID ID Scan",
      date: "2024 Lst Scan16, 2024",
      avatar: "/placeholder.svg",
      verified: true
    },
    {
      name: "John Doe",
      id: "ID ID Scan 121-1",
      date: "2023 Nov 1 Scan7 12024",
      avatar: "/placeholder.svg"
    },
    {
      name: "Dolbere Do",
      id: "ID ID Scan",
      date: "2024 Lst Scan16, 2024", 
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Cloud Database
          </h1>
          <p className="text-muted-foreground">
            Secure Access & Storage for Patient Data
          </p>
        </div>

        {/* Cloud Illustration */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            {/* Cloud with Security Shield */}
            <div className="w-32 h-20 bg-card rounded-full shadow-strong relative">
              <div className="absolute inset-2 bg-gradient-card rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Patient Data Cards around cloud */}
            <div className="absolute -top-4 -left-8">
              <Card className="w-16 h-12 bg-card shadow-medium border-0 transform -rotate-12">
                <div className="p-2 flex items-center gap-1">
                  <div className="w-6 h-6 bg-primary/20 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 bg-muted rounded" />
                    <div className="h-1 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="absolute -top-4 -right-8">
              <Card className="w-16 h-12 bg-card shadow-medium border-0 transform rotate-12">
                <div className="p-2 flex items-center gap-1">
                  <div className="w-6 h-6 bg-accent/20 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 bg-muted rounded" />
                    <div className="h-1 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="absolute -bottom-2 -left-4">
              <Card className="w-16 h-12 bg-card shadow-medium border-0 transform rotate-6">
                <div className="p-2 flex items-center gap-1">
                  <div className="w-6 h-6 bg-success/20 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 bg-muted rounded" />
                    <div className="h-1 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="absolute -bottom-2 -right-4">
              <Card className="w-16 h-12 bg-card shadow-medium border-0 transform -rotate-6">
                <div className="p-2 flex items-center gap-1">
                  <div className="w-6 h-6 bg-warning/20 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 bg-muted rounded" />
                    <div className="h-1 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Recent Scans */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Scans</h3>
          <div className="space-y-3">
            {recentScans.map((scan, index) => (
              <Card key={index} className="p-4 bg-card shadow-soft border-0 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={scan.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {scan.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{scan.name}</p>
                      <p className="text-sm text-muted-foreground">{scan.id}</p>
                      <p className="text-xs text-muted-foreground">{scan.date}</p>
                    </div>
                  </div>
                  {scan.verified && (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sync Status Overlay */}
        <Card className="p-4 bg-card/95 shadow-medium border-0 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-foreground">Sync Status</h4>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-4/5"></div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">All data synced. Last sync: 1 minute ago</p>
        </Card>

        {/* Access Database Button */}
        <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold py-6 rounded-full">
          <Cloud className="w-5 h-5 mr-2" />
          Access Full Database
        </Button>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default CloudDatabase;