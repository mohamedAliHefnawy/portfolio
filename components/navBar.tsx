import Link from "next/link";

export default function Navbar() {
  return (
    // غيرنا absolute لـ fixed وضفنا px-4 عشان الموبايل
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4">
      <main className="border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between w-full max-w-4xl bg-[#07010f]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        <div className="logo font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
          M.HEFNAWY
        </div>

        {/* مخفي في الموبايل عشان ميزحمش الدنيا، ويظهر في الشاشات الأكبر */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white/70 items-center">
          <li className="hover:text-white transition cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-white transition cursor-pointer">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-white transition cursor-pointer">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-white transition cursor-pointer">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <a className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition cursor-pointer">
          VIEW CV
        </a>
      </main>
    </nav>
  );
}
