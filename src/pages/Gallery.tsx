
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  // Categories for gallery filtering
  const categories = [
    { id: "all", name: "All Events" },
    { id: "weddings", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
    { id: "concerts", name: "Concerts" },
    { id: "setups", name: "Equipment Setups" },
  ];

  // Gallery images with metadata
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Annual Music Festival",
      description: "Full stage sound setup for a 3-day music festival with 5,000 attendees.",
      category: "concerts",
    },
    {
      src: "/lovable-uploads/services-images/business.jpg",
      title: "Corporate Conference",
      description: "Audio setup for keynote speeches and breakout sessions at an annual corporate conference.",
      category: "corporate",
    },
    {
      src: "/lovable-uploads/services-images/wedding reception.jpg",
      title: "Elegant Wedding Reception",
      description: "Complete sound and lighting setup for an outdoor wedding reception with 200 guests.",
      category: "weddings",
    },
    {
      src: "/lovable-uploads/services-images/Dj booth.jpg",
      title: "DJ Booth Setup",
      description: "Professional DJ equipment including controller, turntables, and monitoring system.",
      category: "setups",
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Live Band Performance",
      description: "Stage monitors and front of house sound system for a live band performance.",
      category: "concerts",
    },
    {
      src: "/lovable-uploads/services-images/beach wedding.jpg",
      title: "Beach Wedding Ceremony",
      description: "Wireless microphone and speaker setup for a beachfront wedding ceremony.",
      category: "weddings",
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Outdoor Speakers",
      description: "Weather-resistant speaker system for outdoor events and gatherings.",
      category: "setups",
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Award Ceremony",
      description: "Audio visual setup for an annual corporate awards ceremony.",
      category: "corporate",
    },
    {
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Summer Festival",
      description: "Complete sound system for a summer festival with multiple stages.",
      category: "concerts",
    },
    {
      src: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Wedding DJ Setup",
      description: "DJ booth, speakers, and lighting for an indoor wedding reception.",
      category: "weddings",
    },
    {
      src: "/lovable-uploads/services-images/conference.jpg",
      title: "Conference Room Setup",
      description: "Microphone and speaker system for a corporate boardroom meeting.",
      category: "corporate",
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Line Array System",
      description: "Professional line array speaker system ready for installation at a concert venue.",
      category: "setups",
    },
  ];

  // Handle image click to open dialog
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  // Filter images by category
  const getFilteredImages = (category: string) => {
    if (category === "all") return galleryImages;
    return galleryImages.filter(image => image.category === category);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Gallery</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our portfolio of past events and equipment setups.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Showcase" 
            subtitle="Browse through our past events and see our equipment in action."
          />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredImages(category.id).map((image, index) => (
                    <div 
                      key={index} 
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => handleImageClick(image)}
                    >
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">{image.title}</h3>
                        <p className="text-sm text-gray-500">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Dialog/Modal */}
      <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        {selectedImage && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Highlights" 
            subtitle="Watch videos of our equipment in action at various events."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-white mb-4">Concert Sound System Setup</p>
                    <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                      Play Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-white mb-4">Corporate Event Highlights</p>
                    <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                      Play Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to See Your Event Featured Here?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can make your next event a success with our premium sound equipment.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
