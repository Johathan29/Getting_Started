// src/theme/DocCardListItem/index.js
import React from "react";
import Link from "@docusaurus/Link";
import { useDocById } from "@docusaurus/theme-common/internal";
import clsx from "clsx";

export default function DocCardListItem({ item }) {
  const doc = useDocById(item.docId ?? undefined);

  const href = item.href ?? doc?.path ?? "#";
  const title = item.label ?? doc?.title;
  const description = item.description ?? doc?.description;

  return (
    <li className="list-none">
      <Link
        to={href}
        className={clsx(
          "block rounded-2xl border p-5 shadow-sm transition-all",
          "bg-white border-gray-200 hover:border-blue-500 hover:shadow-md",
          "dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-400",

          // Animación suave
          "hover:-translate-y-1 hover:bg-blue-50/40 dark:hover:bg-blue-900/20"
        )}
      >
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </Link>
    </li>
  );
}
