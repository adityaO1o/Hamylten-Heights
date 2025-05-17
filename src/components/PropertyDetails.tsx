
import { Check } from "lucide-react";

const PropertyDetails = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-hamylten-navy mb-4">
            About <span className="text-hamylten-gold">Hamylten Heights</span>
          </h2>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/sec.png" 
              alt="Hamylten Heights Skywalk Garden" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-4">
              Luxury Living Redefined
            </h3>
            <p className="mb-6 text-gray-700">
              Hamylten Heights offers an unparalleled living experience with luxurious 2BHK and 3BHK apartments designed 
              to elevate your lifestyle. Situated on the Delhi-Manali Expressway (NH205A), our premium residential project 
              spans across 6 acres with 4 towers and 270 meticulously crafted apartments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Area</p>
                  <p className="text-gray-600">6 Acres</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Towers</p>
                  <p className="text-gray-600">4 Towers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Total Flats</p>
                  <p className="text-gray-600">270 Luxury Apartments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Construction</p>
                  <p className="text-gray-600">Mivan Technology</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Possession</p>
                  <p className="text-gray-600">3 Years</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                  <Check size={16} className="text-hamylten-gold" />
                </div>
                <div>
                  <p className="font-medium">Front Entry</p>
                  <p className="text-gray-600">1100 sq ft</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-hamylten-navy rounded-lg text-white">
              <p className="font-medium">Tower Configuration:</p>
              <p>• 2 Towers of 2BHK S+14</p>
              <p>• 2 Towers of 3BHK S+22</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
