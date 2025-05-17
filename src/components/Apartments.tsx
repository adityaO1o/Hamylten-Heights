
import { useState } from "react";
import { Bed, Bath, Maximize2 } from "lucide-react";

const apartmentTypes = [
  {
    id: "2bhk",
    title: "2 BHK Luxury Apartment",
    area: "1175 ft²",
    bedrooms: 2,
    bathrooms: 2,
    price: "Contact for Price",
    image: "/lovable-uploads/5e3846d5-f7d2-4f9e-bae4-66cae49038af.png",
    features: [
      "Spacious Living Room",
      "Modern Kitchen",
      "Balcony Access",
      "Premium Fixtures",
      "Elegant Flooring"
    ]
  },
  {
    id: "3bhk",
    title: "3 BHK Luxury Apartment",
    area: "1640 ft²",
    bedrooms: 3,
    bathrooms: 2,
    price: "Contact for Price",
    image: "/lovable-uploads/a6d7882d-1e0a-4f68-846c-3ab19ff0c26f.png",
    features: [
      "Master Bedroom Suite",
      "Spacious Living Room",
      "Modern Kitchen",
      "Balcony Access",
      "Premium Fixtures",
      "Elegant Flooring"
    ]
  }
];

const Apartments = () => {
  const [activeApartment, setActiveApartment] = useState(apartmentTypes[0].id);

  return (
    <section id="apartments" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-hamylten-navy mb-4">
            Luxurious <span className="text-hamylten-gold">Apartments</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of meticulously designed 2BHK and 3BHK luxury apartments, built to the highest standards to elevate your living experience.
          </p>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {apartmentTypes.map((apt) => (
            <button
              key={apt.id}
              onClick={() => setActiveApartment(apt.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-medium transition-all ${
                activeApartment === apt.id
                  ? "bg-hamylten-gold text-hamylten-navy"
                  : "bg-white text-hamylten-navy border border-hamylten-gold hover:bg-hamylten-gold/10"
              }`}
            >
              {apt.id === "2bhk" ? "2 BHK" : "3 BHK"}
            </button>
          ))}
        </div>

        {apartmentTypes.map((apartment) => (
          <div
            key={apartment.id}
            className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${
              activeApartment === apartment.id ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-4">
                  {apartment.title}
                </h3>

                <div className="flex items-center mb-6 space-x-6">
                  <div className="flex items-center">
                    <Maximize2 size={20} className="text-hamylten-gold mr-2" />
                    <span>{apartment.area}</span>
                  </div>
                  <div className="flex items-center">
                    <Bed size={20} className="text-hamylten-gold mr-2" />
                    <span>{apartment.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={20} className="text-hamylten-gold mr-2" />
                    <span>{apartment.bathrooms} Bathrooms</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {apartment.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 bg-hamylten-gold/20 p-1 rounded-full">
                          <Check size={12} className="text-hamylten-gold" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="mb-4">
                    <span className="font-playfair text-lg font-medium">Price:</span>
                    <span className="text-hamylten-gold font-bold ml-2 text-lg">
                      {apartment.price}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block bg-hamylten-navy hover:bg-hamylten-navy/80 text-white font-medium px-6 py-3 rounded-md transition-all transform hover:scale-105"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-16 bg-hamylten-navy rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-white mb-4">
            <span className="text-hamylten-gold">Special Pre-Launch Offer</span> Available Now
          </h3>
          <p className="text-white/80 mb-6">
            Take advantage of our exclusive pre-launch pricing. Contact us to learn more about our special offers and flexible payment plans.
          </p>
          <a
            href="#contact"
            className="inline-block bg-hamylten-gold hover:bg-hamylten-darkgold text-hamylten-navy font-bold px-8 py-3 rounded-md transition-all transform hover:scale-105"
          >
            Get Pre-Launch Offer
          </a>
        </div>
      </div>
    </section>
  );
};

// Import Check icon
const Check = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Apartments;
