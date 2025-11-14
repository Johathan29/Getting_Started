import React, { useState } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(({ scrollY }) => {
    if (isActive) setShowAnnouncementBar(scrollY === 0);
  }, [isActive]);

  return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'ARIA label for sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar h-full overflow-y-auto p-4',
        'transition-colors duration-300',
        className
      )}
    >
      <ul
        className={clsx(
          ThemeClassNames.docs.docSidebarMenu,
          'menu__list space-y-1 text-sm  divide-y divide-gray-100 '
        )}
      >
        
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
