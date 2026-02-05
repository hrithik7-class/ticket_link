import { useState, useEffect, useCallback } from "react";
import { FaPlus, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(
    window.location.hash || "#/"
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  /* -------------------- HASH CHANGE -------------------- */
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  /* -------------------- BODY SCROLL LOCK -------------------- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  /* -------------------- SCROLL TO SECTION -------------------- */
  const scrollToSection = useCallback(
    (sectionId) => {
      closeMenu();

      if (currentPath !== "#/" && currentPath !== "#") {
        window.location.hash = "#/" + sectionId;
        return;
      }

      let attempts = 0;
      const maxAttempts = 3;

      const tryScroll = () => {
        attempts++;
        const element = document.getElementById(sectionId);

        if (element) {
          const headerOffset = 120;
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          return;
        }

        if (attempts < maxAttempts) {
          setTimeout(tryScroll, 150 * attempts);
        }
      };

      requestAnimationFrame(() => {
        setTimeout(tryScroll, 50);
      });
    },
    [currentPath]
  );

  /* -------------------- ACTIVE SECTION -------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "about", "whychoose", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "whychoose", label: "Why Choose Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[1000]
        ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-2xl" : "bg-black"}`}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center h-[72px] px-4">
            {/* LOGO */}
            <div className="relative h-full flex items-center bg-white px-8 pr-12 skew-x-[-12deg] -ml-6 border-r-4 border-b-4 border-gray-100/50 shadow-xl">
              <a href="#/" className="flex items-center skew-x-[12deg] pl-4">
                <img
                  src={logo}
                  alt="Quick Serv Technologies"
                  className="h-[42px] w-auto object-contain"
                />
              </a>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 ml-auto pr-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all
                    ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-xl"
                        : "text-gray-200 hover:text-white hover:bg-white/20"
                    }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.a
                href="#/new-ticket"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-2.5 rounded-2xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlus />
                New Booking
              </motion.a>
            </nav>

            {/* MOBILE TOGGLE */}
            <motion.button
              className="md:hidden text-white p-3 rounded-xl hover:bg-white/20 z-[1001]"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY (FIXED) ================= */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 bg-black z-[9999] md:hidden flex flex-col pt-20 px-8 border-l-4 border-blue-500/50"
        initial={{ x: 320 }}
        animate={{ x: mobileMenuOpen ? 0 : 320 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <motion.button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-xl"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes size={24} />
        </motion.button>

        <nav className="flex-1 mt-8 space-y-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left py-3 px-4 text-xl font-semibold rounded-2xl transition-all
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/30 to-emerald-500/30 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="#/new-ticket"
          onClick={closeMenu}
          className="mt-auto mb-8 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPlus />
          New Booking
        </motion.a>
      </motion.div>
    </>
  );
};

export default Header;
