import React from "react";
import OriginalDocBreadcrumbs from "@theme-original/DocBreadcrumbs";
import clsx from "clsx";

/**
 * Sobrescribe el breadcrumb original para aplicar estilos
 * sin perder la funcionalidad nativa de Docusaurus.
 */
export default function DocBreadcrumbs(props) {
  return (
    <div
      className={clsx(
        // 🔹 Contenedor general del breadcrumb
        "flex items-center gap-2 text-sm mb-6 px-2 py-1 mx-4",
        "backdrop-blur-sm border-b border-[#3641534f] ",
        "text-gray-700 dark:text-gray-300"
      )}
    >
      <OriginalDocBreadcrumbs
        {...props}
        className={clsx(
          // 🔹 Contenedor interno (lista de links)
          "flex items-center flex-wrap gap-1",
          "text-gray-600 dark:text-gray-300 p-3"
        )}
        itemClassName={clsx(
          // 🔹 Cada item (link o texto final)
          "px-2 py-1 rounded-md transition-all duration-200",
          "hover:text-blue-600 hover:bg-blue-100/50",
          "dark:hover:text-blue-400 dark:hover:bg-blue-900/30 "
        )}
        activeItemClassName={clsx(
          // 🔹 El item actual (último breadcrumb)
          "font-semibold text-blue-600 dark:text-blue-400 p-2",
          "dark:bg-blue-900/40"
        )}
        separatorClassName={clsx(
          // 🔹 Separador entre elementos
          "mx-1 text-gray-400 dark:text-gray-500 select-none"
        )}
      />
    </div>
  );
}
