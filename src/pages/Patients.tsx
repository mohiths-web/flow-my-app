import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AionosLogo } from "@/components/AionosLogo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Search, Plus, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const Patients = () => {
  const patients = [
    {
      name: "Dr. Maya Sharma",
      id: "PAT-001",
      lastScan: "2 days ago",
      status: "Active",
      avatar: "/placeholder.svg"
    },
    {
      name: "John Doe", 
      id: "PAT-002",
      lastScan: "1 week ago",
      status: "Scheduled",
      avatar: "/placeholder.svg"
    },
    {
      name: "Sarah Wilson",
      id: "PAT-003", 
      lastScan: "3 days ago",
      status: "Completed",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      id: "PAT-004",
      lastScan: "5 days ago", 
      status: "Active",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary pb-20">
      {/* Header */}
      <div className="p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <AionosLogo size="sm" showText={false} />
          <Button size="sm" className="bg-primary hover:bg-primary-hover">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Patients</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search patients..."
              className="pl-10 bg-card shadow-soft border-0"
            />
          </div>
          
          {/* Filter Button */}
          <Button variant="outline" size="sm" className="mb-4">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Patient List */}
        <div className="space-y-4">
          {patients.map((patient, index) => (
            <Card key={index} className="p-4 bg-card shadow-soft border-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={patient.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">{patient.id}</p>
                    <p className="text-xs text-muted-foreground">Last scan: {patient.lastScan}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'Active' ? 'bg-success/20 text-success' :
                    patient.status === 'Scheduled' ? 'bg-warning/20 text-warning' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {patient.status}
                  </div>
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

export default Patients;