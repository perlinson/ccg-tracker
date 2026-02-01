# CCG游戏追踪工具 - GitHub部署指南

## 快速部署到GitHub

### 方式1：使用GitHub网页（推荐）

1. **创建仓库**
   - 访问 https://github.com/new
   - 仓库名：`ccg-tracker`
   - 描述：`CCG游戏追踪工具网站 - 追踪近2年内将要上线的数字卡牌游戏`
   - 选择 **Public**
   - 不要勾选 "Add a README file"
   - 点击 **Create repository**

2. **推送代码**
   ```bash
   cd /root/.openclaw/workspace/ccg-tracker
   git remote add origin https://github.com/你的用户名/ccg-tracker.git
   git branch -M main
   git push -u origin main
   ```

### 方式2：使用GitHub CLI

```bash
# 安装GitHub CLI (如果未安装)
brew install gh  # macOS
# 或
npm install -g gh

# 登录
gh auth login

# 创建并推送
cd /root/.openclaw/workspace/ccg-tracker
gh repo create ccg-tracker --public --source=. --push
```

### 方式3：使用Git上传ZIP

1. 在GitHub网页创建仓库
2. 下载代码ZIP：
   ```bash
   cd /root/.openclaw/workspace/ccg-tracker
   zip -r ccg-tracker.zip .
   ```
3. 在GitHub仓库页面点击 **uploading an existing file**
4. 上传ZIP文件并提交

---

## 部署后

### 自动部署到Cloudflare Pages（可选）

已配置GitHub Actions，push到main分支后会自动部署到Cloudflare Pages：

1. 在GitHub仓库 **Settings** → **Pages** 中启用GitHub Pages
2. 或者在Cloudflare Pages中连接GitHub仓库

### 访问网站

- GitHub Pages: `https://你的用户名.github.io/ccg-tracker`
- 或自定义域名

---

## 当前状态

✅ Git已初始化
✅ 代码已提交
❌ 等待推送到GitHub
