import React, { useState } from 'react';
import clsx from 'clsx';
import { Collapsible } from '@docusaurus/theme-common';
import DocSidebarItems from '@theme/DocSidebarItems';
import { ChevronDown } from 'lucide-react';

export default function DocSidebarItemCategory({ item, activePath }) {
  const [open, setOpen] = useState(
    item.items.some(sub => sub.href === activePath)
  );

  const isActive = item.items.some(sub => sub.href === activePath);

  return (
    <li
      className={clsx(
        'menu__list-item rounded-md transition-all duration-200',
        isActive && 'bg-blue-100 dark:bg-blue-950/60'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={clsx(
          'menu__link w-full flex justify-between items-center px-3 py-2 rounded-md font-semibold transition-colors duration-200',
          'hover:bg-blue-100 hover:text-blue-700',
          'dark:hover:bg-blue-800/40 dark:hover:text-blue-200',
          isActive
            ? 'bg-blue-200 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
            : 'text-gray-700 dark:text-gray-300'
        )}
      >
        {item.label}
        <ChevronDown
          className={clsx(
            'w-4 h-4 transition-transform duration-300',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>

      <Collapsible lazy as="ul" className="menu__list" open={open}>
        <DocSidebarItems items={item.items} activePath={activePath} />
      </Collapsible>
    </li>
  );
}
