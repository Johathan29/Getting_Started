    // src/components/CardList.jsx
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import clsx from 'clsx';
import styles from './card.module.css'
    function TabsComponent() {
      return (
        <>
             <Tabs groupId="current-os" queryString className={clsx('tabs',styles.tabs)}>
                <TabItem value="android" label="Android" >
                   <span className={clsx('tabItem',styles.tabItem)}> Android</span>
                </TabItem>
                <TabItem value="ios" label="iOS">
                <span className={clsx('tabItem',styles.tabItem)}>iOS</span>
                 </TabItem>
            </Tabs>
        </>
      );
    }

    export default TabsComponent; // Export the component