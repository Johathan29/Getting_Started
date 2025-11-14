import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';

export default function DocSidebarItemLink({ item, activePath }) {
  const isActive = isActiveSidebarItem(item, activePath);

  return (
    <li className="menu__list-item">
      <Link
        to={item.href}
        className={clsx(
          'menu__link block py-2 px-3 rounded-md transition-all duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-blue-500',
          // 🌞 Light
          'text-gray-700 hover:text-blue-700 hover:bg-blue-100',
          // 🌙 Dark
          'dark:text-gray-300 dark:hover:text-blue-200 dark:hover:bg-blue-800/40',
          // Activo
          isActive &&
            'font-semibold bg-blue-200 text-blue-700 dark:bg-blue-900/70 dark:text-blue-300'
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}
