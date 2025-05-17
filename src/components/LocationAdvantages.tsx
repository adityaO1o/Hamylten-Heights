
import { MapPin, Clock, Car } from "lucide-react";

const LocationAdvantages = () => {
  const nearbyAttractions = [
    { name: "D Mart Store", distance: "3 Mins" },
    { name: "Bollywood Gali", distance: "3 Mins" },
    { name: "International Airport", distance: "10 Mins" },
    { name: "CGC Landran", distance: "8 Mins" }
  ];

  return (
    <section id="location" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-hamylten-navy mb-4">
            Prime <span className="text-hamylten-gold">Location</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located on NH-205A Delhi-Manali Expressway (Banur Landra Highway), near Tangori College for excellent connectivity and convenience.
          </p>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-6">
              Strategic Connectivity
            </h3>
            <p className="text-gray-600 mb-6">
              Hamylten Heights is located at NH-205A, Delhi-Manali Highway, Greater Mohali, providing excellent connectivity to major landmarks, business centers, educational institutions, and entertainment hubs.
            </p>
            
            <div className="flex items-start space-x-3 mb-6">
              <MapPin size={24} className="text-hamylten-gold flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <strong>Address:</strong> NH-205A, Delhi-Manali Highway, Greater Mohali (Near Tangori College)
              </p>
            </div>
            
            <div className="bg-hamylten-navy p-6 rounded-lg">
              <h4 className="font-playfair text-xl text-white mb-4">Nearby Attractions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyAttractions.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Clock size={20} className="text-hamylten-gold" />
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-white/70">{item.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/55e4028e-e4a0-46a7-8e2f-f859e57d5110.png" 
              alt="Hamylten Heights Location" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Car size={24} className="text-hamylten-gold mr-3" />
            <h3 className="font-playfair text-xl font-bold text-hamylten-navy">
              Easy Access to Major Destinations
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-bold text-hamylten-navy">Chandigarh</p>
              <p className="text-gray-600">20 mins</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-bold text-hamylten-navy">Mohali</p>
              <p className="text-gray-600">15 mins</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-bold text-hamylten-navy">IT City</p>
              <p className="text-gray-600">10 mins</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <p className="font-bold text-hamylten-navy">Int. Airport</p>
              <p className="text-gray-600">10 mins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
