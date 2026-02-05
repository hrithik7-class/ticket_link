import React from 'react';
import StaticPage from './StaticPage/StaticPage';

const TermsAndConditions = () => {
  return (
    <StaticPage 
      title="Terms & Conditions – Quik Serv" 
      subtitle="Please read these terms carefully before booking your installation service"
      lastUpdated="27th October 2025"
    >
      <p>
        Welcome to <strong>Quik Serv Technologies</strong>. These Terms & Conditions govern your booking, payment, 
        and use of our Dashcam Installation services offered through our website and support team.
        <br />
        By booking an installation and making payment, you agree to the following terms:
      </p>

      <h2>1. Scope of Service</h2>
      <ul>
        <li>Quik Serv Technologies provides installation services only for dashcams (front or front + rear or front + rear + cabin, USB or wired type) at the customer’s doorstep.</li>
        <li>The customer must have the dashcam and SD card device ready at the time of appointment.</li>
        <li>Our service includes professional installation, cable routing, and basic device testing.</li>
        <li>We do not supply, sell, or warrant any third-party devices or accessories.</li>
      </ul>

      <h2>2. Booking & Payment</h2>
      <ul>
        <li>100% advance payment is required to confirm your booking.</li>
        <li>Once payment is successful, our support team will contact you within 2 working hours to schedule your appointment.</li>
        <li>The booking is valid for 7 days from the date of payment. If installation cannot be scheduled within this period due to customer unavailability, the booking may be cancelled (as per refund policy).</li>
        <li>Prices mentioned on the website are inclusive of 18% GST.</li>
        <li>A GST invoice will be issued after completion of installation.</li>
      </ul>

      <h2>3. Service Availability</h2>
      <ul>
        <li>Installation is currently available only in serviceable pincodes as listed or confirmed through our booking form.</li>
        <li>If your area is not serviceable, the booking cannot proceed.</li>
        <li>Serviceability is determined by technician availability in your region.</li>
      </ul>

      <h2>4. Customer Responsibilities</h2>
      <ul>
        <li>Ensure your dashcam and SD card device is functional and ready for installation.</li>
        <li>Provide access to the vehicle at the confirmed location, date, and time.</li>
        <li>Be present (or assign an authorized person) during installation to validate the work.</li>
        <li>Provide safe parking space and access to the vehicle’s electrical connections if needed.</li>
        <li>No payment should be made to the technician under any circumstances.</li>
      </ul>

      <h2>5. Installation Standards</h2>
      <ul>
        <li>Our technicians are trained and equipped for warranty-safe installation (no wire cutting or seal tampering).</li>
        <li>Installation time typically ranges from 45 to 90 minutes, depending on the dashcam model and vehicle type.</li>
        <li>Technicians will test the dashcam after installation to ensure it is functioning properly.</li>
        <li>Customers are encouraged to inspect the work before the technician leaves.</li>
      </ul>

      <h2>6. Delays & Rescheduling</h2>
      <ul>
        <li>Quik Serv Technologies is not responsible for delays caused by events outside its control (traffic, weather, unforeseen technical issues).</li>
        <li>Customers may reschedule the appointment free of charge if requested at least 24 hours in advance.</li>
        <li>Last-minute reschedules (less than 24 hours) are treated as new bookings and may not be eligible for refund (see refund policy below).</li>
      </ul>

      <h2>7. Warranty & Liability</h2>
      <ul>
        <li>Installation workmanship is covered for 7 days after the job.</li>
        <li>Any dashcam hardware, electrical faults, or vehicle-related faults are not covered, as devices & vehicles are customer-owned.</li>
        <li>Quik Serv Technologies is not liable for any loss, damage, or malfunction caused by the device itself or its misuse after installation.</li>
      </ul>

      <h2>8. Prohibited Uses</h2>
      <ul>
        <li>Customers must not request technicians to perform any non-approved electrical modifications.</li>
        <li>Any such request or action voids installation warranty immediately.</li>
      </ul>

      <h2>9. Cancellation & Refund Policy</h2>
      <p>
        Please refer to the detailed <strong>Refund Policy</strong> for cancellation and refund terms.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        For any queries related to booking, payment, or service, please contact us:
      </p>
      <ul>
        <li>📞 <strong>8169021148</strong></li>
        <li>📧 <strong>support@quikservtechnologies.com</strong></li>
      </ul>
    </StaticPage>
  );
};

export default TermsAndConditions;
