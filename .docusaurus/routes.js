import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/first_page',
    component: ComponentCreator('/first_page', 'fb7'),
    exact: true
  },
  {
    path: '/first_page2',
    component: ComponentCreator('/first_page2', '67d'),
    exact: true
  },
  {
    path: '/frontend',
    component: ComponentCreator('/frontend', '5d9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/backend',
    component: ComponentCreator('/backend', 'c7e'),
    routes: [
      {
        path: '/backend',
        component: ComponentCreator('/backend', '1be'),
        routes: [
          {
            path: '/backend',
            component: ComponentCreator('/backend', '824'),
            routes: [
              {
                path: '/backend/API/auth',
                component: ComponentCreator('/backend/API/auth', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/API/endpoints',
                component: ComponentCreator('/backend/API/endpoints', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/base-datos/modelos',
                component: ComponentCreator('/backend/base-datos/modelos', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/base-datos/queries',
                component: ComponentCreator('/backend/base-datos/queries', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/category/api',
                component: ComponentCreator('/backend/category/api', '09a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/category/base-de-datos',
                component: ComponentCreator('/backend/category/base-de-datos', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/componentes',
                component: ComponentCreator('/backend/componentes', 'bd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend/intro',
                component: ComponentCreator('/backend/intro', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/frontend',
    component: ComponentCreator('/frontend', '1f8'),
    routes: [
      {
        path: '/frontend',
        component: ComponentCreator('/frontend', 'e8f'),
        routes: [
          {
            path: '/frontend',
            component: ComponentCreator('/frontend', '2e3'),
            routes: [
              {
                path: '/frontend/category/desing',
                component: ComponentCreator('/frontend/category/desing', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend/componentes',
                component: ComponentCreator('/frontend/componentes', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend/desing/figma',
                component: ComponentCreator('/frontend/desing/figma', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend/desing/intro',
                component: ComponentCreator('/frontend/desing/intro', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend/intro',
                component: ComponentCreator('/frontend/intro', 'c44'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/systems',
    component: ComponentCreator('/systems', 'b50'),
    routes: [
      {
        path: '/systems',
        component: ComponentCreator('/systems', 'e5e'),
        routes: [
          {
            path: '/systems',
            component: ComponentCreator('/systems', '1b2'),
            routes: [
              {
                path: '/systems/category/test',
                component: ComponentCreator('/systems/category/test', 'ae5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/systems/category/tutorial---extras',
                component: ComponentCreator('/systems/category/tutorial---extras', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/systems/intro',
                component: ComponentCreator('/systems/intro', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/systems/test/',
                component: ComponentCreator('/systems/test/', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/systems/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/systems/tutorial-extras/manage-docs-versions', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/systems/tutorial-extras/translate-your-site',
                component: ComponentCreator('/systems/tutorial-extras/translate-your-site', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
