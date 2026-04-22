"use client";

import Hero from "./components/Hero";
import { Cpu, Code, Zap, Award, Mail, User, GraduationCap, MapPin, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold tracking-wide">Harish</h1>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#timeline" className="hover:text-white transition">Journey</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-14">

        {/* ABOUT */}
<div id="about" className="py-24">

  <div className="grid md:grid-cols-3 gap-10 items-start">

    {/* LEFT (BIG) */}
    <div className="md:col-span-2 p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/10 transition">

      <h2 className="text-2xl mb-4 flex items-center gap-2 font-semibold">
        <User size={20} className="text-sky-400"/> About Me
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4">
        I speak two languages:{" "}
        <span className="text-white font-medium">Hardware</span> and{" "}
        <span className="text-white font-medium">Software</span>.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        I’m an Electronics & Communication Engineering student passionate about building
        real-world systems. I enjoy working with circuits, embedded systems, and
        solving practical engineering problems that connect hardware with software.
      </p>

      <p className="text-gray-400 leading-relaxed">
        I aim to grow into a full-cycle engineer — designing, building, and scaling
        systems from hardware to cloud.
      </p>

    </div>

    {/* RIGHT (SMALL CARD) */}
    <div className="md:col-span-1 p-6 rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur space-y-6 hover:shadow-lg hover:shadow-emerald-500/10 transition">

      {/* EDUCATION */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10">
          <GraduationCap className="text-emerald-400" size={18}/>
        </div>

        <div>
          <p className="text-xs text-gray-400 tracking-wide">EDUCATION</p>
          <p className="font-semibold">B.Tech in ECE</p>
          <p className="text-sm text-gray-500">SRMIST, Chennai</p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500/10">
          <MapPin className="text-sky-400" size={18}/>
        </div>

        <div>
          <p className="text-xs text-gray-400 tracking-wide">LOCATION</p>
          <p className="font-semibold">Chennai, India</p>
          <p className="text-sm text-gray-500">Open to Opportunities</p>
        </div>
      </div>

      {/* STATUS */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-500/10">
          <Globe className="text-violet-400" size={18}/>
        </div>

        <div>
          <p className="text-xs text-gray-400 tracking-wide">STATUS</p>
          <p className="font-semibold">Available</p>
          <p className="text-sm text-gray-500">Looking for Internships</p>
        </div>
      </div>

    </div>

  </div>

</div>

        {/* SKILLS */}
        <div id="skills" className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10 transition">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Cpu size={18} className="text-emerald-400"/> Skills
          </h2>

          {[
            { name: "C Programming", level: 80 },
            { name: "Embedded Systems", level: 75 },
            { name: "Circuit Design", level: 85 },
          ].map((s, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-sm text-gray-400">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>

              <div className="w-full h-2 bg-neutral-800 rounded mt-2 overflow-hidden">
                <div
                  className="h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 rounded"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div id="projects" className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10 transition">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <Code size={18} className="text-violet-400"/> Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border border-neutral-700 rounded-lg hover:bg-white/10 transition">
              <h3 className="font-semibold mb-2">Smart Blind Stick</h3>
              <p className="text-gray-400 text-sm">
                Arduino-based system with ultrasonic sensors for obstacle detection.
              </p>
            </div>

            <div className="p-5 border border-neutral-700 rounded-lg hover:bg-white/10 transition">
              <h3 className="font-semibold mb-2">Automatic Doorbell</h3>
              <p className="text-gray-400 text-sm">
                Sensor-based smart doorbell system with automation logic.
              </p>
            </div>
          </div>
        </div>

        {/* ACADEMIC JOURNEY */}
        <div id="timeline" className="py-24">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Academic Journey<span className="text-sky-400">.</span>
          </h2>

          <div className="relative border-l border-neutral-800 space-y-16 ml-6">

            {/* COLLEGE */}
            <div className="relative pl-10 group transition hover:translate-x-1">

              <div className="absolute left-[-23px] top-2 w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full shadow-lg shadow-sky-400/40"></div>

              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-2xl font-semibold">
                  SRM Institute of Science and Technology (SRMIST)
                </h3>
                <span className="text-gray-400 text-sm">2025 - 2028</span>
              </div>

              <p className="text-emerald-400 text-sm mt-2">
                🎓 B.Tech in Electronics & Communication Engineering (ECE)
              </p>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                Building a strong foundation in electronics and intelligent systems,
                focusing on bridging hardware and software through real-world engineering
                and problem-solving.
              </p>
            </div>

            {/* SCHOOL */}
            <div className="relative pl-10 group transition hover:translate-x-1">

              <div className="absolute left-[-23px] top-2 w-3 h-3 bg-neutral-500 rounded-full"></div>

              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-2xl font-semibold">
                  AVK International Residential School
                </h3>
                <span className="text-gray-400 text-sm">2011 - 2023</span>
              </div>

              <p className="text-emerald-400 text-sm mt-2">
                🎓 Secondary Education (PCMB)
              </p>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                Built a strong academic foundation in Physics, Chemistry, Mathematics,
                and Biology, developing analytical thinking and problem-solving skills.
              </p>
            </div>

          </div>
        </div>

{/* TECHNICAL ARSENAL */}
<div id="arsenal" className="py-24">

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Engineering Toolkit<span className="text-sky-400">.</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* CORE PROGRAMMING */}
    <div className="p-6 border border-neutral-800 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/10 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 mb-4">
        <Code className="text-sky-400"/>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Programming & Logic
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Building strong problem-solving skills with C programming and algorithmic thinking.
      </p>

      <div className="flex flex-wrap gap-2">
        {["C", "Data Structures", "Problem Solving"].map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-neutral-700 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* ELECTRONICS */}
    <div className="p-6 border border-neutral-800 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 mb-4">
        <Cpu className="text-emerald-400"/>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Electronics & Circuits
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Designing and analyzing analog circuits, understanding real-world electronic systems.
      </p>

      <div className="flex flex-wrap gap-2">
        {["Analog Electronics", "Circuit Design", "Basic PCB"].map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-neutral-700 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* EMBEDDED */}
    <div className="p-6 border border-neutral-800 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10 transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 mb-4">
        <Zap className="text-violet-400"/>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Embedded Systems
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Building hardware-based solutions using microcontrollers and sensor integration.
      </p>

      <div className="flex flex-wrap gap-2">
        {["Arduino", "Sensors", "IoT Basics"].map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-neutral-700 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>

  </div>
</div>

        {/* CERTIFICATIONS */}
<div className="py-24">

  {/* HEADER */}
  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">

    <div>
      <h2 className="text-4xl md:text-5xl font-bold">
        Certifications<span className="text-emerald-400">.</span>
      </h2>

      <div className="w-20 h-1 bg-emerald-400 mt-4 rounded-full"></div>
    </div>

    <p className="text-gray-400 max-w-md text-sm leading-relaxed">
      Continuous learning is the key to staying relevant. Here are a few
      certifications that reflect my journey in programming, electronics,
      and problem solving.
    </p>

  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-6">

    {[
  {
    title: "C Programming",
    org: "Udemy",
    year: "2025",
    file: "/certificates/c-programming.pdf",
  },
  {
    title: "Critical Thinking",
    org: "Udemy",
    year: "2026",
    file: "/certificates/critical-thinking.pdf",
  },
  {
    title: "IdeaSpark",
    org: "SRM Institute",
    year: "2025",
    file: "/certificates/ideaspark.pdf",
  },
  {
    title: "AstralWeb",
    org: "SRM Institute",
    year: "2025",
    file: "/certificates/astralweb.pdf",
  },
  {
    title: "Space Exploration",
    org: "SRM Institute",
    year: "2025",
    file: "/certificates/space-exploration.pdf",
  },
].map((cert, i) => (
      <a
        key={i}
        href={cert.file}
        target="_blank"
        className="group flex items-center gap-5 p-6 rounded-2xl border border-neutral-800 bg-white/5 backdrop-blur hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10 transition"
      >

        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-neutral-700 group-hover:border-emerald-400 transition">
          <Award className="text-emerald-400" size={20}/>
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-lg font-semibold group-hover:text-white transition">
            {cert.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {cert.org} • {cert.year}
          </p>
        </div>

      </a>
    ))}

  </div>

</div>

        {/* CONTACT */}
        <div id="contact" className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur text-center hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10 transition">
          <h2 className="text-xl mb-4 flex justify-center items-center gap-2">
            <Mail size={18} className="text-cyan-400"/> Contact
          </h2>

          <p className="text-gray-400">
            harishnraj26@gmail.com
          </p>
        </div>

      </div>
    </main>
  );
}