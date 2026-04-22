"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <h1>Harish</h1>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-20 py-32 space-y-32 max-w-5xl mx-auto">

        {/* HERO */}
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  {/* Glow behind text */}
  <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <p className="text-gray-400 mb-4">Hello, I’m</p>

  <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    Harish Nambiraj
  </h1>

  <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
    I design and build intelligent systems that bridge electronics and software — turning ideas into real-world solutions.
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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur hover:bg-white/10 hover:scale-[1.03] transition-all duration-300">
      <h3 className="text-xl font-semibold">Smart Blind Stick</h3>
      <p className="text-gray-400 mt-2">
        Detects obstacles and water for visually impaired users.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur hover:bg-white/10 hover:scale-[1.03] transition-all duration-300">
      <h3 className="text-xl font-semibold">Automatic Doorbell</h3>
      <p className="text-gray-400 mt-2">
        Detects visitors and triggers alerts automatically.
      </p>
    </div>

  </div>
</motion.section>

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-3xl mb-6">About Me</h2>
          <p className="text-gray-400 max-w-xl">
            Electronics student focused on real-world projects and problem solving.
          </p>
        </section>

      </div>
    </main>
  );
}