import React from 'react';
import OriginalNavbarMobileSidebar from '@theme-original/Navbar/MobileSidebar';
import clsx from 'clsx';

export default function NavbarMobileSidebar(props) {
  return (
    <OriginalNavbarMobileSidebar
      {...props}
      // Aquí modificamos el container de la sidebar
      className={clsx(
        props.className,
        "bg-blue-500/20 dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-72 shadow-xl border-l border-gray-200 dark:border-gray-800"
      )}
    />
  );
}
