// src/theme/Layout/index.js
import React, { useEffect } from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
  useEffect(() => {
    // 👀 Función que sincroniza el modo de Docusaurus con Tailwind
    const syncTailwindWithDocusaurus = () => {
      const html = document.documentElement;
      const theme = html.getAttribute("data-theme");
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    };

    // Ejecutar al cargar
    syncTailwindWithDocusaurus();

    // Escuchar cambios del modo (Docusaurus emite un MutationObserver)
    const observer = new MutationObserver(syncTailwindWithDocusaurus);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Cargar Tailwind vía CDN */}
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />
      </head>

      {/* Tu layout normal */}
      <Layout {...props} />
    </>
  );
}
