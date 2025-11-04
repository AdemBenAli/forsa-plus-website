import { Sprout, Lightbulb, Zap, Globe } from 'lucide-react';

function About() {
  const values = [
    {
      icon: Sprout,
      title: 'Inclusion',
      description: 'Creating opportunities for everyone regardless of background or circumstance'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Supporting creative and forward-thinking solutions to economic challenges'
    },
    {
      icon: Zap,
      title: 'Empowerment',
      description: 'Building capacity and confidence in young entrepreneurs'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Creating lasting economic and social impact'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-blue-600">4ward Tunisia</span> is a non-governmental organization committed to advancing <span className="font-semibold">SDG 8: Decent Work and Economic Growth</span>.
              </p>
              <p>
                Through our flagship initiative <span className="font-bold text-blue-600">Forsa +</span>, we help young entrepreneurs turn innovative ideas into sustainable businesses that strengthen Tunisia's economy.
              </p>
              <p>
                We believe that youth empowerment is key to economic development. By providing microfinance, mentorship, and advocacy, we're building a generation of confident entrepreneurs ready to lead Tunisia's future.
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Exist</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tunisia's youth face significant barriers to entrepreneurship: limited access to finance, insufficient business training, and restrictive regulations. Too many brilliant ideas remain unrealized due to lack of opportunity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We exist to change this. By removing barriers and providing comprehensive support, we're unlocking Tunisia's entrepreneurial potential and creating a generation of job creators, not job seekers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
