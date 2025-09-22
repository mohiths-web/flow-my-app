import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Bluetooth, Smartphone, Loader2, Wifi } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ultrasoundDevice from "@/assets/ultrasound-device.png";
import { simulateDeviceScan } from "@/utils/mobileCapabilities";

const ConnectDevice = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [availableDevices, setAvailableDevices] = useState<any[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null);

  const handleScanDevices = async () => {
    setIsScanning(true);
    setAvailableDevices([]);
    
    try {
      const devices = await simulateDeviceScan();
      setAvailableDevices(devices);
    } catch (error) {
      console.error('Error scanning devices:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleConnectDevice = (deviceId: string) => {
    setConnectedDevice(deviceId);
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
  };

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
          <p className="text-muted-foreground">
            Ensure your device powered on and within range.
          </p>
        </div>

        {/* Device Connection Illustration */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="relative">
            <img 
              src={ultrasoundDevice} 
              alt="Ultrasound Device" 
              className="w-24 h-24 drop-shadow-lg"
            />
          </div>
          
          <div className="flex-1 border-t-2 border-dashed border-muted-foreground/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background px-2">
                <Bluetooth className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-2xl border-2 border-primary/20">
            <Smartphone className="w-16 h-16 text-primary" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Bluetooth className="w-3 h-3 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Scan Button */}
        <div className="mb-8">
          <Button 
            onClick={handleScanDevices}
            disabled={isScanning}
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold py-6 rounded-full"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              "Scan for Devices"
            )}
          </Button>
        </div>

        {/* Available Devices */}
        {(availableDevices.length > 0 || isScanning) && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Available Devices</h3>
            <div className="space-y-3">
              {isScanning && (
                <Card className="p-4 bg-card shadow-soft border-0">
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    <span className="text-foreground">Scanning for devices...</span>
                  </div>
                </Card>
              )}
              {availableDevices.map((device, index) => (
                <Card key={index} className="p-4 bg-card shadow-soft border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {connectedDevice === device.id ? (
                          <Bluetooth className="w-5 h-5 text-success" />
                        ) : device.status === 'Connected' ? (
                          <Bluetooth className="w-5 h-5 text-primary" />
                        ) : device.status === 'Available' ? (
                          <Wifi className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <div className="w-3 h-3 bg-muted rounded-full" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{device.name}</p>
                        <p className="text-sm text-muted-foreground">{device.id}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Signal: {device.signal}%</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            device.status === 'Available' ? 'bg-success/20 text-success' :
                            device.status === 'Connected' ? 'bg-primary/20 text-primary' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {device.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    {connectedDevice === device.id || device.status === 'Connected' ? (
                      <Link to="/scan-modes">
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          Connected
                        </Button>
                      </Link>
                    ) : device.status === 'Available' ? (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleConnectDevice(device.id)}
                      >
                        Connect
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        {device.status}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ConnectDevice;