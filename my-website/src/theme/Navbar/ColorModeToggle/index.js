// src/theme/Navbar/ColorModeToggle/index.js
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ColorModeToggle({ className = '' }) {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleMode}
      whileTap={{ scale: 0.9 }}
      aria-label="Cambiar modo de color"
      title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 
        bg-white hover:bg-gray-200  dark:hover:bg-blue-700/80 shadow-sm ${className}`}
    >
      {/* ☀️ Sol */}
      <SunIcon
        className={`
          absolute w-5 h-5 text-[#002652] transition-all duration-500
          ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}
        `}
      />

      {/* 🌙 Luna */}
      <MoonIcon
        className={`
          absolute w-5 h-5 text-blue-400 transition-all duration-500
          ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}
        `}
      />
    </motion.button>
  );
}
