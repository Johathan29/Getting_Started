import React from 'react';
import DocSidebarItemLink from './Link';
import DocSidebarItemCategory from './Category';

export default function DocSidebarItem({ item, activePath, level, ...props }) {
  if (item.type === 'category') {
    return (
      <DocSidebarItemCategory
        item={item}
        activePath={activePath}
        level={level}
        {...props}
      />
    );
  }

  if (item.type === 'link') {
    return (
      <DocSidebarItemLink
        item={item}
        activePath={activePath}
        level={level}
        {...props}
      />
    );
  }

  return null;
}
