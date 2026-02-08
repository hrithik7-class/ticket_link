import React from 'react';
import StaticPage from './StaticPage/StaticPage';

const WarrantyPolicy = () => {
  return (
    <StaticPage 
      title="Warranty Policy – Quik Serv"
      subtitle="Know about our installation workmanship warranty and support process"
      lastUpdated="27th October 2025"
    >
      <h2>1. Warranty Coverage</h2>
      <p>
        At <strong>Quik Serv Technologies</strong>, we stand by the quality of our work.
        All installations and on-site services are covered by a 
        <strong> 7-Day Service Warranty</strong> from the date of service.
      </p>
      <p>
        Any service-related issue reported within this period will be inspected and
        resolved at <strong>no additional service cost</strong>.
      </p>

      <h2>2. What This Warranty Covers</h2>
      <ul>
        <li>Installation workmanship quality</li>
        <li>Cable routing and fitting issues</li>
        <li>Loose connections caused due to installation</li>
        <li>Service-related concerns arising from our work</li>
      </ul>

      <h2>3. What This Warranty Does Not Cover</h2>
      <ul>
        <li>Dashcam or accessory product defects</li>
        <li>Physical damage after installation</li>
        <li>Issues caused by misuse, mishandling, or tampering</li>
        <li>Vehicle electrical or wiring faults not related to installation</li>
        <li>Problems caused by accidents, water damage, or external factors</li>
      </ul>

      <h2>4. Warranty Support Process</h2>
      <p>
        To ensure quick and effective resolution, please follow the steps below:
      </p>
      <ol>
        <li>
          <strong>Contact Us</strong> – Reach out via Call, WhatsApp, or Email.
        </li>
        <li>
          <strong>Share Basic Details</strong> – Provide your vehicle number and
          installation date.
        </li>
        <li>
          <strong>Remote Assistance</strong> – Our support team will first guide you
          over phone or WhatsApp.
        </li>
        <li>
          <strong>On-Site Visit (If Required)</strong> – If the issue cannot be resolved
          remotely, a technician visit will be scheduled at no additional service charge.
        </li>
        <li>
          <strong>Issue Resolved</strong> – We ensure your concern is addressed promptly
          and satisfactorily.
        </li>
      </ol>

      <h2>5. Important Notes</h2>
      <ul>
        <li>This warranty applies strictly to service and installation workmanship only.</li>
        <li>Warranty is valid for <strong>7 days</strong> from the date of installation.</li>
        <li>Requests raised after the warranty period may attract a standard visit fee.</li>
      </ul>

      <h2>6. Contact for Warranty Support</h2>
      <ul>
        <li>📞 <strong>8169021148</strong></li>
        <li>📧 <strong>support@quikservtechnologies.com</strong></li>
        <li>Service Hours: 9 AM – 6 PM (Mon–Sat)</li>
      </ul>
    </StaticPage>
  );
};

export default WarrantyPolicy;
