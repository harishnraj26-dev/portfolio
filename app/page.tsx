"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur border-b border-neutral-800 z-50">
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
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-400 mb-4">Hello, I’m</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Harish Nambiraj
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            I build real-world tech that solves actual problems using electronics,
            circuits, and embedded systems.
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
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-2xl">
            I’m an Electronics and Communication Engineering student who prefers
            building real-world projects over just studying theory. I enjoy working
            with circuits, embedded systems, and solving practical problems.
          </p>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-neutral-800 rounded-xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold">Smart Blind Stick</h3>
              <p className="mt-3 text-gray-400">
                Helps visually impaired detect obstacles and water using sensors.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Arduino • Ultrasonic • LDR
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-neutral-800 rounded-xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold">Automatic Doorbell</h3>
              <p className="mt-3 text-gray-400">
                Detects visitors and triggers alerts automatically.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Arduino • Sensors • Buzzer
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Arduino", "C Programming", "LTspice", "Circuit Design"].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="border border-neutral-800 p-4 rounded-lg text-center"
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
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <p className="text-gray-400 mb-6">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <a
            href="mailto:harishnraj26@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-full inline-block"
          >
            Email Me
          </a>
        </motion.section>

      </div>
    </main>
  );
}