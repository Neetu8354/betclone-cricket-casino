import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Cricket from "./pages/Cricket.tsx";
import Aviator from "./pages/Aviator.tsx";
import TeenPatti from "./pages/TeenPatti.tsx";
import Blog from "./pages/Blog.tsx";
import BlogListing from "./pages/BlogListing.tsx";
import BlogHowToUse from "./pages/BlogHowToUse.tsx";
import BlogBestPlatform from "./pages/BlogBestPlatform.tsx";
import BlogHowToJoin from "./pages/BlogHowToJoin.tsx";
import BlogCricketTips from "./pages/BlogCricketTips.tsx";
import BlogHowBettingWorks from "./pages/BlogHowBettingWorks.tsx";
import BlogSafeBetting from "./pages/BlogSafeBetting.tsx";
import BlogCricketPrediction from "./pages/BlogCricketPrediction.tsx";
import BlogHowToBetCricket from "./pages/BlogHowToBetCricket.tsx";
import BlogMobileFriendly from "./pages/BlogMobileFriendly.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/aviator" element={<Aviator />} />
          <Route path="/teen-patti" element={<TeenPatti />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/how-to-login-khelo24x07" element={<Blog />} />
          <Route path="/blog/how-to-use-khelo24x07-online" element={<BlogHowToUse />} />
          <Route path="/blog/best-online-sports-betting-platform-for-beginners" element={<BlogBestPlatform />} />
          <Route path="/blog/how-to-join-online-sports-gaming-website" element={<BlogHowToJoin />} />
          <Route path="/blog/live-cricket-betting-tips-online" element={<BlogCricketTips />} />
          <Route path="/blog/how-sports-betting-platforms-work-online" element={<BlogHowBettingWorks />} />
          <Route path="/blog/safe-online-sports-betting-websites-2026" element={<BlogSafeBetting />} />
          <Route path="/blog/best-cricket-prediction-sites-online" element={<BlogCricketPrediction />} />
          <Route path="/blog/how-to-bet-on-live-cricket-matches-online" element={<BlogHowToBetCricket />} />
          <Route path="/blog/mobile-friendly-sports-betting-platforms" element={<BlogMobileFriendly />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
