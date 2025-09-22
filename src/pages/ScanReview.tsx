import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CheckCircle, Loader2, Brain } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { runAIAnalysis, saveScanData } from "@/utils/mobileCapabilities";

const ScanReview = () => {
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [physicianNotes, setPhysicianNotes] = useState("");

  const handleRunAIAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const results = await runAIAnalysis({
        scanType: "3D/4D Ultrasound",
        duration: "15 minutes"
      });
      setAnalysisResults(results);
      
      // Add haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    } catch (error) {
      console.error('Error running AI analysis:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSaveScan = async () => {
    const scanData = {
      id: 'SCAN-' + Date.now(),
      patientName: 'Dr. Maya Sharma',
      date: new Date().toISOString(),
      type: '3D/4D Ultrasound',
      aiAnalysis: analysisResults,
      physicianNotes,
      status: 'Completed'
    };
    
    await saveScanData(scanData);
  };
  const scanImages = [
    { name: "B-MODE", image: "/placeholder.svg" },
    { name: "DOPPLER", image: "/placeholder.svg" },  
    { name: "ELASTOGRAPHY", image: "/placeholder.svg" }
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
            {analysisResults && !isAnalyzing && (
              <CheckCircle className="w-6 h-6 text-success fill-current" />
            )}
          </div>
          
          {!analysisResults && !isAnalyzing && (
            <Button 
              onClick={handleRunAIAnalysis}
              className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-semibold py-4 rounded-full mb-4"
            >
              <Brain className="w-5 h-5 mr-2" />
              Run AI Analysis
            </Button>
          )}
          
          {isAnalyzing && (
            <Card className="p-6 bg-card shadow-soft border-0 mb-4">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">AI Analysis in Progress...</p>
                <p className="text-sm text-muted-foreground">Processing scan data with advanced algorithms</p>
              </div>
            </Card>
          )}
          
          {analysisResults && (
            <Card className="p-4 bg-card shadow-soft border-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium text-success">Analysis Complete</span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    Confidence: {analysisResults.confidence}%
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-foreground">Finding: </span>
                    <span className="text-sm text-foreground">{analysisResults.finding}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Size: </span>
                    <span className="text-sm text-foreground">{analysisResults.size}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Recommendation: </span>
                    <span className="text-sm text-foreground">{analysisResults.recommendation}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Severity: </span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      analysisResults.severity === 'Low' ? 'bg-success/20 text-success' :
                      analysisResults.severity === 'Normal' ? 'bg-primary/20 text-primary' :
                      'bg-warning/20 text-warning'
                    }`}>
                      {analysisResults.severity}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground pt-2">
                    Analysis ID: {analysisResults.analysisId} | 
                    Processing Time: {analysisResults.processingTime}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Physician's Notes */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Physician's Notes</h3>
          <Textarea 
            placeholder="Enter your clinical observations and notes..."
            value={physicianNotes}
            onChange={(e) => setPhysicianNotes(e.target.value)}
            className="min-h-[100px] bg-card shadow-soft border-0 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to="/final-report" className="flex-1">
            <Button 
              onClick={handleSaveScan}
              className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-semibold py-4 rounded-full"
            >
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