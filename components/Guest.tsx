"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Restify has completely transformed my sleep schedule. I feel more energized every day!",
    name: "Sarah L.",
  },
  {
    quote:
      "The insights from Restify have helped me identify and fix my sleep issues. Highly recommend it!",
    name: "John D.",
  },
  {
    quote:
      "Restify is so easy to use and provides accurate data. It’s a must-have for anyone looking to improve their sleep!",
    name: "Emily R.",
  },
];

const faqs = [
  {
    q: "What is Restify?",
    a: "Restify is a powerful tool designed to help you monitor your sleep patterns and improve your overall health.",
  },
  {
    q: "How does it work?",
    a: "Restify analyzes your sleep data and provides personalized insights to help you achieve better sleep.",
  },
  {
    q: "Is SleepTracker free?",
    a: "Yes, Restify offers a free plan with basic features. Premium plans are available for advanced insights and analytics.",
  },
];

const Guest = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 pt-24 rounded-b-3xl shadow-lg bg-white max-w-7xl mx-auto">
        <div className="flex-1 mb-12 md:mb-0 space-y-8 max-w-xl">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-[#199473]">
            Welcome to Restify
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Track your sleep, improve your health, and wake up feeling refreshed
            with Restify.
          </p>
          <SignInButton>
            <button className="bg-[#3EBD93] hover:bg-[#27AB83] text-white cursor-pointer transition px-8 py-4 rounded-xl font-semibold shadow-md w-full md:w-auto transform hover:scale-105">
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center drop-shadow-xl">
          <Image
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            width={450}
            height={450}
            className="rounded-tl-3xl rounded-br-3xl shadow-lg animate-fade-in"
            priority
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white max-w-4xl mx-auto rounded-2xl shadow-lg mt-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#199473]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map(({ q, a }, idx) => (
            <details
              key={idx}
              className="group bg-[#1994731a] rounded-xl p-5 cursor-pointer shadow-sm hover:shadow-md transition duration-300">
              <summary className="font-semibold text-lg text-[#199473] list-none marker:hidden">
                {q}
                <span className="float-right text-[#199473] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100 mt-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#199473]">
          What Our Users Say
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-10">
          {testimonials.map(({ quote, name }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <p className="text-gray-800 mb-4 italic leading-relaxed">
                &quot;{quote}&quot;
              </p>
              <p className="font-semibold text-[#199473] text-right">
                – {name}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-xl mx-auto relative">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-800 mb-4 italic leading-relaxed">
              &quot;{testimonials[currentTestimonial].quote}&quot;
            </p>
            <p className="font-semibold text-[#199473] text-right">
              – {testimonials[currentTestimonial].name}
            </p>
          </div>
          <div className="flex justify-center mt-4 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonial ? "bg-[#199473]" : "bg-[#19947380]"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mb-10 py-16 px-6 bg-[#3EBD93] text-white text-center rounded-t-3xl mt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Ready to Improve Your Sleep?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands who have transformed their lives with Restify’s
          personalized sleep insights.
        </p>
        <SignInButton>
          <button className="bg-[#199473] hover:bg-[#157055] text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition transform hover:scale-105">
            Get Started Now
          </button>
        </SignInButton>
      </section>
    </div>
  );
};

export default Guest;
