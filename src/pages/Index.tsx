import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import EquipmentCard from "@/components/EquipmentCard";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import itemArr from "@/ItemArr";

const Index = ( { setOpen, setList, setOpenGallery }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "PA Systems",
      description: "Complete sound systems for venues of all sizes, from intimate gatherings to large outdoor concerts.",
      icon: (
        <svg className="h-12 w-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      ),
    },
    {
      title: "DJ Equipment",
      description: "Professional DJ setups including controllers, mixers, turntables, and lighting for your entertainment needs.",
      icon: (
        <svg className="h-12 w-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="12" y1="2" x2="12" y2="4"></line>
          <line x1="12" y1="20" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="4" y2="12"></line>
          <line x1="20" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
        </svg>
      ),
    },
    {
      title: "Event Support",
      description: "Technical assistance and staff to ensure your event runs smoothly from setup to teardown.",
      icon: (
        <svg className="h-12 w-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Custom Solutions",
      description: "Tailored audio setups designed to meet the specific requirements of your unique event.",
      icon: (
        <svg className="h-12 w-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "The sound quality was exceptional. L.S.E.B provided exactly what we needed for our corporate event. Professional and reliable service.",
      name: "Sarah Thompson",
      position: "Event Coordinator",
      rating: 5,
    },
    {
      quote: "We hired L.S.E.B for our wedding reception, and they exceeded our expectations. The DJ equipment was top-notch, and the setup was perfect.",
      name: "Michael Johnson",
      position: "Happy Client",
      rating: 5,
    },
    {
      quote: "As a venue owner, I've worked with many sound rental companies, but L.S.E.B stands out for their reliability and quality equipment.",
      name: "David Williams",
      position: "Venue Owner",
      rating: 4,
    },
  ];

  const equipment = [
    {
      title: "Premium PA System",
      description: "High-fidelity audio system suitable for medium to large venues with professional grade speakers and amplifiers.",
      image: "/lovable-uploads/services-images/concet.jpg",
    },
    {
      title: "DJ Console Package",
      description: "Complete DJ setup with controller, mixer, headphones, and monitoring speakers for professional performances.",
      image: "/lovable-uploads/services-images/dj eq.jpg",
    },
    {
      title: "Wireless Microphone Set",
      description: "Professional wireless microphone system with multiple handhelds and bodypack transmitters for events and performances.",
      image: "/lovable-uploads/services-images/wire mic.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Concert sound equipment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center mb-8">
              <img
                src="/lovable-uploads/logo.jpg"
                alt="L.S.E.B Logo"
                className="h-24 mx-auto mb-4"
              />
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-1">
                  <span className="text-purple-400">L.S.E.B</span> Trading & Projects
                </h2>
                <p className="text-lg text-gray-300">South Africa's Premier Sound Equipment Provider</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Crystal-Clear <span className="text-purple-400">Sound Equipment</span> for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Premier sound equipment rental for events of all sizes, delivering exceptional audio quality and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg"
              onClick={() => {
                // setList([...itemArr])
                setOpen(true)
                console.log("inner qoute Clicked!.")
              }}
              >
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 rounded-full text-lg"
              onClick={() => {setOpenGallery(true)}}
              >
                Browse Sound Equipment
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-purple-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">L.S.E.B Trading & Projects</h3>
              <p className="text-lg">Your Sound Equipment Specialist</p>
            </div>
            <div className="flex items-center">
              <div className="flex mr-3">
                <Star className="h-5 w-5 text-white fill-white" />
                <Star className="h-5 w-5 text-white fill-white" />
                <Star className="h-5 w-5 text-white fill-white" />
                <Star className="h-5 w-5 text-white fill-white" />
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <p className="text-white">Trusted by 500+ clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional audio setup"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">5+ Years</p>
                  <p>Industry Experience</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-700">South Africa's Premier Sound Equipment Provider</h2>
              <div className="h-1 w-24 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                <span className="font-bold">L.S.E.B Trading and Projects</span> is a leading sound rental company that provides high-quality audio equipment for events of all sizes. From private parties and weddings to large concerts and corporate functions, our mission is to deliver crystal-clear sound and reliable service with every booking.
              </p>
              <p className="text-gray-600 mb-8">
                With our team of experienced audio engineers and state-of-the-art <span className="font-bold">sound equipment</span>, we ensure that your event sounds as impressive as it looks. We take pride in our attention to detail and commitment to client satisfaction.
              </p>
              <Link to="/about">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                  Learn More About Us 
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of sound equipment and services to meet all your audio needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border-none shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 hover:border-purple-500 hover:border-2">
                <div className="text-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 mx-auto">
                View All Services 
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Equipment"
            subtitle="Browse our selection of high-quality sound equipment available for rent."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <EquipmentCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 mx-auto">
                See Full Equipment Catalog
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Unforgettable Audio Experience?</h2>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about our services."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
