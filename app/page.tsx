"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full blur-[120px] bg-cyan-500/10"
        style={{ transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)` }}
      />

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold">Harish</h1>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certs">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="px-4 md:px-12 py-24 space-y-10 max-w-4xl mx-auto">

        {/* HERO CARD */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">
          
          <p className="text-gray-400 text-sm">Hello, I’m</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Harish Nambiraj
          </h1>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Electronics & Communication Engineering student building real-world systems using circuits and embedded tech.
          </p>

          <div className="flex gap-3 mt-5">
            <a className="px-4 py-2 bg-white text-black rounded-full text-sm">
              Resume
            </a>
            <a href="#projects" className="px-4 py-2 border border-neutral-700 rounded-full text-sm">
              Projects
            </a>
          </div>
        </motion.div>

        {/* ABOUT */}
        <motion.div id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">
          
          <h2 className="text-lg mb-3">About Me</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I focus on building practical engineering solutions rather than just theory. 
            I enjoy working with embedded systems, circuit design, and real-world problem solving.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div id="skills" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">

          <h2 className="text-lg mb-4">Skills</h2>

          {[
            { name: "C Programming", level: 80 },
            { name: "Embedded Systems", level: 75 },
            { name: "Circuit Design", level: 85 },
          ].map((s, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm text-gray-400">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded mt-1">
                <div className="h-2 bg-cyan-400 rounded" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* PROJECTS */}
        <motion.div id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">

          <h2 className="text-lg mb-4">Projects</h2>

          <div className="space-y-3">
            <div className="p-4 border border-neutral-700 rounded-lg hover:bg-white/10 transition">
              <h3>Smart Blind Stick</h3>
              <p className="text-gray-400 text-sm">Obstacle & water detection system.</p>
            </div>

            <div className="p-4 border border-neutral-700 rounded-lg hover:bg-white/10 transition">
              <h3>Automatic Doorbell</h3>
              <p className="text-gray-400 text-sm">Smart visitor alert system.</p>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div id="certs" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">

          <h2 className="text-lg mb-4">Certifications</h2>

          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Embedded Systems Basics</li>
            <li>• Arduino Programming</li>
            <li>• Circuit Simulation (LTSpice)</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur">

          <h2 className="text-lg mb-4">Contact</h2>
          <p className="text-gray-400 text-sm">harishnraj26@gmail.com</p>
        </motion.div>

      </div>
    </main>
  );
}