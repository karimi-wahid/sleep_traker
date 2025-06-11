"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 mt-3">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 pt-20 rounded-b-3xl shadow-lg">
        <div className="flex-1 mb-10 md:mb-0 space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            Welcome to Restify
          </h1>
          <p className="text-lg md:text-xl">
            Track your sleep, improve your health, and wake up feeling refreshed
            with Restify.
          </p>
          <SignInButton>
            <button className="bg-black text-white cursor-pointer transition px-6 py-3 rounded-xl font-semibold shadow-md w-full md:w-fit">
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            width={400}
            height={400}
            className="rounded-tl-3xl rounded-br-3xl shadow-xl animate-fade-in"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {[
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
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold">{item.q}</h3>
              <p className="text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-gray-700 mb-4 italic">&quot;{t.quote}&quot;</p>
              <p className=" font-bold">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guest;
