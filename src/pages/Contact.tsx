
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      title: "Address",
      detail: "7270 Ext 11 Kwa-Guqa Emalahleni, Mpumalanga, South Africa",
      icon: (
        <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "Email",
      detail: "Lindonkosi911@gmail.com",
      icon: (
        <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      title: "Phone",
      detail: "+27 64 731 0126",
      icon: (
        <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      title: "WhatsApp",
      detail: "+27 64 731 0126",
      icon: (
        <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.4 5.6a9 9 0 0 1 0 12.8 9 9 0 0 1-12.8 0 9 9 0 0 1 0-12.8 9 9 0 0 1 12.8 0"></path>
          <path d="m12 15 3-3m0 0-3-3m3 3H9"></path>
        </svg>
      ),
    },
  ];

  const faqItems = [
    {
      question: "What areas do you service?",
      answer: "We primarily service the Emalahleni area and surrounding regions, but we can accommodate events throughout South Africa for larger bookings. Contact us for details on service availability for your specific location.",
    },
    {
      question: "How far in advance should I book equipment?",
      answer: "We recommend booking as early as possible, especially for peak season events (October-December). For standard events, 2-4 weeks notice is ideal, while larger events may require 1-3 months advance booking to ensure availability.",
    },
    {
      question: "Do you provide setup and technical support?",
      answer: "Yes, we offer equipment setup services and can provide on-site technical support for the duration of your event. These services can be added to your rental package based on your specific requirements.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 7 or more days before the event receive a full refund minus a 10% administrative fee. Cancellations within 3-7 days receive a 50% refund. Cancellations less than 3 days before the event are non-refundable.",
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, we require a 50% deposit to secure your booking, with the balance due 3 days before the event. For bookings made within 7 days of the event, full payment is required at the time of booking.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or ready to book? Contact our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Contact Us" 
                subtitle="Reach out to us for quotes, questions, or booking information."
                centered={false}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold">Monday - Friday</p>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 3:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                  <div>
                    <p className="font-bold">Event Support</p>
                    <p className="text-gray-600">24/7 for clients</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/buddy.leroux.1" target="_blank" className="bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/i/flow/signup" target='_blank' className="bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/accounts/emailsignup/" target='_blank' className="bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com" target="_blank" className="bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.266 4.3H5.734c-2.289 0-4.155 1.866-4.155 4.157v6.556c0 2.291 1.866 4.157 4.155 4.157h12.532c2.289 0 4.155-1.866 4.155-4.157V8.457c0-2.291-1.866-4.157-4.155-4.157zm-8.423 10.524l-.004-5.648 5.381 2.828-5.377 2.82z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="shadow-darkgray shadow-lg flex items-center justify-center">
             <img 
             src="/lovable-uploads/logo.jpg"
             className=" w-full sm:w-[50%]  justify-center self-center"
             />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Location" 
            subtitle="Find us at our centrally located office and warehouse."
          />
          
          <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
            {/* Map would be embedded here in a real implementation */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              {/* <p className="text-gray-500">Google Maps Embed Would Appear Here</p> */}
              <iframe
  src="https://www.google.com/maps?q=7270+Ext+11,+Kwa-Guqa,+Emalahleni+1039,+Mpumalanga,+South+Africa&output=embed"
  loading="lazy"
  className="w-full h-full"
>
</iframe>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about our rental services."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              {faqItems.map((item, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
