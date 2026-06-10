import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const roles = [
  "React Developer",
  "Node.js Developer",
  "Laravel Developer",
  "Full Stack Engineer",
];

const Contact = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 200);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact_me">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#fd9202] opacity-10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#0055a5] opacity-10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#fd9202] font-semibold mb-6">
            Open to Opportunities
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight">
            Full Stack{" "}
            <span className="bg-gradient-to-r from-[#fd9202] to-[#ffb347] bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          {/* Highlighted Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-4 px-6 py-4 rounded-full
               bg-green-500/10 border border-green-500/20 backdrop-blur-xl"
          >
            {/* Pulsing Dot */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
              <span className="relative block w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            {/* Rotating Text */}
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl font-semibold"
            >
              Available for{" "}
              <span className="text-[#fd9202] font-bold">{roles[index]}</span>
            </motion.span>
          </motion.div>
        </motion.div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="relative bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#fd9202] opacity-10 blur-[100px]" />

            <div className="w-20 h-20 rounded-3xl bg-[#fd9202]/10 border border-[#fd9202]/20 flex items-center justify-center text-[#fd9202] text-4xl mb-10">
              <FaEnvelope />
            </div>

            <h3 className="text-3xl md:text-4xl font-black">
              Turning Ideas Into
              <span className="block text-[#fd9202] mt-2">
                Production Systems
              </span>
            </h3>

            <p className="text-gray-400 mt-8 leading-8">
              I build scalable full stack applications using React, Node.js,
              Laravel and MySQL with focus on performance and clean
              architecture.
            </p>

            <div className="mt-12 space-y-5 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope />
                softwaresanchita@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 89727 96365
              </div>
            </div>

            <div className="flex gap-5 mt-12 text-xl">
              <a
                href="https://github.com/Sanchita2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-[#fd9202] cursor-pointer transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-[#fd9202] cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="p-8 rounded-[32px] border border-white/10 bg-white/5">
              <h4 className="text-5xl font-black text-[#fd9202]">4+</h4>
              <p className="text-gray-400 mt-3">Years Experience</p>
            </div>

            <div className="p-8 rounded-[32px] border border-white/10 bg-white/5">
              <h4 className="text-5xl font-black text-[#0055a5]">7+</h4>
              <p className="text-gray-400 mt-3">Projects Delivered</p>
            </div>

            <div className="p-8 rounded-[32px] border border-white/10 bg-white/5">
              <h4 className="text-5xl font-black text-green-400">100%</h4>
              <p className="text-gray-400 mt-3">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
