import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function NavbarBrand({ mobile = false, className }) {
  return (
    <div className={clsx("navbar__brand flex items-center gap-3", className)}>
      {/* LOGO */}
      <Link
        className="navbar__logo flex-shrink-0"
        to="/"
      >
        <img
          src={useBaseUrl("img/logo-cupula.svg")}
          alt="Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain" // ← tamaño personalizado
        />
      </Link>

      {/* TEXTO (SIN TRUNCATE) */}
      <Link
        className={clsx(
          "navbar__title text-base md:text-lg font-semibold",
          "!whitespace-normal !overflow-visible !text-ellipsis-none"
        )}
        to="/"
      >
        MINISTERIO DE HACIENDA Y ECONOMÍA
      </Link>
    </div>
  );
}
