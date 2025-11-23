// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { generateNavbarItems } from './generateNavbar.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MINISTERIO DE HACIENDA Y ECONOMÍA',
  tagline: 'Documentación del Proyecto',
   headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'docusaurus, documentación, desarrollo',
      },
      
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/favicon.ico",
      },
    },

  ],
       scripts: [
    {
      src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
      async: true,
    },
  ], 
  future: { v4: true },
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: { showReadingTime: true },
        theme: { customCss: './src/css/custom.css', },
        
        
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'docs/frontend',
        routeBasePath: 'frontend',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backend',
        path: 'docs/backend',
        routeBasePath: 'backend',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'systems',
        path: 'docs/systems',
        routeBasePath: 'systems',
        sidebarPath: require.resolve('./i.js'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
   navbar: {
  title: 'MINISTERIO DE HACIENDA Y ECONOMÍA',
  logo: { alt: 'Logo', src: 'img/logo-cupula.svg' },
  items: [
    {
      to: '/frontend/intro',
      label: 'Frontend',
      position: 'left',
      activeBaseRegex: '^/frontend/', // 👈 se mantiene activo en cualquier ruta dentro de /frontend
    },
    {
      to: '/backend/intro',
      label: 'Backend',
      position: 'left',
      activeBaseRegex: '^/backend/', // 👈 igual para backend
    },
    {
      to: '/systems/intro',
      label: 'Systems',
      position: 'left',
      activeBaseRegex: '^/systems/', // 👈 se mantiene activo en cualquier ruta dentro de /frontend
    },
    { to: '/blog', label: 'Blog', position: 'left' },
   /* {
      href: 'https://github.com/facebook/docusaurus',
      label: 'GitHub',
      position: 'right',
    },*/
  ],
},

    footer: {
      style: 'dark',
      links: [
       
        {
         
      items: [
        {
          html: `
            <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__link-item" style="display:flex; align-items:center; gap:5px;height: 4rem;">
              <img src="/img/logo-footer.png" style="" />
              
            </a>
          `,
        },
      ],
    },
        
         {
  title: 'Learn',
  items: [
    {
      to: '/frontend/intro',
      label: 'Frontend',
      activeBaseRegex: '^/frontend/',
    },
    {
      to: '/backend/intro',
      label: 'Backend',
      activeBaseRegex: '^/backend/',
    },
  ],
},

        
        {
          title: 'Community',
          items: [{ label: 'Help', to: '/' }],
        },
         {
          title: 'Community',
          items: [{ label: 'Help', to: '/' }],
        },
         {
          title: 'Community',
          items: [{ label: 'Help', to: '/' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Full Stack Docs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
