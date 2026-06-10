import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaLaravel, FaGithub } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiRedux, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-[#61DAFB]",
    bg: "from-[#61DAFB]/20 to-[#61DAFB]/5",
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
    bg: "from-white/20 to-white/5",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-[#68A063]",
    bg: "from-[#68A063]/20 to-[#68A063]/5",
  },

  {
    name: "Laravel",
    icon: <FaLaravel />,
    color: "text-[#FF2D20]",
    bg: "from-[#FF2D20]/20 to-[#FF2D20]/5",
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-[#38BDF8]",
    bg: "from-[#38BDF8]/20 to-[#38BDF8]/5",
  },

  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-[#764ABC]",
    bg: "from-[#764ABC]/20 to-[#764ABC]/5",
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-[#00758F]",
    bg: "from-[#00758F]/20 to-[#00758F]/5",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
    bg: "from-white/20 to-white/5",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#fd9202] opacity-10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#0055a5] opacity-10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#fd9202] font-semibold mb-5">
            Skills & Technologies
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight max-w-5xl">
            Engineering
            <span className="block text-[#fd9202] mt-2">
              Modern Experiences
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mt-8">
            Technologies and tools I use to build scalable, high-performance
            full stack applications.
          </p>
        </motion.div>
      </div>

      {/* ANGLED CAROUSEL */}
      <div className="relative overflow-hidden">
        {/* SCALE WRAPPER */}
        <div className="scale-[1.08] md:scale-[1.12]">
          {/* TOP ROW */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 md:gap-8 w-max -mb-6"
            style={{
              transform: "rotate(-14deg) translateX(-12%)",
              willChange: "transform",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  min-w-[220px]
                  md:min-w-[280px]
                  h-[180px]
                  md:h-[220px]
                  rounded-[28px]
                  md:rounded-[38px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  relative
                  overflow-hidden
                  p-5
                  md:p-8
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-[#fd9202]/40
                  transition
                  duration-300
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    ${skill.bg}
                  `}
                />

                {/* Blur Circle */}
                <div
                  className="
                  absolute
                  -top-10
                  -right-10
                  w-[120px]
                  md:w-[160px]
                  h-[120px]
                  md:h-[160px]
                  rounded-full
                  bg-[#fd9202]/10
                  blur-[60px]
                "
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    {/* Icon */}
                    <div
                      className={`
                        w-14
                        md:w-20
                        h-14
                        md:h-20
                        rounded-2xl
                        md:rounded-3xl
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-3xl
                        md:text-5xl
                        ${skill.color}
                        bg-black/20
                      `}
                    >
                      {skill.icon}
                    </div>

                    {/* Number */}
                    <span className="text-4xl md:text-6xl font-black text-white/5">
                      0{(index % skills.length) + 1}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black">
                      {skill.name}
                    </h3>

                    <p className="text-gray-400 mt-3 md:mt-4 leading-6 md:leading-7 text-sm md:text-base">
                      Production-ready modern technology for scalable
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* BOTTOM ROW */}
          <motion.div
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 md:gap-8 w-max"
            style={{
              transform: "rotate(14deg) translateX(-18%)",
              willChange: "transform",
            }}
          >
            {[...skills.slice().reverse(), ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  min-w-[200px]
                  md:min-w-[240px]
                  h-[130px]
                  md:h-[160px]
                  rounded-[24px]
                  md:rounded-[32px]
                  border
                  border-white/10
                  bg-black/20
                  backdrop-blur-2xl
                  relative
                  overflow-hidden
                  p-5
                  md:p-6
                  hover:-translate-y-2
                  hover:border-[#fd9202]/40
                  transition
                  duration-300
                  flex
                  items-center
                  gap-4
                  md:gap-5
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#fd9202]/10 to-transparent" />

                {/* Icon */}
                <div
                  className={`
                    relative z-10
                    w-14
                    md:w-16
                    h-14
                    md:h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-3xl
                    md:text-4xl
                    ${skill.color}
                    bg-white/5
                    border
                    border-white/10
                  `}
                >
                  {skill.icon}
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {skill.name}
                  </h3>

                  <p className="text-gray-500 mt-1 md:mt-2 text-sm">
                    Production Ready
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
