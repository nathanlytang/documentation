const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Nathan\'s Documentation',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: 'Documentation for all of Nathan\'s public repositories',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#00eba4' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Projects',
                link: '/projects/introduction.md',
            },
            {
                text: 'Portfolio',
                link: 'https://nathanlytang.com/'
            },
            {
                text: 'Github',
                link: 'https://github.com/nathanlytang/'
            }
        ],
        sidebar: {
            '/projects/': [
                {
                    title: 'Projects',
                    collapsable: false,
                    children: [
                        '/projects/introduction.md'
                    ]
                },
                {
                    title: 'Cloudflare-DDNS',
                    collapsable: true,
                    children: [
                        '/projects/cloudflare-ddns/introduction.md',
                        '/projects/cloudflare-ddns/setup.md',
                        '/projects/cloudflare-ddns/multiple_domain.md'
                    ]
                },
                {
                    title: 'Steve',
                    collapsable: true,
                    children: [
                        '/projects/steve/introduction.md',
                        '/projects/steve/getting_started.md',
                        '/projects/steve/db_setup.md',
                        '/projects/steve/additional_configuration.md'
                    ]
                },
                {
                    title: 'wg-cli',
                    collapsable: true,
                    children: [
                        '/projects/wg-cli/introduction.md',
                        '/projects/wg-cli/install.md',
                        '/projects/wg-cli/usage.md'
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
