
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scroll ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/logo.jpg" 
            alt="L.S.E.B Trading & Projects Logo" 
            className="h-12"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-purple-600">L.S.E.B</span>
            <span className="text-sm font-medium text-gray-700">Trading & Projects</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-montserrat text-sm font-medium transition-colors hover:text-purple-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all
              ${isActive(item.path) ? "text-purple-600 after:w-full" : "text-gray-800"}`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex items-center mb-8">
              <img 
                src="/lovable-uploads/logo.jpg" 
                alt="L.S.E.B Trading & Projects Logo" 
                className="h-10 mr-2"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-purple-600">L.S.E.B</span>
                <span className="text-xs font-medium text-gray-700">Trading & Projects</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-montserrat font-medium transition-colors hover:text-purple-600 
                  ${isActive(item.path) ? "text-purple-600" : "text-gray-800"}`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full mt-4 w-full">
                Get a Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
