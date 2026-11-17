import React from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
export default function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}) {
  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link  items-center gap-1 text-white hover:text-primary transition-colors dark:text-slate-300 font-medium',
        className,
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );
  if (isDropdownItem) {
    return <li>{element}</li>;
  }
  return element;
}
