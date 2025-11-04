import { DollarSign, TrendingUp, Scale, GraduationCap, ArrowRight } from 'lucide-react';

function Projects() {
  const initiatives = [
    {
      icon: DollarSign,
      title: 'Microfinance for Youth',
      description: 'Small loans & seed funds to help youth launch their projects.',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'Startup Grants & Mentorship',
      description: 'Low-interest loans and startup coaching from industry experts.',
      color: 'from-blue-600 to-blue-400',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Scale,
      title: 'Regulatory Reform Campaigns',
      description: 'Advocating for fairer banking and entrepreneurship policies.',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: GraduationCap,
      title: 'Entrepreneurship Workshops',
      description: 'Training sessions in leadership, management, and innovation.',
      color: 'from-sky-500 to-blue-500',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-gradient-to-b from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Forsa + comprises four interconnected initiatives designed to tackle economic challenges and unlock youth potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-20`}></div>
              </div>

              <div className="p-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <initiative.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>

                <button className="group/btn inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Each initiative plays a crucial role in our mission. Whether you want to support entrepreneurs, volunteer, or partner with us, there's a place for you in Forsa +.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
