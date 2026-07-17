# new-api（定制版）

本仓库 clone 自上游 [QuantumNous/new-api](https://github.com/QuantumNous/new-api)。

## 定制修改记录

- 用户统计：排行榜支持「Token 消耗 / 调用次数 / 费用消耗」切换
- 主页：移除「文档」按钮
- 页脚：内容居中 + 支持 Markdown 超链接（可配置备案信息）
- 系统名称动态化（默认 "Yunlong API"），不再硬编码品牌名
- 页脚：移除默认页脚的品牌区
- 界面语言：仅中文（移除多语言切换与多语言资源）
- 品牌图标：替换为 Agently 图标（`logo.png` + `favicon.ico` + `logo.svg` 源，蓝→紫渐变 + 字母 A + 火花，180×180）
- CI：新增 Docker 镜像发布 workflow（`.github/workflows/docker-publish.yml`，手动触发，amd64+arm64 多架构推送到 Docker Hub `yunlong1989/new-api`）
- 上游同步（2026-07-18）：合并 `QuantumNous/new-api` main 分支 169 个提交（自 2026-06-22 上次同步起，含 i18n key、定价说明、dashboard 与重试文案等更新），保留中文-only / 页脚居中 / 主页改版 / 定价编辑 / 动态系统名等全部本地定制
