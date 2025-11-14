import React, { memo } from 'react';
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems,
} from '@docusaurus/plugin-content-docs/client';
import DocSidebarItem from '@theme/DocSidebarItem';

function DocSidebarItems({ items, activePath, ...props }) {
  const visibleItems = useVisibleSidebarItems(items, activePath);

  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <DocSidebarItem
          key={index}
          item={item}
          activePath={activePath}
          level={props.level || 1}
          {...props}
        />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

export default memo(DocSidebarItems);
