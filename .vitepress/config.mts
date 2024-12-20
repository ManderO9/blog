import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "easynet",
  description: ".Net for professionals",
  sitemap: {
    hostname: 'https://easynet.rf.gd'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DistinctBy', link: '/pages/efcore/distinct-by' },
      { text: 'Run Before Main()', link: '/pages/csharp/run-code-before-main' },
    ],

    sidebar: [
      {
        text: 'Tips',
        items: [
          { text: 'EFCore DistinctBy', link: '/pages/efcore/distinct-by' },      
          { text: 'Run Code Before Main()', link: '/pages/csharp/run-code-before-main' },      
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mandero9' }
    ]
  }
})
