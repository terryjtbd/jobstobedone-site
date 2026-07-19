# Jobs to be Done 商业创新实验室

基于 VitePress 构建的静态网站，托管于 GitHub Pages。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 部署

推送到 GitHub 后，GitHub Actions 会自动部署到 GitHub Pages。

## 域名

- 主域名：https://jobstobedone.cn
- GitHub Pages 默认域名：https://yourusername.github.io/jobstobedone-site

## 内容结构

```
docs/
├── index.md              # 首页
├── methodology/          # 方法论
│   ├── index.md
│   ├── jtbd-core.md
│   ├── pmf.md
│   ├── strategy.md
│   └── execution.md
├── cases/                # 案例研究
│   ├── index.md
│   ├── case-01.md
│   └── case-02.md
├── insights/             # 洞察文章
│   └── index.md
├── about/                # 关于我
│   └── index.md
└── .vitepress/           # 配置
    ├── config.mjs
    └── theme/
        └── custom.css
```

## 自定义

- 修改 `docs/.vitepress/config.mjs` 调整导航和侧边栏
- 修改 `docs/.vitepress/theme/custom.css` 调整样式
- 在 `docs/` 下新建 `.md` 文件添加内容
