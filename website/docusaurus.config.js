// @ts-check
// `@type` JSDoc annotations keep editor autocomplete working, and can help type-check your config
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VIEW MODE',
  tagline: 'Il debug del lavoro IT in Italia',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pierpaolo1223.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/view-mode/',

  // GitHub pages deployment config.
  organizationName: 'pierpaolo1223',
  projectName: 'view-mode',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',  // Imposta i documenti come home del sito
          editUrl: 'https://github.com',
        },
        blog: false, // Disabilita il blog per concentrarsi sul libro
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VIEW MODE',
        logo: {
          alt: 'VIEW MODE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Libro',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Il libro',
            items: [
              {
                label: 'Leggi online',
                to: '/',
              },
              {
                label: 'Repository GitHub',
                href: 'https://github.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Apri una issue',
                href: 'https://github.com/Pierpaolo1223/view-mode/issues',
              },
              {
                label: 'Licenza MIT',
                href: 'https://github.com/blob/main/LICENSE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pierpaolo. Libro open source con licenza MIT.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

