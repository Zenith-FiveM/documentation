import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Zenith',
    tagline:
        'A modern roleplay framework for FiveM. Lightweight. Modular. Built on ox.',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    url: 'https://docs.zenithfivem.dev',
    baseUrl: '/',

    organizationName: 'Zenith-FiveM',
    projectName: 'documentation',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    stylesheets: [
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
            type: 'text/css',
        },
    ],
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'anonymous',
            },
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/Zenith-FiveM/documentation/tree/main/docs/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/Zenith-FiveM/documentation/tree/main/blog/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Zenith',
            logo: {
                alt: 'Zenith Framework',
                src: 'https://r2.fivemanage.com/xm6joUUSlUjI3K1Qfndbd/logo-512x512.png',
            },
            hideOnScroll: true,
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://discord.zenithfivem.dev',
                    position: 'right',
                    className: 'header-discord-link',
                    'aria-label': 'Discord community',
                },
                {
                    href: 'https://github.com/Zenith-FiveM',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        prism: {
            theme: prismThemes.oneLight,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['lua', 'bash', 'json', 'sql'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
