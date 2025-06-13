"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="font-sans bg-[#f9fafb] text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-[#199473]/20 to-transparent">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-[#199473] drop-shadow-lg tracking-tight">
          Contact Restify
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-gray-700">
          Have questions? We'd love to hear from you!
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#199473]">
          Send Us a Message
        </h2>
        <form
          className="max-w-3xl mx-auto space-y-8 bg-white p-10 rounded-3xl shadow-xl border-4 border-[#199473]/50"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement)
              ?.value;
            const email = (document.getElementById("email") as HTMLInputElement)
              ?.value;
            const message = (
              document.getElementById("message") as HTMLTextAreaElement
            )?.value;
            const mailtoLink = `mailto:support@sleeptracker.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[#199473]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 w-full px-5 py-3 border-2 border-[#199473] rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#f2a365]/50 focus:border-[#f2a365]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#199473]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 w-full px-5 py-3 border-2 border-[#199473] rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#f2a365]/50 focus:border-[#f2a365]"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#199473]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full px-5 py-3 border-2 border-[#199473] rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#f2a365]/50 focus:border-[#f2a365]"
              placeholder="How can we help you?"
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#199473] hover:bg-[#166a5b] transition-colors duration-300 cursor-pointer text-white font-semibold py-4 rounded-xl shadow-lg">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-[#f2a365]/10 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-[#199473]">
          Contact Information
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-[#199473]">
            <FaEnvelope className="text-4xl mb-3 drop-shadow-md" />
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700 font-medium">
              karimi.wahidullah22@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center text-[#199473]">
            <FaPhoneAlt className="text-4xl mb-3 drop-shadow-md" />
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700 font-medium">+93 766303465</p>
          </div>
          <div className="flex flex-col items-center text-[#199473]">
            <FaMapMarkerAlt className="text-4xl mb-3 drop-shadow-md" />
            <h3 className="text-2xl font-semibold mb-2">Address</h3>
            <p className="text-gray-700 font-medium">
              Kart-E-Naw 8 District, Kabul, AFG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
