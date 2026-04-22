"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white scroll-smooth relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold">Harish</h1>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-20 py-32 space-y-32 max-w-5xl mx-auto">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-400 mb-4">Hello, I’m</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Harish Nambiraj
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            I design and build intelligent systems that bridge electronics and software —
            turning ideas into real-world solutions using circuits, embedded systems,
            and creative engineering.
          </p>

          <div className="mt-8 flex gap-4">
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

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I’m an Electronics and Communication Engineering student who focuses on building
            real-world projects instead of just studying theory. I enjoy working with circuits,
            embedded systems, and solving practical engineering problems.
          </p>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative border border-neutral-800 rounded-xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 hover:border-cyan-400/30 transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/5 to-transparent"></div>

              <h3 className="text-xl font-semibold">Smart Blind Stick</h3>

              <p className="mt-3 text-gray-400">
                Assistive device that detects obstacles and water, improving navigation
                safety for visually impaired users.
              </p>

              <div className="mt-4 flex gap-2 flex-wrap text-xs text-gray-500">
                <span className="px-2 py-1 border border-neutral-700 rounded">Arduino</span>
                <span className="px-2 py-1 border border-neutral-700 rounded">Sensors</span>
                <span className="px-2 py-1 border border-neutral-700 rounded">Embedded</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative border border-neutral-800 rounded-xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 hover:border-cyan-400/30 transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/5 to-transparent"></div>

              <h3 className="text-xl font-semibold">Automatic Doorbell</h3>

              <p className="mt-3 text-gray-400">
                Smart system that detects visitors and automatically triggers alerts.
              </p>

              <div className="mt-4 flex gap-2 flex-wrap text-xs text-gray-500">
                <span className="px-2 py-1 border border-neutral-700 rounded">Arduino</span>
                <span className="px-2 py-1 border border-neutral-700 rounded">Sensors</span>
                <span className="px-2 py-1 border border-neutral-700 rounded">Automation</span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Arduino", "C Programming", "LTspice", "Circuit Design"].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="border border-neutral-800 p-4 rounded-lg text-center hover:border-cyan-400/30 transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <a
            href="mailto:harishnraj26@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-full inline-block hover:scale-105 transition"
          >
            Email Me
          </a>
        </motion.section>

      </div>
    </main>
  );
}