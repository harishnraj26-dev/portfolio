"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* GLOBAL GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold tracking-wide">Harish</h1>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-20 py-32 space-y-32 max-w-5xl mx-auto">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <p className="text-gray-400 mb-4">Hello, I’m</p>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Harish Nambiraj
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed text-lg">
            I design and build intelligent systems that bridge electronics and software — 
            turning ideas into real-world solutions using circuits, embedded systems, and creativity.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-800 transition"
            >
              View Projects
            </a>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Smart Blind Stick",
                desc: "Detects obstacles and water for visually impaired users.",
              },
              {
                title: "Automatic Doorbell",
                desc: "Detects visitors and triggers alerts automatically.",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-400 mt-2">{proj.desc}</p>
              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl mb-6">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {["C", "Arduino", "Circuits", "Embedded Systems", "LTSpice"].map((skill, i) => (
              <div
                key={i}
                className="px-4 py-2 border border-neutral-700 rounded-full text-sm hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl mb-6">About Me</h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            I’m an Electronics and Communication Engineering student focused on building real-world systems. 
            I enjoy working with circuits, embedded tech, and solving practical engineering problems.
          </p>
        </motion.section>

      </div>
    </main>
  );
}