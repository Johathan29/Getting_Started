import React from 'react';
import { translate } from '@docusaurus/Translate';
import IconArrow from '@theme/Icon/Arrow';
import clsx from 'clsx';

export default function CollapseButton({ onClick }) {
  return (
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
        description: 'ARIA label for collapse button of doc sidebar',
      })}
      onClick={onClick}
      className={clsx(
        'tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9',
        'tw-rounded-lg tw-border tw-transition-all tw-duration-300',
        // 🌞 Light
        'tw-bg-white tw-border-gray-300 tw-text-gray-700 hover:tw-bg-blue-50 hover:tw-border-blue-300 hover:tw-text-blue-600',
        // 🌙 Dark
        'dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-text-gray-300 dark:hover:tw-bg-blue-900 dark:hover:tw-text-blue-300 dark:hover:tw-border-blue-700',
        // Pequeña sombra para resaltar
        'tw-shadow-sm hover:tw-shadow-md'
      )}
    >
      <IconArrow className="tw-w-4 tw-h-4 tw-transition-transform tw-duration-300" />
    </button>
  );
}
