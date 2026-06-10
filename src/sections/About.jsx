import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPhoneAlt,
} from "react-icons/fa";

const roles = [
  "React Developer",
  "Node.js Developer",
  "Laravel Developer",
  "Full Stack Engineer",
];

const Contact = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#fd9202] opacity-10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#0055a5] opacity-10 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* SAME CONTAINER STYLE AS ABOUT */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#fd9202] font-semibold mb-6">
            Hire Me
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight">
            Full Stack
            <span className="block text-[#fd9202] mt-2">Developer</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl leading-8">
            Available for building scalable web applications, enterprise
            dashboards, and API-driven systems using modern tech stacks.
          </p>

          {/* ROLE TEXT */}
          <p className="mt-8 text-green-400 text-lg md:text-xl font-medium">
            {roles[index]}
            <span className="animate-pulse"> |</span>
          </p>
        </motion.div>

        {/* MAIN CONTENT (FULL WIDTH STYLE LIKE ABOUT GRID) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#fd9202] opacity-10 blur-[100px]" />

              {/* ICON */}
              <div className="w-20 h-20 rounded-3xl bg-[#fd9202]/10 border border-[#fd9202]/20 flex items-center justify-center text-[#fd9202] text-4xl mb-10">
                <FaEnvelope />
              </div>

              <h3 className="text-3xl md:text-4xl font-black leading-tight">
                Ready to join your
                <span className="block text-[#fd9202] mt-2">
                  Development Team
                </span>
              </h3>

              <p className="text-gray-400 mt-8 leading-8 text-lg">
                I build production-ready applications with clean architecture,
                scalable backend systems, and modern frontend UI.
              </p>

              {/* CONTACT */}
              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-4 text-gray-300 hover:text-[#fd9202] transition">
                  <FaEnvelope />
                  <span>softwaresanchita@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-[#0055a5] transition">
                  <FaPhoneAlt />
                  <span>+91 89727 96365</span>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-5 mt-12">
                <a
                  href="https://github.com/Sanchita2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#fd9202] transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#fd9202] transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <h4 className="text-5xl font-black text-[#fd9202]">4+</h4>
                <p className="text-gray-400 mt-3">
                  Years of Development Experience
                </p>
              </div>

              <div className="p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <h4 className="text-5xl font-black text-[#0055a5]">50+</h4>
                <p className="text-gray-400 mt-3">Projects Built & Delivered</p>
              </div>

              <div className="p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <h4 className="text-5xl font-black text-green-400">100%</h4>
                <p className="text-gray-400 mt-3">Commitment to Clean Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
