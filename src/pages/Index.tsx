import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PropertyDetails from "../components/PropertyDetails";
import Apartments from "../components/Apartments";
import Amenities from "../components/Amenities";
import VideoGallery from "../components/VideoGallery";
import LocationAdvantages from "../components/LocationAdvantages";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingEnquireButton from "../components/FloatingEnquireButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PropertyDetails />
      <Apartments />
      <Amenities />
      <VideoGallery />
      <LocationAdvantages />
      <ContactForm />
      <Footer />
      <FloatingEnquireButton />
    </div>
  );
};

export default Index;
