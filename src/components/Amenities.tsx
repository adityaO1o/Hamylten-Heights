
import { Shield, Siren, Power, Droplet, Car, Building, Building2, Waves, Dumbbell, CircleDot } from "lucide-react";

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Safety & Security",
      items: [
        { name: "Gated Entry", icon: <Shield className="text-hamylten-gold" size={24} /> },
        { name: "3 Tier Security", icon: <Siren className="text-hamylten-gold" size={24} /> },
      ],
      image: "/lovable-uploads/30dc482d-6a28-4f61-9265-f18b8926b9c0.png"
    },
    {
      title: "Essential Services",
      items: [
        { name: "24 x 7 Power Back-up", icon: <Power className="text-hamylten-gold" size={24} /> },
        { name: "24 x 7 Water Supply", icon: <Droplet className="text-hamylten-gold" size={24} /> },
        { name: "Basement & Stilt Car Parking", icon: <Car className="text-hamylten-gold" size={24} /> },
        { name: "Dormitory for Drivers and Maids", icon: <Building className="text-hamylten-gold" size={24} /> },
      ],
      image: "/lovable-uploads/ceb0a678-383a-4ee2-bdde-b1d72dd560c9.png"
    },
    {
      title: "Exclusive Features",
      items: [
        { name: "Sky Walk Garden", icon: <Building2 className="text-hamylten-gold" size={24} /> },
        { name: "Club House", icon: <Building className="text-hamylten-gold" size={24} /> },
        { name: "Swimming Pool", icon: <Waves className="text-hamylten-gold" size={24} /> },
        { name: "Indoor Games", icon: <Building className="text-hamylten-gold" size={24} /> },
      ],
      image: "/lovable-uploads/f0e4cea2-2f48-4a98-999e-bd7d3f9ab298.png"
    },
    {
      title: "Sports Facilities",
      items: [
        { name: "Badminton Court", icon: <Dumbbell className="text-hamylten-gold" size={24} /> },
        { name: "Basketball Court", icon: <Dumbbell className="text-hamylten-gold" size={24} /> },
        { name: "Tennis Court", icon: <Dumbbell className="text-hamylten-gold" size={24} /> },
        { name: "Cricket Practice Pitch", icon: <CircleDot className="text-hamylten-gold" size={24} /> },
      ],
      image: "/lovable-uploads/de3dabee-df38-4748-a2bc-f45f5dd2be1d.png"
    },
  ];

  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-hamylten-navy mb-4">
            World-Class <span className="text-hamylten-gold">Amenities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hamylten Heights, we've thoughtfully designed every aspect of community living to provide a luxurious and comfortable lifestyle.
          </p>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {amenityCategories.map((category, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[40%_60%]' : 'md:grid-cols-[60%_40%] md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="mr-4">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-4">
            Major Attraction: <span className="text-hamylten-gold">Sky Walk Garden</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience a one-of-a-kind feature: a Sky Walk Garden connecting the roofs of all towers, offering breathtaking views and a serene environment for residents.
          </p>
          <img 
            src="/lovable-uploads/acda84d4-caf4-4264-85f6-e5745cae7620.png" 
            alt="Sky Walk Garden" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;
