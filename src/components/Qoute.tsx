import React from 'react';

// Define types for our sound equipment items
type SoundEquipment = {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
};

// Sample data for sound equipment
const soundEquipmentItems: SoundEquipment[] = [
  {
    id: 1,
    name: 'PA System (500W)',
    description: 'Complete public address system with mixer, speakers, and stands',
    pricePerDay: 1200,
    imageUrl: 'https://via.placeholder.com/150?text=PA+System',
  },
  {
    id: 2,
    name: 'DJ Controller (Pioneer DDJ-1000)',
    description: 'Professional 4-channel DJ controller with full-size jog wheels',
    pricePerDay: 800,
    imageUrl: 'https://via.placeholder.com/150?text=DJ+Controller',
  },
  {
    id: 3,
    name: 'Wireless Microphone Set',
    description: 'Dual handheld wireless microphones with receiver',
    pricePerDay: 300,
    imageUrl: 'https://via.placeholder.com/150?text=Wireless+Mic',
  },
  {
    id: 4,
    name: 'Subwoofer (1000W)',
    description: 'Powerful bass speaker for events and parties',
    pricePerDay: 500,
    imageUrl: 'https://via.placeholder.com/150?text=Subwoofer',
  },
  {
    id: 5,
    name: 'Stage Lighting Kit',
    description: '4 moving head lights with controller and stands',
    pricePerDay: 700,
    imageUrl: 'https://via.placeholder.com/150?text=Lighting',
  },
  {
    id: 6,
    name: 'Speaker Stands (Pair)',
    description: 'Heavy-duty speaker stands with adjustable height',
    pricePerDay: 100,
    imageUrl: 'https://via.placeholder.com/150?text=Stands',
  },
];

const QuotationComponent: React.FC = () => {
  // Calculate total price
  const totalPrice = soundEquipmentItems.reduce(
    (sum, item) => sum + item.pricePerDay,
    0
  );

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-10 relative"
      style={{ 
        backgroundImage: "url('/lovable-uploads/logo.jpg')",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundBlendMode: 'lighten',
      }}
    >
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">
            L.S.E.B TRADING & PROJECTS
          </h1>
          <p className="text-pink-600 italic">Quality Quantified Sound</p>
          <h2 className="text-3xl font-semibold text-purple-700 mt-6">
            Equipment Hire Quotation
          </h2>
        </div>

        {/* Client Details */}
        <div className="bg-purple-100 rounded-lg p-6 mb-10 border-2 border-purple-300">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Client Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-700 mb-1">Client Name:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-purple-300 rounded"
                placeholder="Enter client name"
              />
            </div>
            <div>
              <label className="block text-purple-700 mb-1">Event Date:</label>
              <input 
                type="date" 
                className="w-full p-2 border border-purple-300 rounded"
              />
            </div>
            <div>
              <label className="block text-purple-700 mb-1">Contact Number:</label>
              <input 
                type="tel" 
                className="w-full p-2 border border-purple-300 rounded"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block text-purple-700 mb-1">Event Location:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-purple-300 rounded"
                placeholder="Enter event location"
              />
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Selected Equipment</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-right">Price per Day</th>
                </tr>
              </thead>
              <tbody>
                {soundEquipmentItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`border-b ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}`}
                  >
                    <td className="p-3">
                      <div className="flex items-center">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded mr-3"
                        />
                        {item.name}
                      </div>
                    </td>
                    <td className="p-3">{item.description}</td>
                    <td className="p-3 text-right">R {item.pricePerDay.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-pink-100 font-bold">
                  <td className="p-3" colSpan={2}>Total Daily Rate</td>
                  <td className="p-3 text-right">R {totalPrice.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-pink-50 rounded-lg p-6 mb-10 border-2 border-pink-200">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Terms & Conditions</h3>
          <ul className="list-disc pl-5 text-purple-900 space-y-2">
            <li>50% deposit required to confirm booking</li>
            <li>Balance payable on delivery/setup</li>
            <li>Prices are per day (24-hour period)</li>
            <li>Additional days charged at full rate</li>
            <li>Damage deposit may be required</li>
            <li>Cancellation less than 48 hours before event forfeits deposit</li>
          </ul>
        </div>

        {/* Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="mb-6 md:mb-0">
            <p className="text-purple-800 font-medium mb-1">Client Signature:</p>
            <div className="h-16 w-64 border-b-2 border-purple-400"></div>
          </div>
          <div>
            <p className="text-purple-800 font-medium mb-1">For L.S.E.B Trading & Projects:</p>
            <div className="h-16 w-64 border-b-2 border-purple-400"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-purple-700">
          <p>Thank you for choosing L.S.E.B Trading & Projects</p>
          <p>Contact: info@lsebtrading.co.za | Phone: 012 345 6789</p>
        </div>
      </div>
    </div>
  );
};

export default QuotationComponent;