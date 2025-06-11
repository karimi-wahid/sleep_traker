import Link from "next/link";
import { FaRegMoon, FaHeart, FaMobileAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="font-sans bg-zinc-50 text-gray-800">
      <section className="relative flex items-center justify-center text-center py-20 px-6 text-white mt-5 h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/about-bg.webp')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Sleep Better. Live Better.
          </h1>
          <p className="text-lg md:text-xl">
            SleepTracker helps you understand and improve your <br /> sleep
            through personalized insights.
          </p>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className=" p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help you sleep smarter. Using advanced tracking and beautiful
              design, our goal is to help you rest better, feel better, and live
              healthier. Because good sleep is the foundation of everything.
            </p>
          </div>

          {/* Story Card */}
          <div className=" p-10 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Restify was born from a desire to bring real change to how people
              manage their sleep. Built by a team of sleep experts and
              engineers, we use data and simplicity to help people unlock better
              nights and better days.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Restify?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 mb-4 text-3xl">
              <FaRegMoon />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Sleep Tracking</h3>
            <p className="text-gray-600">
              Get deep insights into your nightly rest and discover patterns
              that matter.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-emerald-500 mb-4 text-3xl">
              <FaHeart />
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Health Tips</h3>
            <p className="text-gray-600">
              Receive health-focused suggestions tailored to your sleep data and
              lifestyle.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 mb-4 text-3xl">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Sleek Mobile Experience</h3>
            <p className="text-gray-600">
              Enjoy an elegant and intuitive UI, optimized for all screen sizes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Take the First Step to Better Sleep
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto drop-shadow">
            Join thousands who have transformed their sleep with SleepTracker.
            It's time to feel refreshed every day.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-white text-indigo-700 hover:text-emerald-600 px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
