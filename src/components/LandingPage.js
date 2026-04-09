import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center w-full p-5 bg-gray-800">
        <div className="text-lg font-bold">Nezer Web Solutions</div>
        <ul className="flex space-x-4">
          <li><a href="#hero">Home</a></li>
          <li><a href="#value">Value</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="flex flex-col items-center justify-center mt-20 text-center">
        <motion.h1 className="text-5xl font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Transforming Your Digital Presence
        </motion.h1>
        <motion.p className="mt-4 text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          Luxury tech solutions tailored for your business.
        </motion.p>
      </div>

      {/* Value Propositions */}
      <div id="value" className="mt-20 p-5">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Tailored Solutions</h3>
            <p>We craft customized tech solutions to fit your unique needs.</p>
          </div>
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Expert Team</h3>
            <p>Our team consists of industry experts with extensive experience.</p>
          </div>
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Proven Results</h3>
            <p>Delivering results that enhance your business technologies.</p>
          </div>
        </div>
      </div>

      {/* Process Cards */}
      <div id="process" className="mt-20 p-5 text-center">
        <h2 className="text-3xl font-bold">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Step 1: Consultation</h3>
            <p>Understanding your needs and defining project scope.</p>
          </div>
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Step 2: Development</h3>
            <p>Crafting bespoke solutions that meet your specifications.</p>
          </div>
          <div className="p-5 border border-gray-700 rounded-lg">  
            <h3 className="text-xl font-semibold">Step 3: Support</h3>
            <p>Providing ongoing support to ensure your success.</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div id="testimonials" className="mt-20 p-5">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="flex flex-col items-center mt-10">
          <blockquote className="p-5 border border-gray-700 rounded-lg max-w-md text-center">  
            <p>"Nezer Web Solutions transformed our business! Highly recommend!"</p>
            <cite className="block mt-4 font-semibold">- John Doe, CEO</cite>
          </blockquote>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="mt-20 p-5">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="flex flex-col items-center mt-10">
          <input type="text" className="p-2 border border-gray-700 rounded-lg mb-4 w-full max-w-md" placeholder="Your Name" required />
          <input type="email" className="p-2 border border-gray-700 rounded-lg mb-4 w-full max-w-md" placeholder="Your Email" required />
          <textarea className="p-2 border border-gray-700 rounded-lg mb-4 w-full max-w-md" placeholder="Your Message" rows="4" required></textarea>
          <button className="p-2 bg-blue-600 text-white rounded-lg w-full max-w-md" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
