import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "easynet",
  description: ".Net for professionals",
  base: '/blog/',
  sitemap: {
    hostname: 'https://mandero9.github.io/blog/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web Scraping', link: '/pages/scraping/read-html-table/index.html' },
      { text: 'Git', link: '/pages/git/set-local-user' },
      { text: 'Json', link: '/pages/csharp/dynamically-read-json' },
      { text: 'Youtube', link: '/pages/youtube/download-youtube-clip' },
    ],

    sidebar: [
      {
        text: 'Tips',
        items: [
          { text: 'EFCore DistinctBy', link: '/pages/efcore/distinct-by' },
          { text: 'Run Code Before Main()', link: '/pages/csharp/run-code-before-main' },
          { text: 'Git: Set User And Email For Specific Repo', link: '/pages/git/set-local-user' },
          { text: 'Dynamically Deserialize Json', link: '/pages/csharp/dynamically-read-json' },
          { text: 'Download Youtube Clip', link: '/pages/youtube/download-youtube-clip' },    
          { text: 'Scrape HTML Table To Json', link: '/pages/scraping/read-html-table/index.html' },    
        ]
      }, 
      {
        text: 'General',
        items: [
          { text: 'Delete Website Data', link: '/pages/broad/delete-website-data/index.html' },    
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mandero9' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hossem-chetoui' }
    ]
  }
})
