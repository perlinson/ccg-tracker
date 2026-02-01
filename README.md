# 🎴 CCG游戏追踪器

一个追踪近2年内将要上线的CCG（数字卡牌游戏）的工具网站。

## 功能特点

- 📋 追踪即将上线的CCG游戏列表
- 🎮 每个游戏包含详细信息页
- 📺 关联YouTube视频链接
- 🔍 支持状态筛选
- 📱 响应式设计，支持移动端

## 游戏列表

当前追踪的游戏：
1. Star Wars Digital CCG - 星球大战数字卡牌游戏
2. Riftbound - 裂隙绑定
3. Disney Lorcana Digital - 迪士尼洛卡纳数字版
4. OverPower Reboot - OverPower 重启版
5. Yu-Gi-Oh! New Game - 游戏王新作
6. Slay the Spire 2 - 杀戮尖塔 2
7. Monster Train 2 - 怪物火车 2
8. Flesh and Blood Digital - 血肉之城 数字版

## 使用方法

### 本地运行

```bash
cd ccg-tracker
python3 -m http.server 8080
```

然后在浏览器中访问: http://localhost:8080

### 添加新游戏

编辑 `data.js` 文件，按照以下格式添加新游戏：

```javascript
{
    id: "game-id",
    name: "游戏英文名",
    nameCn: "游戏中文名",
    developer: "研发厂商",
    expectedRelease: "预计上线时间",
    status: "状态",
    description: "游戏介绍",
    features: ["特色1", "特色2", "特色3"],
    videos: [
        {
            title: "视频标题",
            url: "YouTube视频链接",
            thumbnail: "缩略图链接"
        }
    ],
    lastUpdated: "最后更新日期"
}
```

## 数据来源

- YouTube 官方预告/演示视频
- 行业新闻网站
- 官方公告
- 众筹平台更新

## 部署

可以将整个文件夹部署到任何静态网站托管服务：
- GitHub Pages
- Vercel
- Netlify
- 阿里云 OSS
- 腾讯云 COS

## 许可证

MIT License
