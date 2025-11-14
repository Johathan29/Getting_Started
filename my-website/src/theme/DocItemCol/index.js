import React from "react";
import clsx from "clsx";

/**
 * 🌗 DocItemCol personalizado
 * Aplica un estilo tipo "card" elegante al contenido de cada documento MDX.
 * Compatible con modo claro/oscuro + Tailwind.
 */
export default function DocItemCol({ children }) {
  return (
    <div
      className={clsx(
        // Layout base
        "relative w-full max-w-5xl mx-auto px-6 md:px-10 py-8 md:py-12",
        // Fondo tipo card
        "rounded-2xl shadow-lg border transition-all duration-300",
        // 🌞 Modo claro
        "bg-white/80 border-gray-200 text-gray-800 backdrop-blur-md",
        // 🌙 Modo oscuro
        "dark:bg-gray-900/60 dark:border-gray-700 dark:text-gray-200",
        // Animación y hover
        "hover:shadow-xl hover:-translate-y-0.5"
      )}
    >
      <article
        className={clsx(
          "prose prose-gray dark:prose-invert max-w-none",
          // Ajustes tipográficos
          "prose-headings:font-semibold prose-headings:tracking-tight",
          "prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400",
          "prose-code:bg-gray-100 dark:prose-code:bg-gray-800",
          "prose-code:rounded prose-code:px-2 prose-code:py-1"
        )}
      >
        {children}
      </article>
    </div>
  );
}
