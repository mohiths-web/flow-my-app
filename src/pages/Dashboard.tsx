import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Monitor, Heart, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentPatients = [
    {
      name: "Dr Maya Sharma",
      id: "ID ID Scan",
      date: "2024  Lst Scan7 120-2",
      avatar: "/placeholder.svg"
    },
    {
      name: "Dr sitalln Sharma", 
      id: "ID ID Scan",
      date: "2022 Lst Scan / 120-2",
      avatar: "/placeholder.svg"
    },
    {
      name: "Rescun SediVents",
      id: "ID ID Scan",
      date: "2024 Lst Scan / 120-2", 
      avatar: "/placeholder.svg"
    },
    {
      name: "Secall Patients",
      id: "ID ID Scan",
      date: "2024 Lst Scan / 120-2",
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
        
        {/* User Profile */}
        <div className="flex items-center gap-3 mb-8">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
              MS
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-foreground">Dr. Maya Sharma</h2>
            <p className="text-muted-foreground">Medical Sonographer</p>
          </div>
        </div>

        {/* Start New Scan Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="bg-gradient-primary p-6 border-0 shadow-medium">
            <div className="text-center">
              <Monitor className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-4">Start New Scan</h3>
              <Link to="/connect-device">
                <Button 
                  variant="secondary" 
                  className="w-full bg-primary-foreground/90 text-primary hover:bg-primary-foreground"
                >
                  Dashboard
                </Button>
              </Link>
            </div>
          </Card>
          
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="text-sm font-medium text-foreground mb-2">Quick Insights</h4>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-1 h-8 bg-muted rounded-full" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Heart size={12} />
                <span>Équunte</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Activity size={12} />
                <span>Cloud Sync</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Scans This Week</p>
            </div>
            
            <div className="bg-card/50 p-3 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Scans This Week</div>
              <div className="w-full bg-muted rounded-full h-2 mb-1">
                <div className="bg-accent h-2 rounded-full w-3/4"></div>
              </div>
              <div className="text-xs text-muted-foreground">Cloud Sync Status</div>
            </div>
          </div>
        </div>

        {/* Recent Patients */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Patients</h3>
          <div className="space-y-3">
            {recentPatients.map((patient, index) => (
              <Card key={index} className="p-4 bg-card shadow-soft border-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.id}</p>
                      <p className="text-xs text-muted-foreground">{patient.date}</p>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-primary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;