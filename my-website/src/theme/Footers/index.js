import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <footer className={clsx("!bg-[var(--ifm-color-primary-darker)] text-white py-10 px-6  border-t border-[var(--ifm-color-primary-darker)] ")}>
      <div className={clsx("max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8")}>

        {/* Logo + Texto */}
        <div className={clsx("flex flex-col gap-3")}>
          <img src="/img/logo-cupula.svg" className={clsx("w-14")} alt="Logo" />
          <h2 className={clsx("font-semibold text-lg leading-snug")}>
            MINISTERIO DE HACIENDA Y ECONOMÍA
          </h2>
          <p className={clsx("text-sm text-white/70")}>
            {siteConfig.tagline}
          </p>
        </div>

        {/* Sección 1 */}
        <div>
          <h3 className={clsx("font-semibold mb-3")}>Aprender</h3>
          <ul className={clsx("space-y-2 text-sm text-white/80")}>
            <li><Link to="/frontend/intro">Frontend</Link></li>
            <li><Link to="/backend/intro">Backend</Link></li>
          </ul>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className={clsx("font-semibold mb-3")}>Recursos</h3>
          <ul className={clsx("space-y-2 text-sm text-white/80")}>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="https://github.com/facebook/docusaurus" target="_blank">GitHub</a></li>
          </ul>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 className={clsx("font-semibold mb-3")}>Soporte</h3>
          <ul className={clsx("space-y-2 text-sm text-white/80")}>
            <li><Link to="/">Centro de Ayuda</Link></li>
            <li><Link to="/">Contacto</Link></li>
          </ul>
        </div>

      </div>

      {/* Línea final */}
      <div className={clsx("mt-10 pt-6 border-t border-[var(--ifm-color-primary-lightest)] text-center text-xs !text-white ")}>
        © {new Date().getFullYear()} Ministerio de Hacienda y Economía. Todos los derechos reservados.
      </div>
    </footer>
  );
}
