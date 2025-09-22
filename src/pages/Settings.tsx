import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { 
  User, 
  Bell, 
  Shield, 
  Cloud, 
  HelpCircle, 
  LogOut,
  ChevronRight 
} from "lucide-react";

const Settings = () => {
  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile Settings", hasToggle: false },
        { icon: Bell, label: "Notifications", hasToggle: true, enabled: true },
        { icon: Shield, label: "Privacy & Security", hasToggle: false }
      ]
    },
    {
      title: "Data & Storage", 
      items: [
        { icon: Cloud, label: "Cloud Sync", hasToggle: true, enabled: true },
        { icon: Cloud, label: "Auto Backup", hasToggle: true, enabled: false }
      ]
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help & Support", hasToggle: false },
        { icon: LogOut, label: "Sign Out", hasToggle: false, dangerous: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>
          
          {/* User Profile Card */}
          <Card className="p-4 bg-card shadow-soft border-0 mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
                  MS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">Dr. Maya Sharma</h3>
                <p className="text-muted-foreground">Medical Sonographer</p>
                <p className="text-sm text-muted-foreground">maya.sharma@hospital.com</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </Card>
        </div>

        {/* Settings Groups */}
        <div className="space-y-6">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                {group.title}
              </h3>
              <Card className="bg-card shadow-soft border-0 overflow-hidden">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={itemIndex}
                      className={`flex items-center justify-between p-4 ${
                        itemIndex < group.items.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${
                          item.dangerous ? 'text-destructive' : 'text-muted-foreground'
                        }`} />
                        <span className={`font-medium ${
                          item.dangerous ? 'text-destructive' : 'text-foreground'
                        }`}>
                          {item.label}
                        </span>
                      </div>
                      
                      {item.hasToggle ? (
                        <Switch checked={item.enabled} />
                      ) : (
                        <ChevronRight className={`w-4 h-4 ${
                          item.dangerous ? 'text-destructive' : 'text-muted-foreground'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </Card>
            </div>
          ))}
        </div>

        {/* App Version */}
        <div className="text-center mt-8 pt-4">
          <p className="text-xs text-muted-foreground">
            AIONOS DIAGNOSTICS v1.0.0
          </p>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Settings;