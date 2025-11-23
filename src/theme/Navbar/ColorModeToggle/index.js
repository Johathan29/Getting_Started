import React, { useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function NavbarColorModeToggle({ className }) {
  const { colorMode, setColorMode } = useColorMode();
  const waveRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMode = (e) => {
    const button = e.currentTarget;

    // Obtener coordenadas del botón
    const rect = button.getBoundingClientRect();
    const wave = document.createElement("div");

    waveRef.current = wave;

    wave.classList.add(styles.wave);

    // Posicionar la onda en el centro del botón
    wave.style.left = rect.left + rect.width / 2 + "px";
    wave.style.top = rect.top + rect.height / 2 + "px";

    // Definir si vamos a dark o a light
    const goingDark = colorMode === "light";

    if (goingDark) {
      // LIGHT → DARK (explosión hacia afuera)
      wave.classList.add(styles.waveLight);
      document.body.appendChild(wave);

      // activar la expansión
      setTimeout(() => wave.classList.add(styles.waveActive), 10);
    } else {
      // DARK → LIGHT (implosión hacia el botón)
      wave.classList.add(styles.waveDark);
      document.body.appendChild(wave);

      // activar la contracción
      setTimeout(() => wave.classList.add(styles.waveActive), 10);
    }

    // Cambiar el modo de Docusaurus
    setColorMode(goingDark ? "dark" : "light");

    // Remover onda después del efecto
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      wave.classList.add(styles.waveReverse);
      setTimeout(() => wave.remove(), 100);
    }, 500);
  };

  return (
    <button
      onClick={toggleMode}
      className={clsx(
        "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
        "hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-90",
        className
      )}
    >
      {/* ICONO ANIMADO */}
      <span
        className={clsx(
          "text-xl transition-all duration-500 transform",
          colorMode === "dark"
            ? "rotate-180 opacity-0 absolute"
            : "rotate-0 opacity-100"
        )}
      >
        🌙
      </span>

      <span
        className={clsx(
          "text-xl transition-all duration-500 transform",
          colorMode === "dark"
            ? "rotate-0 opacity-100"
            : "-rotate-180 opacity-0 absolute"
        )}
      >
        ☀️
      </span>
    </button>
  );
}
