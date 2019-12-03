module.exports = {
  title: 'Course Registration Helper',
  description: 'Course Registration Helper Documents',
  base:'/docs/',
  // base:'/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/user-guide/'},
      { text: 'Dev Guide', link: '/dev-guide/' }
    ],
    sidebar: {
      '/dev-guide/': [
        '',
        'user',
        'courses',
        'status'
      ],
      '/user-guide/':[
        '',
        'account',
        'courses'
      ],
      '/test/':[
        '',
        'test'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/puiiyuen/course-registration-helper-backend',
    repoLabel: 'GitHub'
  },
  plugins: ['vuepress-plugin-table-of-contents']
}
