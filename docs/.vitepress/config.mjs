import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jobs to be Done',
  description: 'JTBD 商业创新实验室 - 从洞察到战略的完整方法论',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'JTBD, Jobs to be Done, 待办任务, 用户洞察, 战略咨询, 产品创新, 商业创新' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '方法论', link: '/methodology/' },
      { text: '案例研究', link: '/cases/' },
      { text: '洞察文章', link: '/insights/' },
      { text: '关于我', link: '/about/' },
    ],

    sidebar: {
      '/methodology/': [
        {
          text: '基础文章',
          items: [
            { text: '方法论概述', link: '/methodology/' },
            { text: '缘起：我和待办任务的不期而遇', link: '/methodology/origin' },
            { text: '什么是待办任务', link: '/methodology/what-is-jtbd' },
          ]
        },
        {
          text: '方法论框架',
          items: [
            { text: 'Layer 1: 客户洞察 - JTBD原点', link: '/methodology/jtbd-core' },
            { text: 'Layer 2: 产品市场契合', link: '/methodology/pmf' },
            { text: 'Layer 3: 战略设计', link: '/methodology/strategy' },
            { text: 'Layer 4: 执行落地', link: '/methodology/execution' },
          ]
        }
      ],
      '/cases/': [
        {
          text: '案例研究',
          items: [
            { text: '案例总览', link: '/cases/' },
            { text: '客户体验驱动增长：轻奢女装品牌案例', link: '/cases/case-01' },
          ]
        }
      ],
      '/insights/': [
        {
          text: '洞察文章',
          items: [
            { text: '全部文章', link: '/insights/' },
            { text: 'JTBD视角：京东外卖的破局之匙', link: '/insights/jd-food-delivery-jtbd' },
            { text: 'Bob Moesta 谈待办任务（上）', link: '/insights/bob-moesta-jtbd-part-1' },
            { text: 'Bob Moesta 谈待办任务（下）', link: '/insights/bob-moesta-jtbd-part-2' },
            { text: '双语文摘 5：好时的突破性增长', link: '/insights/bilingual-05-hersheys-breakthrough-growth' },
            { text: '双语文摘 6：领先企业突破增长的秘密', link: '/insights/bilingual-06-leading-companies-growth' },
            { text: '双语文摘 7：如何挖掘待办任务', link: '/insights/bilingual-07-discovering-jobs' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' },
    ],

    footer: {
      message: '基于 JTBD 方法论的商业创新咨询',
      copyright: '© 2026 Jobs to be Done 商业创新实验室'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加自定义 markdown 插件
    }
  },

  sitemap: {
    hostname: 'https://jobstobedone.cn'
  }
})
