import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Insurance Aggregator Platform",

    description:
      "Enterprise-grade insurance management dashboard with analytics, customer workflows, premium tracking and responsive UI.",

    tech: [
      "React",
      "Redux",
      "Tailwind",
      "Charts",
      "MUI",
      "JavaScript",
      "CSS",
      "REST Api",
      "Laravel",
    ],

    gradient: "from-[#fd9202]/20 to-[#fd9202]/5",

    number: "01",
  },

  {
    title: "Payroll System",

    description:
      "Advanced attendance and leave management system with FullCalendar integration, approvals and analytics tracking.",

    tech: ["Laravel", "PHP", "CSS"],

    gradient: "from-[#0055a5]/20 to-[#0055a5]/5",

    number: "02",
  },

  {
    title: "Restaurant Landing Page",

    description:
      "Interactive health tracking application with BMI calculations, health insights and responsive visual reports.",

    tech: [
      "React",
      "CSS",
      "MUI",
      "JavaScript",
      "Node Js",
      "Mongo DB",
      "Express Js",
    ],

    gradient: "from-[#e50318]/20 to-[#e50318]/5",

    number: "03",
  },

  {
    title: "OTP Authentication",

    description:
      "Secure authentication system using OTP verification, JWT authentication and scalable backend architecture.",

    tech: ["Node.js", "Express", "MySQL"],

    gradient: "from-[#22c55e]/20 to-[#22c55e]/5",

    number: "04",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#fd9202] opacity-10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#0055a5] opacity-10 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#fd9202] font-semibold mb-5">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight max-w-5xl">
            Building
            <span className="block text-[#fd9202] mt-2">
              Production Ready Solutions
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mt-8">
            A collection of full stack applications, dashboards and systems
            focused on scalability, performance and modern UI/UX experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                md:p-10
                hover:-translate-y-2
                hover:border-[#fd9202]/30
                transition
                duration-500
              "
            >
              {/* Gradient Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-700
                  bg-gradient-to-br
                  ${project.gradient}
                `}
              />

              {/* Top Blur Circle */}
              <div
                className="
                absolute
                -top-20
                -right-20
                w-[220px]
                h-[220px]
                rounded-full
                bg-[#fd9202]/10
                blur-[90px]
              "
              />

              {/* Big Number */}
              <span
                className="
                absolute
                top-8
                right-8
                text-6xl
                md:text-8xl
                font-black
                text-white/5
              "
              >
                {project.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Project Top */}
                <div className="flex items-center justify-between mb-10">
                  {/* Small Badge */}
                  <div
                    className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-[#fd9202]/20
                    bg-[#fd9202]/10
                    text-[#fd9202]
                    text-sm
                    font-semibold
                  "
                  >
                    Featured Project
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/60
                    group-hover:text-[#fd9202]
                    group-hover:border-[#fd9202]/30
                    transition
                    duration-300
                  "
                  >
                    <FaArrowRight />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-base md:text-lg mt-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        text-sm
                        text-gray-300
                        backdrop-blur-xl
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Buttons */}
                {/* <div className="flex flex-wrap gap-4 mt-12">
                  Live Demo
                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      bg-[#fd9202]
                      hover:scale-105
                      transition
                      duration-300
                      px-6
                      py-4
                      rounded-2xl
                      text-black
                      font-semibold
                      shadow-lg
                      shadow-orange-500/20
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                  <button
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-white/10
                      hover:border-[#fd9202]/40
                      hover:text-[#fd9202]
                      transition
                      duration-300
                      px-6
                      py-4
                      rounded-2xl
                      backdrop-blur-xl
                    "
                  >
                    <FaGithub />
                    GitHub
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
