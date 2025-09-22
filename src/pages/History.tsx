import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Calendar, FileText, Download } from "lucide-react";

const History = () => {
  const scanHistory = [
    {
      date: "2024-09-22",
      patient: "Dr. Maya Sharma",
      type: "3D/4D Ultrasound",
      status: "Completed",
      findings: "Small hepatic cyst",
      id: "SCAN-001"
    },
    {
      date: "2024-09-21", 
      patient: "John Doe",
      type: "Doppler Scan",
      status: "Completed",
      findings: "Normal blood flow",
      id: "SCAN-002"
    },
    {
      date: "2024-09-20",
      patient: "Sarah Wilson", 
      type: "B-Mode Scan",
      status: "In Review",
      findings: "Pending analysis",
      id: "SCAN-003"
    },
    {
      date: "2024-09-19",
      patient: "Michael Chen",
      type: "Elastography",
      status: "Completed", 
      findings: "Normal tissue elasticity",
      id: "SCAN-004"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
          <Button size="sm" variant="outline">
            <Calendar className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Scan History</h1>
          <p className="text-muted-foreground">Review previous scans and reports</p>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {scanHistory.map((scan, index) => (
            <Card key={index} className="p-4 bg-card shadow-soft border-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold text-foreground">{scan.patient}</p>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      scan.status === 'Completed' ? 'bg-success/20 text-success' :
                      scan.status === 'In Review' ? 'bg-warning/20 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {scan.status}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{scan.type}</p>
                  <p className="text-sm text-foreground mb-2">{scan.findings}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{scan.date}</span>
                    <span>{scan.id}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="p-2">
                    <FileText className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default History;