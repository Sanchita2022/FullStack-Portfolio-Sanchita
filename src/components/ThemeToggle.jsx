import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "light" ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        w-12
        h-12
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        flex
        items-center
        justify-center
        hover:border-[#fd9202]
        hover:text-[#fd9202]
        transition
        duration-300
      "
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
