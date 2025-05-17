import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Google Form entry IDs
    const formBody = new URLSearchParams({
      'entry.404169681': formData.name,
      'entry.1438851795': formData.email,
      'entry.1612487710': formData.phone,
      'entry.772243822': formData.message,
    });

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe7kstdYQeYz_kNjRqirhGWLTamnGyhyNGRJlOIe7E6hhQ2cw/formResponse",
        {
          method: "POST",
          mode: "no-cors", // IMPORTANT: This avoids CORS errors
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not connect to server. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-hamylten-navy">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-hamylten-gold">Touch</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in Hamylten Heights? Contact us for more information about our luxury apartments and special pre-launch offers.
          </p>
          <div className="h-1 w-20 bg-hamylten-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          {/* Contact Info */}
          <div className="bg-white/5 p-8 rounded-xl">
            <h3 className="font-playfair text-2xl font-bold text-hamylten-gold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-hamylten-gold mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:+917986899393" className="text-white/80 hover:text-hamylten-gold transition-colors">
                    +91 7986899393
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-hamylten-gold mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-white/80">info@hamyltenheights.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-hamylten-gold mt-1" size={20} />
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <p className="text-white/80">
                    NH-205A, Delhi-Manali Highway, <br />
                    Greater Mohali (Near Tangori College)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <p className="text-hamylten-gold font-bold mb-2">Business Hours:</p>
              <p className="text-white/80">Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p className="text-white/80">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="font-playfair text-2xl font-bold text-hamylten-navy mb-6">
              Inquiry Form
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hamylten-gold/50"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hamylten-gold/50"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hamylten-gold/50"
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hamylten-gold/50"
                  placeholder="I'm interested in knowing more about..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-hamylten-navy hover:bg-hamylten-navy/80 text-white font-bold px-8 py-3 rounded-md transition-all transform hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
