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
  ChevronRight,
  Loader2
} from "lucide-react";
import { useState, useEffect } from "react";
import { getSettings, saveSettings } from "@/utils/mobileCapabilities";

const Settings = () => {
  const [settings, setSettings] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedSettings = await getSettings();
      setSettings(savedSettings);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSetting = async (key: string, value: boolean) => {
    setIsSaving(true);
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);
    
    try {
      await saveSettings(updatedSettings);
      
      // Add haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      // Revert on error
      setSettings(settings);
    } finally {
      setIsSaving(false);
    }
  };
  const settingsGroups = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile Settings", hasToggle: false },
        { 
          icon: Bell, 
          label: "Notifications", 
          hasToggle: true, 
          key: "notifications",
          enabled: settings.notifications 
        },
        { icon: Shield, label: "Privacy & Security", hasToggle: false }
      ]
    },
    {
      title: "Data & Storage", 
      items: [
        { 
          icon: Cloud, 
          label: "Cloud Sync", 
          hasToggle: true, 
          key: "cloudSync",
          enabled: settings.cloudSync 
        },
        { 
          icon: Cloud, 
          label: "Auto Backup", 
          hasToggle: true, 
          key: "autoBackup",
          enabled: settings.autoBackup 
        }
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
                        <div className="flex items-center gap-2">
                          {isSaving && (
                            <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />
                          )}
                          <Switch 
                            checked={item.enabled || false}
                            onCheckedChange={(checked) => handleToggleSetting(item.key!, checked)}
                            disabled={isSaving}
                          />
                        </div>
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