import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';

export default function NavbarLayout({children}) {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();

  const mobileSidebar = useNavbarMobileSidebar();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  // ✅ Detectar scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    
      <nav
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main',
        })}
        className={clsx(
          ThemeClassNames.layout.navbar.container,
          'navbar flex',
          'navbar--fixed-top',
          scrolled ? 'navbar--scrolled' : 'navbar--top',
          hideOnScroll && [
            'navbarHideable',
            !isNavbarVisible && 'navbarHidden',
          ],
          {
            'navbar-sidebar--show': mobileSidebar.shown,
          },
        )}>
          <div className={clsx('container mx-4')}>
        {children}
        
        <NavbarMobileSidebar />
        </div>
      </nav>
    
  );
}
