module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '林锦泽的个人博客',
      description: 'linjinze999@163.com'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'linjinze999',
    docsRepo: 'linjinze999/blog-vuepress',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '帮我改进此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Gerrit运维',
            link: '/gerrit/',
          }
        ],
        sidebar: {
          '/gerrit/': genSidebarConfig('Gerrit运维')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: true,
      children: [
        '',
		'deploy',
		'config',
		'upgrade',
		'distribute',
		'extend',
		'develop',
		'question'
      ]
    }
  ]
}