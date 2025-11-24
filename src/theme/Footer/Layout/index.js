import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx("!bg-[var(--ifm-color-primary-darker)] text-white py-10 px-6  border-t border-[var(--ifm-color-primary-darker)] ")}>
      <div className={clsx("max-w-full md:max-w-6xl mx-auto ")}>
        {links}
        {(logo || copyright) && (
          <div className={clsx("flex flex-col gap-3")}>
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
