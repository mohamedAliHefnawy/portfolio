"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 px-8 max-w-6xl mx-auto text-white"
    >
      {/* العنوان الرئيسي باسم شغلك */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          Professional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
            Frontend Engineer
          </span>
        </h2>
        <div className="w-24 h-2 bg-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-2xl text-purple-300 font-semibold tracking-tight">
            Engineering Student & Code Craftsman.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            With over <strong>6 years of experience</strong>, I bridge the gap
            between complex engineering and intuitive user interfaces. Currently
            an <strong>Engineering Student</strong>, I apply a rigorous
            analytical approach to every pixel and line of code.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I don't just build websites; I architect fast, scalable digital
            experiences with a focus on <strong>performance</strong> and{" "}
            <strong>clean code</strong>.
          </p>

          {/* Stats Quick View */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-3xl font-bold text-white">6+</h3>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                Years Exp
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: "Modern Frontend",
              desc: "Building high-performance apps with React, Next.js, and TypeScript.",
              icon: "🚀",
            },
            {
              title: "System Design",
              desc: "Engineering scalable architectures that are easy to maintain.",
              icon: "⚙️",
            },
            {
              title: "UI/UX Logic",
              desc: "Creating data-driven designs focused on user psychology.",
              icon: "🎨",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
