import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",

    company: "Guide2Protect Insurance Web Aggregator Pvt. Ltd.",

    duration: "March 2024 — Present",

    icon: <FaLaptopCode />,

    gradient: "from-[#fd9202]/20 to-transparent",

    description:
      "Developing enterprise-grade insurance platforms, scalable dashboards and high-performance frontend systems using React, Redux and modern UI architecture.",

    skills: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Laravel",
      "JavaScript",
    ],
  },

  {
    role: "Frontend Developer",

    company: "P N Software Pvt. Ltd.",

    duration: "July 2023 — Mar 2024",

    icon: <FaCode />,

    gradient: "from-[#0055a5]/20 to-transparent",

    description:
      "Built responsive web applications, authentication systems, analytics dashboards and modern UI experiences for multiple real-world projects.",

    skills: ["React.js", "JavaScript", "Rest Apis", "Responsive UI", "Redux"],
  },

  {
    role: "Junior Developer",

    company: "Code Partner It Solutions Pvt. Ltd.",

    duration: "May 2022 - June 2023",

    icon: <FaCode />,

    gradient: "from-[#0055a5]/20 to-transparent",

    description:
      "Built responsive web applications, authentication systems, analytics dashboards and modern UI experiences for multiple real-world projects.",

    skills: ["React.js", "Node Js", "JavaScript", "Web3", "Responsive UI"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6 relative overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fd9202] opacity-10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0055a5] opacity-10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#fd9202] font-semibold mb-5">
            Experience
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight max-w-5xl">
            Building
            <span className="block text-[#fd9202] mt-2">
              Modern Digital Products
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mt-8">
            My professional journey focused on creating scalable full stack
            systems, enterprise dashboards and modern frontend experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="
            absolute
            left-1/2
            top-0
            hidden
            lg:block
            -translate-x-1/2
            w-[2px]
            h-full
            bg-gradient-to-b
            from-transparent
            via-[#fd9202]/40
            to-transparent
          "
          />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
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
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative
                    flex
                    justify-center
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                    absolute
                    left-1/2
                    top-16
                    hidden
                    lg:flex
                    -translate-x-1/2
                    w-16
                    h-16
                    rounded-2xl
                    border
                    border-[#fd9202]/20
                    bg-black/40
                    backdrop-blur-xl
                    items-center
                    justify-center
                    text-[#fd9202]
                    text-2xl
                    z-20
                    shadow-lg
                    shadow-orange-500/20
                  "
                  >
                    <FaBriefcase />
                  </div>

                  {/* Card */}
                  <div
                    className="
                      group
                      relative
                      w-full
                      lg:w-[46%]
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
                        ${item.gradient}
                      `}
                    />

                    {/* Blur */}
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

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Top */}
                      <div className="flex items-start justify-between gap-5">
                        {/* Left */}
                        <div>
                          {/* Duration */}
                          <div
                            className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            border
                            border-[#fd9202]/20
                            bg-[#fd9202]/10
                            text-[#fd9202]
                            text-sm
                            font-semibold
                            mb-6
                          "
                          >
                            {item.duration}
                          </div>

                          {/* Role */}
                          <h3 className="text-3xl md:text-4xl font-black leading-tight">
                            {item.role}
                          </h3>

                          {/* Company */}
                          <p className="text-gray-400 mt-4 text-lg">
                            {item.company}
                          </p>
                        </div>

                        {/* Icon */}
                        <div
                          className="
                          min-w-[70px]
                          h-[70px]
                          rounded-3xl
                          border
                          border-white/10
                          bg-black/30
                          backdrop-blur-xl
                          flex
                          items-center
                          justify-center
                          text-3xl
                          text-[#fd9202]
                        "
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-8 text-base md:text-lg mt-10">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-3 mt-10">
                        {item.skills.map((skill, i) => (
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
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Bottom */}
                      <div className="flex items-center gap-3 mt-12 text-[#fd9202] font-semibold">
                        <span>View Experience</span>

                        <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
