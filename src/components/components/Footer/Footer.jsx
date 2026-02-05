
import React from 'react';
import {
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaQuestionCircle
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-[22px] font-bold mb-6 text-white">Quik Serv Technologies</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-[320px]">
              Professional dashcam installation services across India with certified technicians and reliable support.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/company/quik-serv-technologies-pvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-[var(--qs-blue)] hover:text-white transition-all duration-300 text-gray-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-[20px] font-bold mb-6 text-white">Legal</h3>
            <ul className="space-y-5">
              <li>
                <a href="#/terms" className="flex items-center gap-3 text-gray-400 hover:text-[var(--qs-blue)] transition-colors group">
                  <FaFileAlt className="text-gray-500 group-hover:text-[var(--qs-blue)] transition-colors" size={16} />
                  <span className="text-[15px]">Terms & Conditions</span>
                </a>
              </li>
              <li>
                <a href="#/privacy" className="flex items-center gap-3 text-gray-400 hover:text-[var(--qs-blue)] transition-colors group">
                  <FaFileAlt className="text-gray-500 group-hover:text-[var(--qs-blue)] transition-colors" size={16} />
                  <span className="text-[15px]">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#/refund" className="flex items-center gap-3 text-gray-400 hover:text-[var(--qs-blue)] transition-colors group">
                  <FaFileAlt className="text-gray-500 group-hover:text-[var(--qs-blue)] transition-colors" size={16} />
                  <span className="text-[15px]">Refund Policy</span>
                </a>
              </li>
              <li>
                <a href="#/faq" className="flex items-center gap-3 text-gray-400 hover:text-[var(--qs-blue)] transition-colors group">
                  <FaQuestionCircle className="text-gray-500 group-hover:text-[var(--qs-blue)] transition-colors" size={16} />
                  <span className="text-[15px]">FAQs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-[20px] font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[var(--qs-blue)]">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+918169021148" className="text-gray-300 hover:text-white transition-colors text-[15px]">
                    +91 8169021148
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[var(--qs-blue)]">
                  <FaEnvelope size={16} />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:support@quikservtechnologies.com" className="text-gray-300 hover:text-white transition-colors text-[15px]">
                    support@quikservtechnologies.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[var(--qs-blue)]">
                  <FaMapMarkerAlt size={18} />
                </div>
                <span className="text-gray-300 text-[15px]">
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-[14px]">
            &copy; 2025 Quik Serv Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;