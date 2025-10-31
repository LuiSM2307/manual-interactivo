import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual tecnico interactivo',
  tagline: 'Mantenimiento Preventivo de Hardware & Correctivo de Software',
  favicon: 'img/logo-universidad.ico',

  future: {
    v4: true,
  },

  url: 'https://manual-interactivo.github.io',

  baseUrl: '/manual-interactivo',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LuiSM2307-github', // Usually your GitHub org/user name.
  projectName: 'manual-interactivo', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MTI - Universidad',
        logo: {
          alt: 'Logo Liceo',
          src: 'img/logo-liceo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LuiSM2307/manual-interactivo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Secciones del manual',
            items: [
              {
                label: 'Preventivo Software',
                to: '/docs/preventivo-software',
              },
              {
                label: 'Correctivo Software', 
                to: '/docs/correctivo-software',
              },
              {
                label: 'Preventivo Hardware',
                to: '/docs/preventivo-hardware',
              },
            ],
          },
          {
            title: 'Institucion',
            items: [
              {
                label: 'Contacto',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
        ],
       copyright: `Copyright © ${new Date().getFullYear()} Manual Técnico Interactivo - U.E.N. "Vicente Emilio Sojo".`, 
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
