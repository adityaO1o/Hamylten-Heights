
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-hamylten-navy py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-hamylten-gold flex items-center">
            <div className="border-2 border-hamylten-gold rounded-full h-12 w-12 flex items-center justify-center">
              <span className="font-playfair text-xl font-bold">H</span>
            </div>
            <div className="ml-2">
              <h1 className="font-playfair text-lg md:text-xl text-white font-bold">
                HAMYLTEN <span className="text-hamylten-gold">HEIGHTS</span>
              </h1>
              <p className="text-hamylten-gold text-xs italic">REDEFINE THE ELEGANCE</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-hamylten-gold transition-colors font-medium">Home</a>
          <a href="#about" className="text-white hover:text-hamylten-gold transition-colors font-medium">About</a>
          <a href="#apartments" className="text-white hover:text-hamylten-gold transition-colors font-medium">Apartments</a>
          <a href="#amenities" className="text-white hover:text-hamylten-gold transition-colors font-medium">Amenities</a>
          <a href="#location" className="text-white hover:text-hamylten-gold transition-colors font-medium">Location</a>
          <a href="#contact" className="bg-hamylten-gold hover:bg-hamylten-darkgold text-hamylten-navy px-4 py-2 rounded-md transition-colors font-medium">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-hamylten-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hamylten-navy">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="text-white hover:text-hamylten-gold transition-colors font-medium w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-hamylten-gold transition-colors font-medium w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#apartments" className="text-white hover:text-hamylten-gold transition-colors font-medium w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Apartments</a>
            <a href="#amenities" className="text-white hover:text-hamylten-gold transition-colors font-medium w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Amenities</a>
            <a href="#location" className="text-white hover:text-hamylten-gold transition-colors font-medium w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#contact" className="bg-hamylten-gold hover:bg-hamylten-darkgold text-hamylten-navy px-4 py-2 rounded-md transition-colors font-medium w-4/5 text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
