import { useState } from "react";

import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide"
        >
          <span className="text-white">Sanchita</span>

          <span className="text-[#fd9202]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          {/* <a
            href="#about"
            className="hover:text-[#fd9202] transition duration-300"
          >
            About
          </a> */}

          <a
            href="#skills"
            className="hover:text-[#fd9202] transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-[#fd9202] transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-[#fd9202] transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5 text-xl text-gray-300">
            <a
              href="https://github.com/Sanchita2022"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202] hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202] hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex bg-[#fd9202] hover:bg-[#ffab38] transition duration-300 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-orange-500/20"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="bg-[#020617]/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-8 text-gray-300">
          {/* <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#fd9202] transition"
          >
            About
          </a> */}

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#fd9202] transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#fd9202] transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#fd9202] transition"
          >
            Contact
          </a>

          {/* Mobile Socials */}
          <div className="flex items-center gap-6 text-2xl pt-2">
            <a
              href="https://github.com/Sanchita2022"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202]"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fd9202]"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Resume */}
          {/* <a
            href="/resume.pdf"
            download
            className="bg-[#fd9202] text-center text-black font-semibold px-6 py-4 rounded-2xl"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
