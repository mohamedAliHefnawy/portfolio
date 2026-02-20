"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-8 max-w-6xl mx-auto text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* الجزء الشمال: Let's Connect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Let’s build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Something Great
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            Whether you have a question about a project or just want to say hi,
            my inbox is always open.
          </p>

          {/* بيانات التواصل السريعة */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                📧
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Email Me
                </p>
                <p className="text-lg font-medium">hefnawy.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Location
                </p>
                <p className="text-lg font-medium">Egypt, Engineering Dept.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* الجزء اليمين: الـ Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem]"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-purple-500 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-purple-500 outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-purple-500 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all active:scale-95"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
