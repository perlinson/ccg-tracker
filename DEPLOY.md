# 🚀 部署到 Cloudflare Pages

## 方法1: Dashboard 上传（最简单）

1. 访问 https://dash.cloudflare.com
2. 登录 → **Pages** → **Create a project**
3. 选择 **Upload directly**
4. 上传整个文件夹（或上传site.zip并解压）
5. 点击 **Deploy site**
6. 获得链接：`https://ccg-tracker.pages.dev`

## 方法2: GitHub Actions（推荐）

### 步骤：

1. **创建GitHub仓库**
   ```bash
   cd ccg-tracker
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **推送代码到GitHub**
   ```
   # 在GitHub创建新仓库，然后：
   git remote add origin https://github.com/你的用户名/ccg-tracker.git
   git push -u origin main
   ```

3. **配置CloudflareSecrets**
   - 访问 https://dash.cloudflare.com/profile/api-tokens
   - 创建API Token（需要 Pages:Edit 权限）
   - 在GitHub仓库 Settings → Secrets 添加：
     - `CLOUDFLARE_API_TOKEN`: 你的API Token
     - `CLOUDFLARE_ACCOUNT_ID`: 账户ID（在Dashboard右上角）

4. **启用GitHub Actions**
   - 推送代码后，Actions会自动运行
   - 访问 https://github.com/你的用户名/ccg-tracker/actions 查看部署状态

### 效果：
- 每次push代码到main分支，自动部署
- 获得链接：`https://你的用户名.github.io/ccg-tracker` 或 `https://ccg-tracker.pages.dev`

## 方法3: 使用Wrangler CLI

```bash
# 安装wrangler
npm install -g wrangler

# 登录
npx wrangler login

# 部署
cd ccg-tracker
npx wrangler pages deploy . --project-name=ccg-tracker
```

## 完成后

你的CCG游戏追踪工具将可以通过互联网访问！

**示例链接格式：**
- `https://ccg-tracker.pages.dev`
- `https://你的用户名.github.io/ccg-tracker`
