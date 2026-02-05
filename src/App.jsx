import React, { useEffect, useState } from "react";
import { FaPhone, FaWhatsapp, FaGoogle } from "react-icons/fa"; // Added react-icons imports
import { SiGooglenews } from "react-icons/si";

import Layout from "./components/components/Layout/Layout";

import Home from "./pages/pages/Home/Home";
import NewTicketForm from "./pages/pages/NewTicketForm";
import TermsAndConditions from "./pages/pages/TermsAndConditions";
import PrivacyPolicy from "./pages/pages/PrivacyPolicy";
import RefundPolicy from "./pages/pages/RefundPolicy";
import FAQ from "./pages/pages/FAQ";

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // 👇 Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case "#/new-ticket":
        return <NewTicketForm onClose={() => (window.location.hash = "#/")} />;
      case "#/terms":
        return <TermsAndConditions />;
      case "#/privacy":
        return <PrivacyPolicy />;
      case "#/refund":
        return <RefundPolicy />;
      case "#/faq":
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Layout>{renderPage()}</Layout>
      
      {/* Fixed vertical icons - bottom left */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
        <a
          href="tel:+918169021148" // Replace with your phone number
          className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-white/30 backdrop-blur-2xl hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Call us"
          title="Call"
        >
          <FaPhone className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-green-400 p-2 rounded-full" />
        </a>
        <a
          href="https://wa.me/918169021148" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-white/30 backdrop-blur-2xl hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-green-400 p-2 rounded-full" />
        </a>
        <a
          href="https://share.google/McmT89jz9nLLv3Ggu" // Replace with Google Maps link or search
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-white/30 backdrop-blur-2xl hover:bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Google Maps"
          title="Google"
        >
          <SiGooglenews className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-purple-400 p-2 rounded-full" />
        </a>
      </div>
    </>
  );
}
