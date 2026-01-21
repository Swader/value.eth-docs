import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'value.eth',
  tagline: 'PermaLock protocol docs for value.eth',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://value.eth.link',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Swader', // Usually your GitHub org/user name.
  projectName: 'value.eth', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/android-chrome-512x512.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'value.eth',
      logo: {
        alt: 'value.eth logo',
        src: 'img/android-chrome-192x192.png',
        href: '/',
      },
      items: [
        {to: '/deployments', label: 'Deployments', position: 'left'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {href: 'https://value.eth.link', label: 'App', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'How it works',
              to: '/how-it-works',
            },
            {
              label: 'Interface',
              to: '/interface',
            },
            {
              label: 'Deployments',
              to: '/deployments',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'App',
              href: 'https://value.eth.limo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} value.eth`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/apple-touch-icon.png',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0f172a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
        ],
      },
    ],
  ],
};

export default config;
