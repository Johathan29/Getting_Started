import React, { useRef } from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const { disableSwitch } = useThemeConfig().colorMode;
  const { colorMode, setColorMode } = useColorMode();
  const buttonRef = useRef(null);

  if (disableSwitch) return null;

  const toggleMode = () => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const overlay = document.createElement("div");
    overlay.className = styles.themeOverlay;
    overlay.style.setProperty("--x", `${x}px`);
    overlay.style.setProperty("--y", `${y}px`);
    overlay.style.setProperty(
      "--bg",
      colorMode === "dark" ? "#ffffff" : "#020617"
    );

    document.body.appendChild(overlay);

    // Forzar repaint
    overlay.getBoundingClientRect();

    overlay.classList.add(styles.expand);

    // Cambia el theme a mitad de la animación
    setTimeout(() => {
      setColorMode(colorMode === "dark" ? "light" : "dark");
    }, 300);

    // Limpieza
    setTimeout(() => {
      overlay.remove();
    }, 650);
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleMode}
      className={clsx(
        "relative w-10 h-10 flex items-center justify-center rounded-full",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "active:scale-90 transition",
        navbarStyle === "dark" ? styles.darkNavbarColorModeToggle : "",
        className
      )}
    >
      {/* ICONOS */}
      <span
        className={clsx(
          styles.icon,
          colorMode === "dark" ? styles.iconHidden : styles.iconVisible
        )}
      >
       🌙
      </span>

      <span
        className={clsx(
          styles.icon,
          colorMode === "dark" ? styles.iconVisible : styles.iconHidden
        )}
      >
          ☀️
      </span>
    </button>
  );
}
