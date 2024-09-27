import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "easynet",
  description: ".Net for professionals",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DistinctBy', link: '/pages/efcore/distinct-by' },      
    ],

    sidebar: [
      {
        text: 'Tips',
        items: [
          { text: 'EFCore DistinctBy', link: '/pages/efcore/distinct-by' },      
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mandero9' }
    ]
  }
})
