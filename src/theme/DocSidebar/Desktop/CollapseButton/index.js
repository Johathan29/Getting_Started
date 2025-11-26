import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconArrow from '@theme/Icon/Arrow';
import styles from './styles.module.css';
export default function CollapseButton({onClick}) {
  return (
    <>
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        'button button--secondary button--outline !flex items-center group !justify-end',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}>
      <span className={clsx("!text-sky-500 text-[2.2rem] z-50 font-bold group-hover:-translate-x-[17rem] transition duration-[0.7s] ease-in-out")} >«</span>
    
    </button>
    <div className='col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10'></div>
</>
  );
}
