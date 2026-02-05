import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaStar, 
  FaUsers,
  FaBolt
} from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const stats = [
    {
      icon: FaCheckCircle,
      number: "25K+",
      label: "Installations",
      color: "from-emerald-500 to-green-500",
      description: "Flawless setups across India"
    },
    {
      icon: FaMapMarkerAlt,
      number: "9K+",
      label: "Pincodes",
      color: "from-blue-500 to-cyan-500",
      description: "Doorstep service everywhere"
    },
    {
      icon: FaStar,
      number: "4.8",
      label: "Rating",
      color: "from-yellow-400 to-orange-400",
      description: "Loved by customers"
    },
    {
      icon: FaUsers,
      number: "5K+",
      label: "Technicians",
      color: "from-purple-500 to-pink-500",
      description: "Expert certified team"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.34, 0.16, 0.22, 1] 
      }
    }
  };

  return (
    <section className="relative  overflow-hidden" id="whychoose">
      {/* Enhanced Background */}
      <div 
        className="bg-fixed bg-cover bg-center bg-no-repeat min-h-[600px] relative"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')" 
        }}
      >
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-emerald-900/30" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 backdrop-blur-xl rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-emerald-500/10 backdrop-blur-xl rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container-custom relative z-20">
          {/* Header */}
          <motion.div 
            className="text-center mb-20 pt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-xl rounded-2xl text-blue-100 text-lg font-semibold mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaBolt className="inline mr-2" /> Why Choose Quick Serv?
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-blue-50 to-emerald-50 bg-clip-text text-transparent mb-4 drop-shadow-2xl leading-tight">
              Proven Excellence
            </h2>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Numbers that speak louder than words
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -20,
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 h-full shadow-2xl border border-white/60 hover:shadow-white/20 hover:border-white/80 transition-all duration-500 overflow-hidden">
                  
                  {/* Animated Background Ring */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-3xl blur-xl -z-10`}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    whileHover={{ scale: 1.15 }}
                  >
                    <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="text-center mb-4"
                    whileInView={{ 
                      scale: [1, 1.3, 1],
                      color: ["#3b82f6", "#10b981", "#3b82f6"]
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: 1,
                      delay: index * 0.2
                    }}
                  >
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-emerald-700 bg-clip-text text-transparent drop-shadow-2xl mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm lg:text-base font-bold text-gray-700 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
