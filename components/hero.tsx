import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white pt-10">
      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10px",
              animation: `particles ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* HELLO animated */}
      <h1
        className={`${orbitron.className} absolute top-28 text-[180px] tracking-widest opacity-[0.06] select-none animate-[floatText_12s_ease-in-out_infinite]`}
      >
        HELLO
      </h1>

      {/* المحتوى */}
      <div className="relative z-10 flex items-center gap-16 max-w-6xl w-full px-8">
        {/* النص */}
        <div className="max-w-xl">
          <p className="text-gray-300 mb-4">Hi, I'm Mohamed Hefnawy</p>

          <h2 className="text-6xl font-semibold leading-tight mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-8">
            I build fast, responsive, and scalable web apps using React &
            Next.js. Created 10+ real-world frontend projects.
          </p>

          <div className="flex gap-4 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 transition"
            >
              View My Projects (10+)
            </a>

            <a
              href="https://github.com/mohamedAliHefnawy"
              target="_blank"
              className="px-7 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition"
            >
              GitHub Profile
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-xl w-fit">
            <span className="font-semibold text-lg">10+</span>
            <span className="text-gray-400 ml-2">Completed Projects</span>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative">
          <img
            src="/images/hefnawy.png"
            alt="Mohamed Hefnawy"
            className="w-[380px] relative z-10 rounded-full border-b-4 border-purple-600/50"
          />

          {/* <div className="absolute inset-0 bg-purple-600/30 blur-[120px] rounded-full -z-10 animate-[breathe_6s_ease-in-out_infinite]" /> */}
        </div>
      </div>
    </section>
  );
}
