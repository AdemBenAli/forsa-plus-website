import { Mail, Phone, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ArrowUpRight className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
              <span className="text-2xl font-bold">
                4<span className="text-blue-400">ward</span> Tunisia
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering Growth through Forsa +
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:info@4wardtunisia.org" className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@4wardtunisia.org</span>
              </a>
              <a href="tel:+21627405006" className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+216 27 405 006</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 4ward Tunisia – Empowering Growth through Forsa +</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
