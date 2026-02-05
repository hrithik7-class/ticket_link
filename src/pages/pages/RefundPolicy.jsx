import React from 'react';
import StaticPage from './StaticPage/StaticPage';

const RefundPolicy = () => {
  return (
    <StaticPage 
      title="Refund Policy & FAQs – Quik Serv" 
      subtitle="Learn about our refund, cancellation, and frequently asked questions"
      lastUpdated="27th October 2025"
    >
      <h2>1. Refund Eligibility</h2>
      <p>
        We strive for 100% customer satisfaction. Refunds may be issued under the following circumstances:
      </p>
      <ul>
        <li>If your area is not serviceable and installation cannot proceed.</li>
        <li>If Quik Serv Technologies cancels the booking due to technician unavailability or other operational reasons.</li>
        <li>If the customer cancels the booking at least <strong>24 hours before</strong> the scheduled appointment.</li>
        <li>If a double payment or incorrect transaction occurs.</li>
      </ul>

      <h2>2. Non-Refundable Cases</h2>
      <ul>
        <li>If the customer or vehicle is unavailable at the confirmed appointment time or location.</li>
        <li>If the dashcam or accessories are found to be faulty or incomplete at the time of installation.</li>
        <li>If cancellation is requested within 24 hours of the scheduled appointment.</li>
        <li>If the installation was completed successfully as per the agreed scope of work.</li>
        <li>If the customer requests any additional, non-approved work beyond the installation service.</li>
      </ul>

      <h2>3. Refund Amount & Processing</h2>
      <ul>
        <li>Eligible refunds are processed within <strong>5–7 business days</strong> via the original payment method.</li>
        <li>Refunds will be made after deducting applicable payment gateway or transaction charges (if any).</li>
        <li>No cash refunds are issued; all refunds are digital and traceable.</li>
      </ul>

      <h2>4. Rescheduling Policy</h2>
      <ul>
        <li>Customers may reschedule their installation <strong>free of charge</strong> if requested at least 24 hours before the appointment.</li>
        <li>Reschedule requests within 24 hours are treated as new bookings and are <strong>non-refundable</strong>.</li>
      </ul>

      <h2>5. Post-Installation Support</h2>
      <ul>
        <li>We offer <strong>7-day free support</strong> for installation-related issues only.</li>
        <li>If, during a revisit, it is found that the issue lies with the dashcam device or vehicle wiring (not installation), a <strong>Rs.590/- (including 18% GST)</strong> visit fee will apply.</li>
      </ul>

      <h2>6. Force Majeure</h2>
      <p>
        Refunds or reschedules due to unavoidable events (such as natural disasters, local restrictions, or emergencies) will be handled on a case-by-case basis. We aim to maintain fairness for both customers and technicians.
      </p>

      <h2>7. Refund Request Process</h2>
      <ol>
        <li>Contact our support team via call or email with your booking ID and payment proof.</li>
        <li>Our team will verify your request and eligibility.</li>
        <li>Refunds will be processed to the same payment source within 5–7 working days once approved.</li>
      </ol>

      <h2>8. Contact for Refunds</h2>
      <ul>
        <li>📞 <strong>8169021148</strong></li>
        <li>📧 <strong>support@quikservtechnologies.com</strong></li>
        <li>Service Hours: 9 AM – 6 PM (Mon–Sat)</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>❓ Frequently Asked Questions (FAQs)</h2>

      <h3>Q1: Do you provide dashcams?</h3>
      <p>No. We only provide doorstep installation services. You must have your own dashcam ready.</p>

      <h3>Q2: How long does the installation take?</h3>
      <p>Typically 45–90 minutes, depending on the model (USB or wired) and vehicle type.</p>

      <h3>Q3: Will the installation void my car warranty?</h3>
      <p>No. We follow warranty-safe methods and do not cut original wires or tamper with seals.</p>

      <h3>Q4: What’s included in the installation service?</h3>
      <p>
        Installation, cable routing, and functional testing of your dashcam. 
        Our technician will also give a quick demo before leaving. 
        For detailed demo of the dashcam app & features, please contact the dashcam brand.
      </p>

      <h3>Q5: Can I choose my own time slot?</h3>
      <p>
        Once payment is made, our support team will call you within 2 working hours to assign 
        a suitable slot based on your and technician availability.
      </p>

      <h3>Q6: Can I reschedule my appointment?</h3>
      <p>Yes, you can reschedule free of charge if requested 24 hours before the appointment.</p>

      <h3>Q7: What if my area is not serviceable?</h3>
      <p>
        If your pincode is non-serviceable, you will be offered a full refund 
        or the option to join our waitlist for future service.
      </p>

      <h3>Q8: What if I face issues after installation?</h3>
      <p>
        We offer 7-day free support for installation-related issues. 
        Contact <strong>8169021148</strong> or <strong>support@quikservtechnologies.com</strong>. 
        However, during revisit, if issue is found in the dashcam or vehicle, then the visit will be charged at 
        <strong> Rs.590/- Including 18% GST.</strong>
      </p>

      <h3>Q9: Do you provide an invoice?</h3>
      <p>Yes. You will receive a GST invoice after successful installation or payment completion.</p>

      <h3>Q10: What happens if I’m not available during installation?</h3>
      <p>
        If the technician arrives and you or your vehicle are unavailable, 
        the booking will be marked as completed and is <strong>non-refundable</strong>.
      </p>
    </StaticPage>
  );
};

export default RefundPolicy;
