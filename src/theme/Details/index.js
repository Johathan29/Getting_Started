import React from 'react';
import clsx from 'clsx';
import {Details as DetailsGeneric} from '@docusaurus/theme-common/Details';
import styles from './styles.module.css';
// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--note p-2 lert alert--secondary  text-[var(--ifm-text-secundary)] border-[var(--ifm-color-primary-dark)]';
export default function Details({...props}) {
  return (
    <DetailsGeneric
      {...props}
      className={clsx(InfimaClasses, styles.details, props.className)}
    />
  );
}
