
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Qoutes from "./components/Dilaogs/Qoutes";
import PopupGallery from "./components/Dilaogs/galleryDialog";
import { useState } from "react";
import itemArr from "./ItemArr";



const queryClient = new QueryClient();

const App = () => {

  const [open, setOpen] = useState(false)
  const [openGallery, setOpenGallery] = useState(false)

  const [equipmentList, setList] = useState(itemArr)

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar setOpen={setOpen} setList={setList}/>
        <main className="min-h-screen relative">
          <Routes>
            <Route path="/" element={<Index setOpen={setOpen} setList={setList} setOpenGallery={setOpenGallery}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services setOpenGallery={setOpenGallery}/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

{open && <Qoutes setOpen={setOpen} equipmentList={equipmentList}/>}
{openGallery && <PopupGallery setOpenGallery={setOpenGallery} />}

        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
}


export default App;
