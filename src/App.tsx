import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import Home from "./pages/Home";
import Tariffs from "./pages/Tariffs";
import Coverage from "./pages/Coverage";
import About from "./pages/About";
import Support from "./pages/Support";
import Contacts from "./pages/Contacts";
import Cabinet from "./pages/Cabinet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Chat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
