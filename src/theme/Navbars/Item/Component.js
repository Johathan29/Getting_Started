// src/theme/Navbar/Item/Component.js
import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";

/**
 * NavbarItem personalizado:
 * - Detecta si el usuario está en una sección (frontend / backend)
 * - Marca activo el padre correcto del navbar
 */
export default function NavbarItem({ label, to, href, position, ...props }) {
  const location = useLocation();
  const linkHref = to || href || "#";
  const isExternal = /^(https?:)?\/\//.test(linkHref);

  const normalizedPath = location.pathname.replace(/\/$/, "");
  const normalizedHref = linkHref.replace(/\/$/, "");

  // 🔹 Detecta si el path pertenece a la sección activa
  const isActive =
    !isExternal &&
    (
      normalizedPath === normalizedHref ||
      normalizedPath.startsWith(normalizedHref + "/") ||
      normalizedPath.startsWith(`/docs${normalizedHref}`) ||
      // También si estás en /frontend/... o /backend/...
      (normalizedHref.includes("frontend") && normalizedPath.includes("/frontend")) ||
      (normalizedHref.includes("backend") && normalizedPath.includes("/backend"))
    );

  const linkProps = isExternal
    ? { href: linkHref, target: "_blank", rel: "noopener noreferrer" }
    : { to: linkHref };

  return (
    <li className={clsx(" flex items-center", position === "right" && "ml-auto")}>
      <Link
        {...linkProps}
        {...props}
        className={clsx(
          "inline-block px-3 py-2 rounded-md font-medium text-sm transition-all duration-300 border-b-2 border-transparent",
          // ☀️ Light
          "text-gray-800 hover:text-blue-700 hover:bg-blue-100/60",
          // 🌙 Dark
          "dark:text-gray-200 dark:hover:text-blue-300 dark:hover:bg-blue-800/40",
          // 🔵 Active (marcamos visualmente)
          isActive &&
            "!text-blue-600 dark:!text-blue-400 font-semibold border-blue-500 dark:border-blue-400 bg-blue-100/50 dark:bg-blue-900/40"
        )}
      >
        {label}
      </Link>
    </li>
  );
}
