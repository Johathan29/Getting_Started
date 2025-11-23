import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useTOCFilter, useTOCHighlight } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";

/**
 * 🌗 Custom TableOfContents
 * Tabla de contenidos moderna y estilizada con Tailwind.
 */
export default function CustomTableOfContents({ toc, minHeadingLevel, maxHeadingLevel }) {
  const { tableOfContents } = useThemeConfig();
  const filteredToc = useTOCFilter({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  useTOCHighlight();

  if (!filteredToc.length) {
    return null;
  }

  return (
    <nav
      aria-label="Tabla de contenidos"
      className={clsx(
        "hidden xl:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto thin-scrollbar px-4 pb-6 rounded-lg border transition-all duration-300",
        // 🌞 Modo claro
        "bg-white/80 border-gray-200 text-gray-800 backdrop-blur-md",
        // 🌙 Modo oscuro
        "dark:bg-gray-900/50 dark:border-gray-700 dark:text-gray-300"
      )}
    >
      <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
        En esta página
      </p>

      <ul className="space-y-1">
        {filteredToc.map((heading) => (
          <TOCItem key={heading.id} item={heading} />
        ))}
      </ul>
    </nav>
  );
}

/** 🔹 Subcomponente para cada item del TOC */
function TOCItem({ item }) {
  return (
    <li>
      <Link
        href={`#${item.id}`}
        className={clsx(
          "block text-sm rounded-md px-2 py-1 transition-colors duration-200",
          // Colores base
          "text-gray-600 hover:text-blue-700 hover:bg-blue-100/60",
          // Modo oscuro
          "dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-blue-800/40"
        )}
      >
        {item.value}
      </Link>

      {item.children?.length > 0 && (
        <ul className="ml-3 mt-1 space-y-1 border-l border-gray-300/40 dark:border-gray-600/30 pl-3">
          {item.children.map((child) => (
            <TOCItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
