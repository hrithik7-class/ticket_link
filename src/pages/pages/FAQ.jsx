import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import StaticPage from './StaticPage/StaticPage';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "Do you provide dashcams?",
      answer: "No. We only provide doorstep installation services. You must have your own dashcam ready.",
    },
    {
      question: "How long does the installation take?",
      answer: "Typically 45–90 minutes, depending on the model (USB or wired) and vehicle type.",
    },
    {
      question: "Will the installation void my car warranty?",
      answer: "No. We follow warranty-safe methods and do not cut original wires or tamper with seals.",
    },
    {
      question: "What’s included in the installation service?",
      answer:
        "Installation, cable routing, and functional testing of your dashcam. Our technician will also give a quick demo before leaving. For detailed demo of the dashcam app & features, please contact the dashcam brand.",
    },
    {
      question: "Can I choose my own time slot?",
      answer:
        "Once payment is made, our support team will call you within 2 working hours to assign a suitable slot based on your and technician availability.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, you can reschedule free of charge if requested 24 hours before the appointment.",
    },
    {
      question: "What if my area is not serviceable?",
      answer:
        "If your pincode is non-serviceable, you will be offered a full refund or the option to join our waitlist for future service.",
    },
    {
      question: "What if I face issues after installation?",
      answer:
        "We offer 7-day free support for installation-related issues. Contact 8169021148 or support@quikservtechnologies.com. However, during revisit, if the issue is found in the dashcam or vehicle, then the visit will be charged at Rs.590/- including GST 18%.",
    },
    {
      question: "Do you provide an invoice?",
      answer:
        "Yes. You will receive a GST invoice after successful installation or payment, whichever is later.",
    },
    {
      question: "What happens if I’m not available during installation?",
      answer:
        "If the technician arrives and you or your vehicle are unavailable, the booking will be marked as completed and is non-refundable.",
    },
  ];

  const FAQItem = ({ item, index }) => (
    <div
      key={index}
      style={{
        marginBottom: '1rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => toggleItem(index)}
        style={{
          width: '100%',
          padding: '1rem',
          background: openItems[index] ? '#f8f9fa' : 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#2c3e50',
        }}
      >
        <span>{item.question}</span>
        {openItems[index] ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {openItems[index] && (
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid #e0e0e0',
            background: '#f8f9fa',
          }}
        >
          <p style={{ margin: 0, lineHeight: '1.6', color: '#555' }}>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <StaticPage
      title="Frequently Asked Questions (FAQs)"
      subtitle="Your most common dashcam installation questions answered"
      lastUpdated="October 2025"
    >
      <div style={{ marginBottom: '2rem' }}>
        <p>
          Can’t find the answer you’re looking for? Contact our customer support
          team at{' '}
          <a
            href="mailto:support@quikservtechnologies.com"
            style={{ color: '#2c3e50', textDecoration: 'none' }}
          >
            support@quikservtechnologies.com
          </a>{' '}
          or call us at{' '}
          <a
            href="tel:+918169021148"
            style={{ color: '#2c3e50', textDecoration: 'none' }}
          >
            +91 81690 21148
          </a>
          .
        </p>
      </div>

      <div>
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} index={index} />
        ))}
      </div>

      <div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
          Still have questions?
        </h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Our customer support team is here to help you with any additional
          questions or concerns.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:support@quikservtechnologies.com"
            style={{
              background: '#2c3e50',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Email Support
          </a>
          <a
            href="tel:+918169021148"
            style={{
              background: '#e74c3c',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </StaticPage>
  );
};

export default FAQ;
