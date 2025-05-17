
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hamylten-navy pt-12 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center mb-6">
              <div className="border-2 border-hamylten-gold rounded-full h-12 w-12 flex items-center justify-center">
                <span className="font-playfair text-xl font-bold text-hamylten-gold">H</span>
              </div>
              <div className="ml-2">
                <h2 className="font-playfair text-xl text-white font-bold">
                  HAMYLTEN <span className="text-hamylten-gold">HEIGHTS</span>
                </h2>
                <p className="text-hamylten-gold text-xs italic">REDEFINE THE ELEGANCE</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Experience luxury living redefined at Hamylten Heights. Our 2BHK and 3BHK apartments offer the perfect blend of comfort, elegance, and modern amenities.
            </p>
          
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-hamylten-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-hamylten-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#apartments" className="text-white/70 hover:text-hamylten-gold transition-colors">Apartments</a>
              </li>
              <li>
                <a href="#amenities" className="text-white/70 hover:text-hamylten-gold transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#location" className="text-white/70 hover:text-hamylten-gold transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-hamylten-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-hamylten-gold mr-2">Location:</span>
                <span className="text-white/70">NH-205A, Delhi-Manali Highway, Greater Mohali</span>
              </li>
              <li className="flex">
                <span className="text-hamylten-gold mr-2">Phone:</span>
                <a href="tel:+917986899393" className="text-white/70 hover:text-hamylten-gold transition-colors">+91 7986899393</a>
              </li>
              <li className="flex">
                <span className="text-hamylten-gold mr-2">Email:</span>
                <a href="mailto:info@hamyltenheights.com" className="text-white/70 hover:text-hamylten-gold transition-colors">earnestinemeche@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-hamylten-gold/10 rounded-lg border border-hamylten-gold/20">
              <p className="text-white font-medium">‼ CLU CERTIFIED ‼</p>
              <p className="text-white/70 text-sm">All necessary approvals in place</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Hamylten Heights. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
