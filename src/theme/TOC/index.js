import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight text-sm font-medium px-2';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
export default function TOC({className, ...props}) {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar px-4 space-y-2', className)}>
      <h4 className='font-bold'>En esta página</h4>
      
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
