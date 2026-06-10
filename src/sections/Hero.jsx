import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import myImg from "../assets/my_img_new.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-28">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#fd9202] opacity-10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0055a5] opacity-10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <p className="text-sm text-gray-300">Available for work</p>
          </div>

          {/* Subtitle */}
          <p className="uppercase tracking-[0.3em] text-sm text-[#fd9202] font-semibold mb-6">
            Frontend React Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Building
            <span className="block text-[#fd9202]">Modern</span>
            Interfaces
          </h1>

          {/* Type Animation */}
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mt-8 h-[40px]">
            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Frontend Engineer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-400 leading-8 text-lg max-w-xl">
            I build scalable, responsive and high-performance web applications
            with modern UI/UX principles and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                bg-[#fd9202]
                hover:bg-[#ffae42]
                transition
                text-black
                font-semibold
                px-8
                py-4
                rounded-2xl
                flex
                items-center
                gap-3
                shadow-lg
                shadow-orange-500/20
              "
            >
              View Projects
              <FaArrowRight />
            </button>

            <button
              onClick={() =>
                document.getElementById("contact_me")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
              border
              border-white/10
                hover:border-2
              hover:border-[#fd9202]
              hover:text-[#fd9202]
              transition
              px-8
              py-4
              rounded-2xl
              bg-white/5
            "
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10 text-xl text-gray-400">
            <a
              href="https://github.com/Sanchita2022"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#fd9202] opacity-20 blur-[100px] rounded-full" />

            {/* Main Circle */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
  relative
  w-[280px]
  h-[280px]
  sm:w-[350px]
  sm:h-[350px]
  md:w-[450px]
  md:h-[450px]
  lg:w-[550px]
  lg:h-[550px]
  xl:w-[650px]
  xl:h-[650px]
  rounded-full
  overflow-hidden
  border-2 border-[#fd9202]
  shadow-[0_0_50px_rgba(253,146,2,0.4)]
"
            >
              <img
                src={myImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
