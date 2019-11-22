module.exports = {
  title: 'Course Registration Helper',
  description: 'Course Registration Helper Documents',
  base:'/docs/',
  // base:'/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dev Guide', link: '/dev-guide/' },
      { text: 'User Guide', link: '/user-guide/'}
    ],
    sidebar: {
      '/dev-guide/': [
        '',
        // 'sign-up',
        // 'login',
        // 'setting',
        'user',
        'status'
      ],
      '/test/':[
        '',
        'test'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/puiiyuen/course-registration-helper-backend',
    repoLabel: 'GitHub',
    docsRepo: 'https://github.com/puiiyuen/hci_docs',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Edit pages'
  },
  plugins: [
    'vuepress-plugin-table-of-contents'
  // '@vuepress/last-updated',
  // {
  //   transformer: (timestamp, lang) => {
  //     // 不要忘了安装 moment
  //     const moment = require('moment')
  //     moment.locale(lang)
  //     return moment(timestamp).fromNow()
  //   }
  // }
  ]
}
