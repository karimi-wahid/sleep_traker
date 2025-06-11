"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="font-sans bg-zinc-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Contact Restify
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Have questions? We'd love to hear from you!
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Send Us a Message
        </h2>
        <form
          className="max-w-3xl mx-auto space-y-6 bg-zinc-50 p-8 rounded-xl shadow-md"
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
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="How can we help you?"
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-black/80 cursor-pointer text-white font-medium py-3 rounded-md shadow-lg transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-zinc-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Information</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-indigo-500 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-gray-600">karimi.wahidullah22@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-indigo-500 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">+93 766303465 </p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-indigo-500 text-3xl mb-2" />
            <h3 className="text-xl font-semibold mb-1">Address</h3>
            <p className="text-gray-600">Kart-E-Naw 8 District, Kabul, AFG</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
