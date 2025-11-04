import { Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}forsa-logo.png`}
                alt="Forsa +" 
                className="w-48 sm:w-56 md:w-64 h-auto"
              />
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Empowering Tunisia's Youth to Build Tomorrow's Economy
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              4ward Tunisia is committed to advancing SDG 8 by helping young entrepreneurs transform innovative ideas into sustainable businesses that strengthen our nation's economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
              </button>
              <Link to="/contact" className="group bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Get Involved</span>
              </Link>
            </div>
          </div>

          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl lg:mt-0">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Young professionals collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
