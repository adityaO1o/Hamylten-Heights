import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    // Google Form entry IDs
    const formBody = new URLSearchParams({
      'entry.404169681': formData.name,
      'entry.1612487710': formData.phone,
      'entry.1438851795': formData.email,
      'entry.772243822': formData.message,
    });

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe7kstdYQeYz_kNjRqirhGWLTamnGyhyNGRJlOIe7E6hhQ2cw/formResponse', {
        method: 'POST',
        mode: 'no-cors', // IMPORTANT: This avoids CORS errors
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setSuccessMsg('Thank you! Your enquiry has been sent.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg('Could not connect to server. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-hamylten-navy flex items-center pt-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0)), url('/lovable-uploads/hero.jpg')",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <div className="max-w-3xl w-full">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block bg-hamylten-gold text-hamylten-navy font-bold px-4 py-1 mb-4 text-sm rounded">
              ‼ GRAND PRE-LAUNCH OFFER ‼
            </span>
            <span className="ml-3 inline-block bg-red-600 text-white font-bold px-4 py-1 mb-4 text-sm rounded">
              ‼ CLU CERTIFIED ‼
            </span>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Secure Your <br />
            <span className="text-hamylten-gold elegant-script text-5xl md:text-7xl">
              Dream Home
            </span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            World-Class Amenities, <br />
            Unbeatable Lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#apartments" className="bg-hamylten-gold hover:bg-hamylten-darkgold text-hamylten-navy font-bold px-8 py-3 rounded-md transition-all transform hover:scale-105">
              View Apartments
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold px-8 py-3 rounded-md transition-all transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Enquiry Form (Desktop Only) */}
        <div className="hidden lg:block w-full max-w-md bg-white/90 rounded-lg shadow-lg p-8 animate-fade-in">
          <h2 className="text-hamylten-navy font-bold text-2xl mb-6">Enquiry</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hamylten-gold"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hamylten-gold"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hamylten-gold"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hamylten-gold"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-hamylten-gold text-hamylten-navy font-bold px-6 py-3 rounded-md hover:bg-hamylten-darkgold transition-all"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
            {successMsg && <p className="text-green-600 text-sm mt-2">{successMsg}</p>}
            {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
          </form>
        </div>
      </div>

      {/* Scroll Chevron */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
