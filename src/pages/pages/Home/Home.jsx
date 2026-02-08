import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPlus,
  FaCar,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaHeadset,
  FaCalendarAlt
} from 'react-icons/fa';

import bgImg1 from '../../../../public/images/ban1.jpeg'
import bgImg2 from '../../../../public/images/ban2.jpeg'
import bgImg3 from '../../../../public/images/ban3.jpeg'
import bgImg4 from '../../../../public/images/ban4.jpeg'
import bgImg5 from '../../../../public/images/ban5.jpeg'

import WhyChooseUsSection from '../../../components/components/WhyChooseUs';
import BrandScroller from '../../../components/components/DascamBrand';



const contactItems = [
  {
    icon: FaPhone,
    title: "+91 8169021148",
    subtitle: "24/7 Customer Support",
    action: "tel:+918169021148",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: FaEnvelope,
    title: "support@quikservtechnologies.com",
    subtitle: "Quick Response",
    action: "mailto:support@quikservtechnologies.com",
    color: "from-blue-500 to-indigo-500"
  },

];


const stats = [
  { icon: FaMapMarkerAlt, number: "9000+", label: "Pincodes", color: "from-blue-500 to-blue-600" },
  { icon: FaTools, number: "100000+", label: "Installations", color: "from-emerald-500 to-emerald-600" },
  { icon: FaCar, number: "All", label: "Vehicle Types", color: "from-purple-500 to-purple-600" },
  { icon: FaShieldAlt, number: "100%", label: "Warranty Safe", color: "from-orange-500 to-orange-600" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      title: "Trained Technicians.",
      description: "Certified experts for safe and precise installation.",
      bgImage: bgImg1
    },
    {
      title: " Photo & Video Proof",
      description: "Installation proof shared for full transparency.",
      bgImage: bgImg2
    },
    {
      title: "Transparent Booking Process",
      description: "Clear pricing with no hidden charges.",
      bgImage: bgImg3
    },
    {
      title: " Refund Policy Available",
      description: "Fair and customer-friendly refund support.",
      bgImage: bgImg4
    },
    {
      title: " 7-Day Service Warranty",
      description: "7-day post-installation service assurance.",
      bgImage: bgImg5
    }
  ];

  // Framer Motion variants for smooth slide transitions
  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const goToPrevSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToNextSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setAutoPlay(false);
    setCurrentSlide(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // Scroll to section logic (unchanged)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('#/')) {
        const id = hash.split('#/')[1];
        // Include all header section IDs so navigation works from any page
        if (id && ['home', 'services', 'about', 'whychoose', 'contact', 'brands'].includes(id)) {
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
              window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
              });
            }
          }, 300);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="font-sans">
      
      {/* Hero Carousel Section with Framer Motion */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id='home'>

        {/* Background Slide Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url(${slides[currentSlide].bgImage})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flex-col items-center justify-center min-h-[200px] mb-8"
              variants={contentVariants}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl mb-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.span>

              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-gray-100 font-normal mb-10 tracking-wide drop-shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: 0.6 }}
              >
                {slides[currentSlide].description}
                <motion.span
                  className="inline-block w-[2px] h-5 md:h-6 bg-blue-400 ml-2 align-middle shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  animate={{
                    scaleY: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.p>

              <motion.a
                href="#/new-ticket"
                className="inline-flex items-center gap-3 bg-[#548bf4] hover:bg-[#4379e0] text-white text-[17px] font-semibold px-10 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(66,133,244,0.6)] hover:shadow-[0_0_35px_rgba(66,133,244,0.8)] border border-white/10"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.8 }}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336z" />
                </svg>
                Book Service Now
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={goToPrevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/60"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl md:text-2xl" />
        </motion.button>

        <motion.button
          onClick={goToNextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/60"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl md:text-2xl" />
        </motion.button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? 'bg-[#548bf4] w-8 h-3'
                : 'bg-white/50 hover:bg-white/80 w-3 h-3'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <motion.div
          className="absolute top-8 right-8 z-20 text-white text-sm md:text-base font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {currentSlide + 1} / {slides.length}
        </motion.div>
      </section>

      {/* Dashcam Brands Section */}
      <BrandScroller/>

      {/* about us */}
      <section className="pt-24 bg-gradient-to-br from-slate-800 via-blue-900 to-gray-800 relative overflow-hidden" id="about">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10 ">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full text-blue-400 text-sm font-semibold mb-6 border border-blue-500/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ABOUT QUIK SERV TECHNOLOGIES
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-6 leading-tight">
              Making Indian Roads Safer
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3
                className="text-2xl md:text-4xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                One Vehicle At A Time
              </motion.h3>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg"
                variants={itemVariants}
              >
                At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Quik Serv Technologies</span>, we're dedicated to bringing expert dashcam installation right to your doorstep across{" "}
                <span className="font-bold text-blue-400 ">9000+ pincodes</span>.
              </motion.p>

              <motion.ul className="space-y-4 mb-12" variants={itemVariants}>
                {[
                  "Expert installation, reinstallation & maintenance",
                  "Factory-finish wiring – warranty safe",
                  "All vehicle models: hatchbacks to commercial vehicles",
                  "USB setups to full hardwire installations",
                  "PAN India coverage – doorstep service"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 2, y: -2 }}
                    />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="#/new-ticket"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Professional Installation
                <FaClock className="group-hover:rotate-90 transition-transform duration-300 ml-1" />
              </motion.a>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 mt-12 lg:mt-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative md:p-8 p-3 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-default"
                  variants={statVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    backgroundColor: "#ffffff20"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -skew-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-blue-400 via-white to-emerald-400 bg-clip-text leading-none">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-200 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Get In Touch Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/30 relative overflow-hidden" id="contact">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 mb-8"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <FaHeadset className="text-emerald-500 text-xl" />
              <span className="text-lg font-semibold text-gray-800 tracking-wide">Get In Touch</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-900 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
              Ready to Protect Your Drive?
            </h2>
            <motion.div className="w-28 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.action}
                target={item.action.includes('mailto') || item.action.includes('tel') ? '_blank' : '_self'}
                className="group"
                variants={cardVariants}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/60 hover:shadow-3xl hover:bg-white/90 transition-all duration-500 overflow-hidden h-full flex flex-col items-center justify-center text-center">
                  {/* Animated Ring */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-3xl -z-10`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <item.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-bases md:text-xl font-black text-gray-800 mb-3 group-hover:text-gray-900 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium group-hover:text-gray-700 mb-6">
                    {item.subtitle}
                  </p>

                  {/* Action Arrow */}
                  <motion.div
                    className="w-12 h-12 bg-gray-100/50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200/50"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#10b98120"
                    }}
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#/new-ticket"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 text-white text-xl font-bold px-16 py-6 rounded-3xl shadow-2xl hover:shadow-3xl border-0 transition-all duration-500 overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(16,185,129,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />

              <FaCalendarAlt className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide">Book Service Now</span>
              <motion.div
                className="w-3 h-3 bg-white/30 rounded-full ml-2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
