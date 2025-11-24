import clsx from 'clsx';
import React from 'react';
export default function FooterCopyright({copyright}) {
  return (
    <div
      className={clsx("mt-10 pt-6 border-t border-[var(--ifm-color-primary-lighter)] text-center text-xs !text-white ")}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright}}
    />
  );
}
