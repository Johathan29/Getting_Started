import React from 'react';
import clsx from 'clsx';
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';

const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <ul
      className={clsx(
        ThemeClassNames.docs.docSidebarMenu,
        // 🔹 Tailwind + estilo limpio y moderno
        'menu__list divide-y divide-gray-100 dark:divide-gray-800 rounded-lg overflow-hidden shadow-sm',
        'bg-white dark:bg-gray-900 p-2 space-y-1 transition-all duration-200'
      )}
    >
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Cierra el menú solo si corresponde
          if ((item.type === 'category' && item.href) || item.type === 'link') {
            mobileSidebar.toggle();
          }
        }}
        level={1}
        // 🔹 Sobrescribimos cómo se renderiza cada enlace
        LinkComponent={(props) => (
          <li>
            <a
              {...props}
              className={clsx(
                'block w-full rounded-md px-4 py-2 text-sm font-medium',
                'text-gray-700 dark:text-gray-200 transition-all duration-200',
                'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95'
              )}
            >
              {props.children}
            </a>
          </li>
        )}
        // 🔹 Controla el renderizado de subniveles
        ListComponent={({ children, expanded }) => (
          <ul
            className={clsx(
              'ml-4 border-l border-gray-200 dark:border-gray-700 pl-3',
              expanded
                ? 'max-h-[1000px] opacity-100 transition-all duration-300 ease-in-out'
                : 'max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out'
            )}
          >
            {children}
          </ul>
        )}
      />
    </ul>
  );
};

function DocSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
