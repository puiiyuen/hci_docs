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
        'courses',
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
    repoLabel: 'GitHub'
  },
  plugins: ['vuepress-plugin-table-of-contents']
}
