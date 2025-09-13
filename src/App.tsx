import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LNM from "./pages/LNM";
import HLP from "./pages/HLP";
import NotFound from "./pages/NotFound";
import ThankYouCoach from "./pages/ThankYouCoach";
import HLPThankYou from "./pages/HLPThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lnm" element={<LNM />} />
          <Route path="/hlp" element={<HLP />} />
          <Route path="/hlm" element={<HLP />} />
          <Route path="/thankyoucoach" element={<ThankYouCoach />} />
          <Route path="/hlpthankyou" element={<HLPThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
