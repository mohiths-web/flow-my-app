import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ScanReview = () => {
  const scanImages = [
    { name: "B-MODE", image: "/placeholder.svg" },
    { name: "DOPPLER", image: "/placeholder.svg" },  
    { name: "ELASTOGRAPHY", image: "/placeholder.svg" }
  ];

  const analysisFindings = [
    "Findings: Small Cyst on Liver",
    "Size: 1.2 cm", 
    "Recommendations: Follow-up in 10 months"
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Scan Review
          </h1>
          <p className="text-muted-foreground">
            Review & Analyze Scan
          </p>
        </div>

        {/* Scan Images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {scanImages.map((scan, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-medium text-foreground mb-2">{scan.name}</p>
              <Card className="aspect-square bg-card shadow-soft border-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded" />
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <p className="text-xs font-medium text-foreground">DOPPLER</p>
        </div>

        {/* AI-Powered Analysis */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-foreground">AI-Powered Analysis</h3>
            <CheckCircle className="w-6 h-6 text-success fill-current" />
          </div>
          
          <Card className="p-4 bg-card shadow-soft border-0">
            <ul className="space-y-2">
              {analysisFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{finding}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Physician's Notes */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Physician's Notes</h3>
          <Textarea 
            placeholder="Physician's Notes"
            className="min-h-[80px] bg-card shadow-soft border-0 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to="/final-report" className="flex-1">
            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-semibold py-4 rounded-full">
              Finalize Report
            </Button>
          </Link>
          <Link to="/scan-modes" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full py-4 rounded-full border-2 font-semibold"
            >
              Retake Scan
            </Button>
          </Link>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ScanReview;