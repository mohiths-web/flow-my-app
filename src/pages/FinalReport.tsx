import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CheckCircle, Share, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { generateAndShareReport } from "@/utils/mobileCapabilities";

const FinalReport = () => {
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleShareReport = async () => {
    setIsGeneratingReport(true);
    try {
      const patientData = {
        name: 'Dr. Maya Sharma',
        scanId: 'SCAN-' + Date.now(),
        findings: 'Small hepatic cyst detected',
        size: '1.2 cm',
        recommendation: 'Follow-up in 3 months',
        notes: 'Patient showed no complications during scan. Results within normal parameters.'
      };
      
      const result = await generateAndShareReport(patientData);
      if (result.success) {
        setReportGenerated(true);
        
        // Add haptic feedback
        if (navigator.vibrate) {
          navigator.vibrate([100, 50, 100]);
        }
      }
    } catch (error) {
      console.error('Error sharing report:', error);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const handleDownloadReport = async () => {
    // For demo purposes, we'll use the same function
    await handleShareReport();
  };
  const scanThumbnails = [
    { name: "3D/4D SCAN", image: "/placeholder.svg" },
    { name: "B-MODE", image: "/placeholder.svg" },
    { name: "DOPPLER", image: "/placeholder.svg" },
    { name: "ELASTOGRAPHY", image: "/placeholder.svg" }
  ];

  const analysisFindings = [
    "Findings: Small Cyst on Liver",
    "Size: 1.2 cm",
    "Recommendations: fo in to 3 months"
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
        </div>
        
        {/* Patient Info */}
        <div className="mb-6">
          <p className="text-sm text-foreground">Dr. Maya Sharma</p>
          <p className="text-sm text-muted-foreground">Patient ID: Scan-122-1</p>
          <p className="text-sm text-muted-foreground">ID ID Scan</p>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Final Report
          </h1>
          <p className="text-muted-foreground">
            Comprehensive Diagnostic Report
          </p>
        </div>

        {/* Main 3D Scan with Analysis */}
        <div className="flex gap-4 mb-6">
          <Card className="w-32 h-32 bg-black shadow-strong border-0 overflow-hidden flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-orange-800 rounded relative">
                <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-orange-600 rounded opacity-80"></div>
              </div>
            </div>
          </Card>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-success fill-current" />
              <h3 className="font-semibold text-foreground">AI-Powered Analysis</h3>
            </div>
            <ul className="space-y-1">
              {analysisFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3D/4D Scan Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">3D/4D SCAN</h3>
          <Textarea 
            placeholder="Physician's Notes"
            className="min-h-[60px] bg-card shadow-soft border-0 resize-none mb-4"
          />
        </div>

        {/* Scan Thumbnails */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {scanThumbnails.map((scan, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-medium text-foreground mb-2">{scan.name}</p>
              <Card className="aspect-square bg-card shadow-soft border-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">Summary & Conclusion</h3>
          <p className="text-sm text-foreground">
            Overall, the findings indicate small hepatic cyst requiring fo fi follow.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={handleShareReport}
            disabled={isGeneratingReport}
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth font-semibold py-4 rounded-full"
          >
            {isGeneratingReport ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Share className="w-4 h-4 mr-2" />
                {reportGenerated ? 'Share Again' : 'Share Report'}
              </>
            )}
          </Button>
          <Button 
            onClick={handleDownloadReport}
            disabled={isGeneratingReport}
            variant="outline" 
            className="flex-1 py-4 rounded-full border-2 font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Save as PDF
          </Button>
        </div>
        
        {reportGenerated && (
          <Card className="mt-4 p-4 bg-success/10 border border-success/20">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-success font-medium">Report generated successfully!</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              The report has been saved to your device and is ready to share.
            </p>
          </Card>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default FinalReport;