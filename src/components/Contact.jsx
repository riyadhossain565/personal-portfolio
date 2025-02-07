import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#C47623] mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <p className="mt-16">
              Feel free to reach out for any inquiries or collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-lg">
                <FaEnvelope className="text-[#C47623]" />
                <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-[#C47623] transition">
                  hossainriyad565@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <FaPhone className="text-[#C47623]" />
                <a href="tel:+1234567890" className="text-gray-700 hover:text-[#C47623] transition">
                  +880 1849330804
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="text-gray-700 font-medium">Name</label>
                <input type="text" placeholder="Enter your name" className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-[#C47623]" required />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-[#C47623]" required />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea placeholder="Your message..." rows="4" className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-[#C47623]" required></textarea>
              </div>

              <button type="submit" className="w-full bg-[#C47623] text-white py-2 rounded-md hover:bg-[#a35c1d] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
