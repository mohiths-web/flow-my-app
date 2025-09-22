import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ConnectDevice from "./pages/ConnectDevice";
import ScanModes from "./pages/ScanModes";
import ScanResults from "./pages/ScanResults";
import ScanReview from "./pages/ScanReview";
import FinalReport from "./pages/FinalReport";
import CloudDatabase from "./pages/CloudDatabase";
import Patients from "./pages/Patients";
import History from "./pages/History";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connect-device" element={<ConnectDevice />} />
          <Route path="/scan-modes" element={<ScanModes />} />
          <Route path="/scan-results" element={<ScanResults />} />
          <Route path="/scan-review" element={<ScanReview />} />
          <Route path="/final-report" element={<FinalReport />} />
          <Route path="/cloud-database" element={<CloudDatabase />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
