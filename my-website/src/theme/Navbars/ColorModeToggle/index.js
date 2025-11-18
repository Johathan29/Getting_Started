import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const { disableSwitch } = useThemeConfig().colorMode;
  const { colorMode, setColorMode } = useColorMode();

  if (disableSwitch) {
    return null;
  }

  const toggleMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleMode}
      className={clsx(
        "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "active:scale-90",
        navbarStyle === "dark" ? styles.darkNavbarColorModeToggle : "",
        className
      )}
    >
      {/* ICONO – animación de rotación */}
      <span
        className={clsx(
          "text-xl transition-all duration-500 transform",
          colorMode === "dark"
            ? "rotate-180 opacity-0 absolute"
            : "rotate-0 opacity-100"
        )}
      >
        ☀️
      </span>

      <span
        className={clsx(
          "text-xl transition-all duration-500 transform",
          colorMode === "dark"
            ? "rotate-0 opacity-100"
            : "-rotate-180 opacity-0 absolute"
        )}
      >
        🌙
      </span>
    </button>
  );
}
