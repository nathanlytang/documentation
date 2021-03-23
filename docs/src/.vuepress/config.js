const { description } = require('../../package')

module.exports = {
    base: '/documentation/',
    title: 'Nathan\'s Docs',
    description: 'Documentation for all of Nathan\'s public repositories',
    head: [
        ['meta', { name: 'theme-color', content: '#00eba4' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'Projects',
                link: '/projects/',
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
            '/projects/cloudflare-ddns': [
                {
                    title: 'Cloudflare-DDNS',
                    collapsable: false,
                    children: [
                        '/projects/cloudflare-ddns/introduction.md',
                        '/projects/cloudflare-ddns/setup.md',
                        '/projects/cloudflare-ddns/multiple_domain.md'
                    ]
                },
            ],
            '/projects/inhabit': [
                {
                    title: 'Inhabit',
                    collapsable: false,
                    children: [
                        '/projects/inhabit/introduction.md',
                        '/projects/inhabit/setup.md'
                    ]
                },
            ],
            '/projects/steve/': [
                {
                    title: 'Steve',
                    collapsable: false,
                    children: [
                        '/projects/steve/introduction.md',
                        '/projects/steve/getting_started.md',
                        '/projects/steve/db_setup.md',
                        '/projects/steve/additional_configuration.md'
                    ]
                },
            ],
            '/projects/wg-cli': [
                {
                    title: 'wg-cli',
                    collapsable: false,
                    children: [
                        '/projects/wg-cli/introduction.md',
                        '/projects/wg-cli/install.md',
                        '/projects/wg-cli/usage.md'
                    ]
                }
            ],
        }
    },

}
