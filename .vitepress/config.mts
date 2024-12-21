import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "easynet",
  description: ".Net for professionals",
  base: '/blog/',
  sitemap: {
    hostname: 'https://mandero9.github.io/blog'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DistinctBy', link: '/pages/efcore/distinct-by' },
      { text: 'Run Before Main()', link: '/pages/csharp/run-code-before-main' },
      { text: 'Git', link: '/pages/git/set-local-user' },
    ],

    sidebar: [
      {
        text: 'Tips',
        items: [
          { text: 'EFCore DistinctBy', link: '/pages/efcore/distinct-by' },      
          { text: 'Run Code Before Main()', link: '/pages/csharp/run-code-before-main' },   
          { text: 'Git: Set User And Email For Specific Repo', link: '/pages/git/set-local-user' },   
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mandero9' }
    ]
  }
})
