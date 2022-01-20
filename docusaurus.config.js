/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Acent Swap',
  tagline: 'Project Reference Guide',
  url: 'https://github.io/acedefi/acent-docs',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'acedefi', 
  projectName: 'acent-docs',
  themeConfig: {
    navbar: {
      title: 'Project Reference Guide',
      logo: {
        alt: 'Acent Swap Logo',
        src: 'img/Acentlogo1.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/acedefi/acent-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'What is Acent Swap',
              to: 'docs/intro/',
            },
            {
              label: 'What is BaaS ',
              to: 'docs/baas/',
            },
          ],
        },
		{
          title: 'FAQ',
          items: [
            {
              label: 'How to enter LP',
              to: 'docs/faq/liquidity-pools',
            },
            {
              label: 'How to swap ACE in Acent Swap',
              to: 'docs/faq/acent-swap/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
           {
             label: 'Resources',
             to: 'docs/resources',
           },
           {
              label: 'Blog',
              to: 'blog',
           },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}@masternodeh Built with love from the community!`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/acedefi/acent-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/acedefi/acent-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
