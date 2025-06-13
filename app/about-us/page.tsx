"use client";

import Link from "next/link";
import { FaRegMoon, FaHeart, FaMobileAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center py-24 px-6 overflow-hidden">
        {/* Dynamic layered backgrounds */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75 saturate-150"
          style={{
            backgroundImage: "url('/about-bg.webp')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#199473]/70 via-transparent to-[#19a673]/50 -skew-y-6 origin-top-left" />

        {/* Content */}
        <div className="relative max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg mb-6">
            Sleep Better. Live Better.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-xl mx-auto">
            SleepTracker helps you understand and improve your <br /> sleep
            through personalized insights.
          </p>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#19a673] to-[#199473] p-12 shadow-xl text-white hover:scale-[1.02] transition-transform duration-300 cursor-default">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl mix-blend-screen" />
            <h2 className="text-4xl font-extrabold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed font-light tracking-wide">
              We help you sleep smarter. Using advanced tracking and beautiful
              design, our goal is to help you rest better, feel better, and live
              healthier. Because good sleep is the foundation of everything.
            </p>
          </div>

          {/* Story Card */}
          <div className="relative rounded-3xl bg-white p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default">
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#199473]/20 rounded-full blur-3xl mix-blend-multiply" />
            <h2 className="text-4xl font-extrabold mb-6 text-[#199473]">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
              Restify was born from a desire to bring real change to how people
              manage their sleep. Built by a team of sleep experts and
              engineers, we use data and simplicity to help people unlock better
              nights and better days.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#f9fafb]">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-[#199473] tracking-tight">
          Why Restify?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaRegMoon className="text-indigo-600" />,
              title: "Smart Sleep Tracking",
              desc: "Get deep insights into your nightly rest and discover patterns that matter.",
              color: "text-indigo-600",
            },
            {
              icon: <FaHeart className="text-emerald-500" />,
              title: "Personalized Health Tips",
              desc: "Receive health-focused suggestions tailored to your sleep data and lifestyle.",
              color: "text-emerald-500",
            },
            {
              icon: <FaMobileAlt className="text-indigo-600" />,
              title: "Sleek Mobile Experience",
              desc: "Enjoy an elegant and intuitive UI, optimized for all screen sizes.",
              color: "text-indigo-600",
            },
          ].map(({ icon, title, desc, color }, i) => (
            <div
              key={i}
              className="relative rounded-xl bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default group">
              <div
                className={`mb-5 text-5xl font-extrabold ${color} group-hover:scale-110 transform transition-transform duration-300`}>
                {icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
              {/* subtle underline on hover */}
              <span className="block w-14 h-1 bg-[#199473] mt-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-28 px-6 text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/80 -skew-y-3 origin-top-left" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            Take the First Step to Better Sleep
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto drop-shadow-lg">
            Join thousands who have transformed their sleep with SleepTracker.
            It's time to feel refreshed every day.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-[#19a673] hover:bg-[#199473] text-white text-lg md:text-xl font-semibold px-10 py-4 rounded-full shadow-xl transition-colors duration-300">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
