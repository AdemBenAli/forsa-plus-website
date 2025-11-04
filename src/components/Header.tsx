import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  // Determine background gradient based on current route
  const getHeaderGradient = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-gradient-to-r from-blue-50 via-cyan-50 to-white';
      case '/about':
        return 'bg-gradient-to-r from-white via-blue-50 to-cyan-50';
      case '/projects':
        return 'bg-gradient-to-r from-blue-50 via-white to-cyan-50';
      case '/contact':
        return 'bg-gradient-to-r from-cyan-50 via-white to-blue-50';
      default:
        return 'bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderGradient()} backdrop-blur-sm shadow-sm border-b border-blue-100 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ArrowUpRight className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">
              4<span className="text-blue-600">ward</span> Tunisia
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Our Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${getHeaderGradient()} border-t border-blue-100 transition-all duration-500`}>
          <nav className="px-4 py-4 space-y-2">
            <Link to="/" onClick={closeMenu} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" onClick={closeMenu} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              About Us
            </Link>
            <Link to="/projects" onClick={closeMenu} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Our Projects
            </Link>
            <Link to="/contact" onClick={closeMenu} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
