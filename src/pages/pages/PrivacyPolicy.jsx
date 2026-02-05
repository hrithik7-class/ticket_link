import React from 'react';
import StaticPage from './StaticPage/StaticPage';

const PrivacyPolicy = () => {
  return (
    <StaticPage 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="December 2024"
    >
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you create an account, book a service, or contact us. This may include:
      </p>
      <ul>
        <li>Personal information (name, email, phone number)</li>
        <li>Vehicle information (make, model, registration details)</li>
        <li>Service preferences and history</li>
        <li>Payment information (processed securely through third-party providers)</li>
        <li>Communication records and feedback</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Process bookings and payments</li>
        <li>Communicate with you about services and appointments</li>
        <li>Send service updates and promotional materials (with consent)</li>
        <li>Analyze usage patterns to enhance user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
      </p>
      <ul>
        <li>With service technicians to fulfill your booking</li>
        <li>With payment processors to handle transactions</li>
        <li>When required by law or legal process</li>
        <li>To protect our rights and prevent fraud</li>
        <li>With your explicit consent</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide services and fulfill legal obligations. Service records may be kept for warranty and quality assurance purposes.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access and update your personal information</li>
        <li>Request deletion of your data (subject to legal requirements)</li>
        <li>Opt-out of marketing communications</li>
        <li>Request data portability</li>
        <li>Lodge complaints with relevant authorities</li>
      </ul>

      <h2>7. Cookies and Tracking</h2>
      <p>
        Our website may use cookies and similar technologies to enhance user experience, analyze traffic, and personalize content. You can control cookie settings through your browser preferences.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing personal information.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our services are not intended for children under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.
      </p>

      <h2>10. Changes to Privacy Policy</h2>
      <p>
        We may update this privacy policy periodically. We will notify you of significant changes through our website or direct communication. Continued use of our services constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this privacy policy or our data practices, please contact us:
      </p>
      <ul>
        <li>Email: privacy@quickservtech.com</li>
        <li>Phone: +91 12345 67890</li>
        <li>Address: Mumbai, Maharashtra, India</li>
      </ul>
    </StaticPage>
  );
};

export default PrivacyPolicy;