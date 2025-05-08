
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We only stock top-tier audio equipment from reputable brands, ensuring the highest sound quality for your event.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      title: "Reliability",
      description: "On-time delivery, professional setup, and standby technical support ensure your event runs smoothly.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We continuously update our equipment inventory to offer the latest audio technology solutions.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Expertise",
      description: "Our team of audio engineers brings years of experience to ensure optimal sound for any venue.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "L.S.E.B Trading and Projects was established with a small inventory of quality PA equipment.",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded our services to include DJ equipment and lighting, serving larger events and festivals.",
    },
    {
      year: "2023",
      title: "New Headquarters",
      description: "Moved to a larger facility and significantly expanded our equipment inventory.",
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced state-of-the-art digital audio systems and remote support services.",
    },
    {
      year: "2025",
      title: "National Reach",
      description: "Began serving clients nationwide with equipment delivery and setup services.",
    },
  ];

  const teamMembers = [
    {
      name: "Lindokuhle Nkosi",
      position: "Founder & CEO",
      image: "/lovable-uploads/lindo outdoor.jpg",
    }
  
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About L.S.E.B Trading & Projects</h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn about our mission to provide the highest quality sound equipment and exceptional service for every event.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" centered={false} />
              <p className="text-gray-600 mb-6">
                L.S.E.B Trading and Projects was founded in 2021 with a simple mission: to provide high-quality sound equipment rentals with exceptional service. What began as a small operation with a handful of PA systems has grown into a comprehensive audio solutions provider serving clients across South Africa.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Lindokuhle Nkosi, started the company after years of working in the event production industry and noticing a gap in the market for reliable, high-quality sound equipment rental services. His vision was to create a company that not only provided top-notch equipment but also delivered an outstanding customer experience from inquiry to event completion.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have served thousands of events, from intimate gatherings to major concerts and festivals. Our commitment to quality, reliability, and customer satisfaction remains at the heart of everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603413518828-6d7e4b1caba7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">1000+</p>
                <p>Successful Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Mission & Values" 
            subtitle="We are driven by our commitment to deliver exceptional audio experiences and customer service."
          />
          
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl text-gray-600">
              "To provide crystal-clear sound solutions that enhance every event, backed by reliable service and technical expertise that our clients can count on."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in our company's history that shaped who we are today."
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 flex items-center justify-end">
                    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <h3 className="font-bold text-purple-600 text-xl mb-1">{milestone.year}</h3>
                      <h4 className="font-bold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative flex justify-center md:justify-start">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-purple-200 z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Every One Meet" 
            subtitle="The dedicated professional behind L.S.E.B Trading and Projects."
          />
          
          <div className=" flex justify-center align-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-50 h-27 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your sound equipment needs and how we can make your next event a success.
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

export default About;
