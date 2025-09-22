import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { ZoomIn, RotateCw, Layers, Palette, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

const ScanResults = () => {
  const scanThumbnails = [
    { name: "B-MODE", image: "/placeholder.svg" },
    { name: "DLASTOCRAPHY", image: "/placeholder.svg" },  
    { name: "ELASTOGRAPHY", image: "/placeholder.svg" },
    { name: "DOPPLER", image: "/placeholder.svg" }
  ];

  const controlButtons = [
    { icon: ZoomIn, label: "Zoom" },
    { icon: RotateCw, label: "Rotate" },
    { icon: Layers, label: "Depth", active: true },
    { icon: Palette, label: "Color Map" },
    { icon: Maximize, label: "" }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            3D/4D Generated Scan
          </h1>
        </div>

        {/* Main 3D Scan Display */}
        <div className="flex gap-4 mb-8">
          <Card className="flex-1 aspect-square bg-black shadow-strong border-0 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-600 to-orange-800 rounded-lg mb-4 mx-auto relative">
                  <div className="absolute inset-4 bg-gradient-to-br from-yellow-400 to-orange-600 rounded opacity-80"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-yellow-300 to-orange-500 rounded opacity-60"></div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Side Controls */}
          <div className="flex flex-col gap-3">
            {controlButtons.map((control, index) => {
              const Icon = control.icon;
              return (
                <Button
                  key={index}
                  variant={control.active ? "default" : "outline"}
                  size="sm"
                  className="w-12 h-12 p-0 flex flex-col gap-1"
                >
                  <Icon size={16} />
                  {control.label && (
                    <span className="text-xs">{control.label}</span>
                  )}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <Link to="/scan-review" className="flex-1">
            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-semibold py-4 rounded-full">
              ▶ View 4D Live Motion
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="px-6 py-4 rounded-full border-2 font-semibold"
          >
            Download 3D Model
          </Button>
        </div>

        {/* Scan Thumbnails */}
        <div className="grid grid-cols-4 gap-4">
          {scanThumbnails.map((scan, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-medium text-foreground mb-2">{scan.name}</p>
              <Card className="aspect-square bg-card shadow-soft border-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ScanResults;