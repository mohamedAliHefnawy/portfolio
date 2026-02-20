"use client"; // لازم في Next.js عشان بنستخدم Animation
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Creative Web Agency",
    img: "/images/Creative_Web_Agency.webp",
    size: "md:col-span-2",
  },
  {
    id: 2,
    title: "Mobile UI Kit",
    img: "/images/Mobile_UI_Kit.webp",
    size: "md:col-span-1",
  },
  {
    id: 3,
    title: "E-commerce App",
    img: "/images/e_commerce.webp",
    size: "md:col-span-1",
  },
  {
    id: 4,
    title: "Dashboard UI",
    img: "/images/dashboard.webp",
    size: "md:col-span-1",
  },
  {
    id: 5,
    title: "Portfolio Design",
    img: "/images/portfolio.webp",
    size: "md:col-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 text-white">
      {" "}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3"
        >
          Recent Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Take a look at my recent{" "}
          <span className="text-purple-500 underline decoration-2 underline-offset-8">
            Design Ventures
          </span>
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${project.size} relative group overflow-hidden rounded-[2.5rem] h-[350px] md:h-[450px] cursor-pointer`}
          >
            {/* الأيقونة البنفسجي اللي في التصميم */}
            <div className="absolute top-6 right-6 z-20 bg-purple-600 p-4 rounded-full opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized // عشان صور النت تشتغل معاك فوراً
            />

            {/* التظليل والبيانات */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Project Details
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
