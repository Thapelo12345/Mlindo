
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import EquipmentCard from "@/components/EquipmentCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = ( { setOpenGallery } ) => {
  const equipmentCategories = [
    {
      id: "pa-systems",
      name: "PA Systems",
      items: [
        {
          title: "Small Event PA System",
          description: "Perfect for gatherings up to 100 people. Includes 2 powered speakers, mixer, and 2 microphones.",
          image: "/lovable-uploads/services-images/smaller setup.jpg",
          price: "R1,200/day",
        },
        {
          title: "Medium Event PA System",
          description: "Suitable for events with 100-300 attendees. Includes 4 speakers, subwoofers, digital mixer, and wireless microphones.",
          image: "/lovable-uploads/services-images/small setup.jpg",
          price: "R3,500/day",
        },
        {
          title: "Concert PA System",
          description: "Professional setup for large events with 300+ attendees. Includes line array speakers, subwoofers, stage monitors, and complete mixing equipment.",
          image: "/lovable-uploads/services-images/concet.jpg",
          price: "R8,500/day",
        },
      ],
    },
    {
      id: "dj-equipment",
      name: "DJ Equipment",
      items: [
        {
          title: "Basic DJ Setup",
          description: "Controller, laptop stand, and monitoring headphones for small parties and gatherings.",
          image: "/lovable-uploads/services-images/dj basic.jpg",
          price: "R900/day",
        },
        {
          title: "Professional DJ Console",
          description: "High-end DJ controller with built-in effects, performance pads, and professional software license.",
          image: "/lovable-uploads/services-images/proffessional console.jpg",
          price: "R1,800/day",
        },
        {
          title: "Complete DJ Package",
          description: "Full setup with controller, mixer, turntables, speakers, lighting effects, and fog machine.",
          image: "/lovable-uploads/services-images/full dj equipment.jpg",
          price: "R4,200/day",
        },
      ],
    },
    {
      id: "microphones",
      name: "Microphones",
      items: [
        {
          title: "Wireless Handheld Mic",
          description: "Professional wireless microphone with receiver, perfect for speeches and presentations.",
          image: "/lovable-uploads/services-images/wire mic.jpg",
          price: "R350/day",
        },
        {
          title: "Lavalier Microphone Set",
          description: "Discreet clip-on microphones ideal for interviews, presentations, and ceremonies.",
          image: "/lovable-uploads/services-images/lavalie mic.jpg",
          price: "R450/day",
        },
        {
          title: "Vocal Microphone Pack",
          description: "Set of 4 professional vocal microphones with stands and cables, perfect for bands and ensembles.",
          image: "/lovable-uploads/services-images/vocal microphone.jpg",
          price: "R900/day",
        },
      ],
    },
  
  ];

  const packages = [
    {
      title: "Wedding Package",
      description: "Everything you need for your special day, including ceremony and reception sound.",
      features: [
        "Ceremony PA system with wireless microphones",
        "Reception sound system with subwoofers",
        "Wireless microphone for speeches",
        "DJ equipment with controller and software",
        "Basic lighting package",
        "On-site technician for 8 hours",
      ],
      price: "R6,500",
      popular: true,
    },
    {
      title: "Corporate Event",
      description: "Professional audio solutions for meetings, conferences, and corporate functions.",
      features: [
        "Main room PA system",
        "4 wireless microphones",
        "Podium/lectern with integrated mic",
        "Audio recording equipment",
        "Audio distribution for press",
        "On-site technician for 6 hours",
      ],
      price: "R5,200",
      popular: true,
    },
    {
      title: "Concert Package",
      description: "Full-scale setup for live music performances and large events.",
      features: [
        "JBL speaker system",
        "Analog mixing console",
        "Stage monitors and in-ear systems",
        "Microphone package for full band",
        "On stage technician for 10 hours",
      ],
      price: "R12,500",
      popular: true,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Equipment</h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse our extensive range of professional sound equipment available for rent.
            </p>
            {/* Add my Pdf here.! */}
            {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Download Full Catalog (PDF)
            </Button> */}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Comprehensive sound solutions for events of all types and sizes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="/lovable-uploads/services-images/sound eq.jpg"
                  alt="Sound Equipment Rental"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Sound Equipment Rental</h3>
                <p className="text-gray-600 mb-4">
                  High-quality audio equipment for events of all sizes, from small gatherings to large concerts and festivals.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>PA systems and speakers</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Microphones and wireless systems</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mixers and audio processors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="/lovable-uploads/services-images/dj eq.jpg"
                  alt="DJ and Entertainment"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">DJ & Entertainment</h3>
                <p className="text-gray-600 mb-4">
                  Professional DJ equipment and entertainment solutions to keep your guests engaged and the dance floor filled.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>DJ controllers and turntables</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Lighting effects and fog machines</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>DJ booth setups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="/lovable-uploads/services-images/sound technical.jpg"
                  alt="Technical Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                <p className="text-gray-600 mb-4">
                  Professional technicians to ensure your event runs smoothly from setup to teardown.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Equipment setup and testing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>On-site audio engineers</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Event consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Equipment Catalog" 
            subtitle="Browse our selection of high-quality sound equipment available for rent."
          />
          
          <Tabs defaultValue="pa-systems" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              {equipmentCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {equipmentCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <EquipmentCard
                      key={index}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      price={item.price}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => {setOpenGallery(true)}}
            >
              View All Equipment
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Packages" 
            subtitle="All-inclusive solutions tailored for specific types of events."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden relative ${pkg.popular ? "border-2 border-purple-600 shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white py-1 px-4 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-4">{pkg.price}</p>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mb-8">
                    <h4 className="font-bold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 mr-2 text-purple-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom package? We can tailor our services to meet your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your Event Sound Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your event needs and get a personalized quote for your sound equipment rental.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
