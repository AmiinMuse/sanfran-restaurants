// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <section className="contact" style={{ width: '100%', maxWidth: '600px' }}>
        <h1>Contact Us</h1>
        <form action="#" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" required />

          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
