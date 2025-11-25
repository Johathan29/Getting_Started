import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import styles from './styles.module.css';
function AdmonitionContainer({type, className, children}) {
  return (
    <div
      className={clsx("mt-4 p-4 mr-4 rounded border-l-3",
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className,
      )}>
      {children} 
    </div>
  );
}
function AdmonitionHeading({icon, title}) {
  return (
    <div className={clsx("flex items-center",styles.admonitionHeading)}>
      <span className={styles.admonitionIcon}>{icon}</span>
      {title}
    </div>
  );
}
function AdmonitionContent({children}) {
  return children ? (
    <div className={clsx("text-black",styles.admonitionContent)}>{children}</div>
  ) : null;
}
export default function AdmonitionLayout(props) {
  const {type, icon, title, children, className} = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      {title || icon ? <AdmonitionHeading title={title} icon={icon} /> : null}
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionContainer>
  );
}
