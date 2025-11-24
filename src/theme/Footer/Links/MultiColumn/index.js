import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import LinkItem from '@theme/Footer/LinkItem';
function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className={clsx('footer__item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.footer.column,
        'col footer__col',
        column.className,
      )}>
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({columns}) {
 
  return (
    <div className={clsx("grid grid-cols-1 items-start md:grid-cols-5 gap-4")}>
      {columns.map((column, i) => (
        i<1?
        <Column key={i} column={column} />
        : ''
      ))}
      <div className='grid col-span-4 grid-cols-2 md:grid-cols-4 gap-8'>
      {columns.map((column, i) => (
        i>=1?
        <Column key={i} column={column} />
        : ''
      ))}
      </div>
    </div>
  );
}
