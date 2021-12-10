// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PowerProfile',
  tagline: 'A usable PowerShell profile for Cloud Admins and DevOps',
  url: 'https://powerprofile.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'PowerProfile', // Usually your GitHub org/user name.
  projectName: 'powerprofile.sh', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PowerProfile/powerprofile.sh/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PowerProfile/powerprofile.sh/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            'font-size': '.675rem',
          },
          lightIcon: '☀️',
          lightIconStyle: {
            'font-size': '.675rem',
          },
        },
      },
      image: 'android-chrome-512x512.png',
      metadatas: [
        { name: 'twitter:card', content: 'summary' },
        { name: 'apple-mobile-web-app-title', content: 'PowerProfile.sh' },
        { name: 'application-name', content: 'PowerProfile.sh' },
        { name: 'msapplication-TileColor', content: '#0c74d4' },
        { name: 'theme-color', content: '#0c74d4' }
      ],
      navbar: {
        title: 'PowerProfile',
        hideOnScroll: true,
        logo: {
          alt: 'PowerProfile Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/what-is-powerprofile',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/PowerProfile',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      footer: {
        copyright: `<div>Made with ❤️ in Munich, Germany by <a href="https://julian.pawlowski.me/">Julian Pawlowski</a>.</div><div align="center"><a href="/legal">Legal Notice</a></div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
