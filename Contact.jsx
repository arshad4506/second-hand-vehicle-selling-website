import React from "react";

function Contact() {
  return (
    <section id="contactPage" className="page">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Get In Touch</div>
            <h2>Contact Us</h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>We’re Here to Help</h3>
            <p>
              Have a question about a vehicle or need help with your
              listing? Send us a message.
            </p>

            <p><strong>Location:</strong> Hyderabad, Telangana</p>
            <p><strong>Email:</strong> support@autobazaar.com</p>
            <p><strong>Phone:</strong> +91 90000 00000</p>
          </div>

          <form id="contactForm" className="contact-form">
            <div className="field">
              <label htmlFor="contactName">Name</label>
              <input id="contactName" type="text" required />
            </div>

            <div className="field">
              <label htmlFor="contactEmail">Email</label>
              <input id="contactEmail" type="email" required />
            </div>

            <div className="field">
              <label htmlFor="contactMobile">Mobile</label>
              <input id="contactMobile" type="tel" />
            </div>

            <div className="field">
              <label htmlFor="contactSubject">Subject</label>
              <input id="contactSubject" type="text" />
            </div>

            <div className="field">
              <label htmlFor="contactMessage">Message</label>
              <textarea id="contactMessage" rows="6" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            <div id="contactMessageBox"></div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;