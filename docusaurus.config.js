/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saldi Docs.',
  tagline: 'Ayuda para comenzar a crear tu tienda en linea facil y rapido.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //favicon: 'img/favicon.ico',
  favicon: 'img/circled-s.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        //title: 'Saldi',
        logo: {
          alt: 'www.saldi.mx',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Productos',
            items: [
              {
                label: 'Saldi Shop',
                to: 'https://saldi.mx',
              },
              {
                label: 'Saldi Inventario',
                to: 'https://saldi.mx/inventario',
              },
              {
                label: 'Saldi Facturacion',
                to: 'https://saldi.mx/factura',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Blog',
                href: 'https://monumental-narwhal-a4b971.netlify.app/blog',
              },
              {
                label: 'Docs',
                href: 'https://monumental-narwhal-a4b971.netlify.app/',
              },
            ],
          },
          {
            title: 'Soporte',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
            ],
          },
          {
            title: 'Compañia',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Conocenos',
                href: 'https://saldi.mx/about',
              },
              {
                label: 'Trabajos',
                href: 'https://saldi.mx/vacantes',
              },
              {
                label: 'Terminos de uso',
                href: 'https://saldi.mx/terminos',
              },
            ],
          },
        ],
        //logo: {
        //  alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
        //  src: '/img/meta_opensource_logo_negative.svg',
        //  href: 'https://opensource.fb.com',
        //},
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Saldi Co. ${new Date().getFullYear()} © Tu tienda en linea.`,
      },
    }),
};

module.exports = config;
