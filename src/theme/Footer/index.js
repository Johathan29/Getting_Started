import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <footer className={clsx("!bg-[var(--ifm-color-primary-darker)] text-white py-10 px-6  border-t border-[var(--ifm-color-primary-darker)] ")}>
      <div className={clsx("max-w-6xl mx-auto grid grid-cols-2 md:!grid-cols-4 gap-8")}>

        {/* Logo + Texto */}
        <div className={clsx("flex flex-col gap-3 col-span-2 md:col-span-1")}>
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
          <h3 className={clsx("font-semibold mb-3 text-[1.1rem]")}>Aprender</h3>
          <ul className={clsx("space-y-2 text-[0.8rem] text-white/80")}>
            <li><NavLink to="/frontend/intro" className="hover:!text-[#6eb4ec] hover:underline font-bold">Frontend</NavLink></li>
            <li><NavLink to="/backend/intro" className="hover:!text-[#6eb4ec] hover:underline font-bold">Backend</NavLink></li>
          </ul>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className={clsx("font-semibold mb-3 text-[1.1rem]")}>Recursos</h3>
          <ul className={clsx("space-y-2 text-[0.8rem] text-white/80")}>
            <li><NavLink to="/blog" className="hover:!text-[#6eb4ec] hover:underline font-bold">Blog</NavLink></li>
            <li><a href="https://github.com/facebook/docusaurus" target="_blank">GitHub</a></li>
          </ul>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 className={clsx("font-semibold mb-3 text-[1.1rem]")}>Soporte</h3>
          <ul className={clsx("space-y-2 text-[0.8rem] text-white/80")}>
            <li><NavLink to="/help" className="hover:!text-[#6eb4ec] hover:underline font-bold">Centro de Ayuda</NavLink></li>
            <li><NavLink to="/contacto" className="hover:!text-[#6eb4ec] hover:underline font-bold">Contacto</NavLink></li>
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
