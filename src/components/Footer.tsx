import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-semibold">Echoes of Grace</span>
            </div>
            <p className="text-neutral-300 text-sm">
              Creating architectural excellence that echoes through time, 
              bringing grace and innovation to every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-neutral-300">Residential Design</li>
              <li className="text-neutral-300">Commercial Architecture</li>
              <li className="text-neutral-300">Interior Design</li>
              <li className="text-neutral-300">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-neutral-300">
                <MapPin className="h-4 w-4" />
                <span>123 Architecture Lane, Design City</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Phone className="h-4 w-4" />
                <span>+234 703 792 9738</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Mail className="h-4 w-4" />
                <span>alaoayomide700@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2025 Echoes of Grace Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;