import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LNM from "./pages/LNM";
import HLP from "./pages/HLP";
import NM from "./pages/NM";
import { HNLPPage as HNLP } from "./modules/hnlp";
import HNLPThankYou from "./pages/HNLPThankYou";
import NotFound from "./pages/NotFound";
import ThankYouCoach from "./pages/ThankYouCoach";
import HLPThankYou from "./pages/HLPThankYou";
import SixtyDays from "./pages/SixtyDays";
import NLP1 from "./pages/NLP1";
import EngThankYou from "./pages/EngThankYou";

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
          <Route path="/nm" element={<NM />} />
          <Route path="/hnlp" element={<HNLP />} />
          <Route path="/hnlp/thank-you" element={<HNLPThankYou />} />
          <Route path="/thankyoucoach" element={<ThankYouCoach />} />
          <Route path="/hlpthankyou" element={<HLPThankYou />} />
          <Route path="/6a100days" element={<SixtyDays />} />
          <Route path="/nlp1" element={<NLP1 />} />
          <Route path="/engthankyou" element={<EngThankYou />} />
          <Route path="/6a100days/thank-you" element={<HNLPThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
