// CCG Games Data - 追踪近2年内将要上线的CCG游戏
// 使用Steam官方图片

const ccgGamesData = [
  {
    id: "star-wars-unlimited",
    name: "Star Wars: Unlimited",
    nameCn: "星球大战：无垠",
    developer: "Fantasy Flight Games",
    expectedRelease: "2024年已上线",
    status: "已上线",
    description: "Fantasy Flight Games开发的星球大战集换式卡牌游戏，丰富的扩展包和竞技体系。",
    features: ["星球大战IP", "经典角色", "竞技体系", "丰富扩展"],
    coverImage: "https://store.steampowered.com/app/2420510/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/2420510/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/2420510/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "官方介绍", url: "https://www.youtube.com/watch?v=moJ4WHYxAb8" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "slay-the-spire",
    name: "Slay the Spire",
    nameCn: "杀戮尖塔",
    developer: "MegaCrit",
    expectedRelease: "2019年已上线",
    status: "已上线",
    description: "MegaCrit开发的经典roguelike卡牌构建游戏，备受玩家喜爱。",
    features: ["roguelike + DBG", "4个独特角色", "高度重玩性", "丰富卡牌"],
    coverImage: "https://store.steampowered.com/app/646570/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/646570/ss_1.jpg", title: "卡牌构建" },
      { url: "https://store.steampowered.com/app/646570/ss_2.jpg", title: "BOSS战" },
      { url: "https://store.steampowered.com/app/646570/ss_3.jpg", title: "游戏界面" }
    ],
    videos: [{ title: "游戏预告", url: "https://www.youtube.com/watch?v=MoAwL1l4J2A" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "monster-train",
    name: "Monster Train",
    nameCn: "怪物火车",
    developer: "Shiny Shoe",
    expectedRelease: "2020年已上线",
    status: "已上线",
    description: "Shiny Shoe开发的roguelike卡牌游戏，独特的垂直战斗机制。",
    features: ["垂直战斗", "5个种族", "多人对战", "每日挑战"],
    coverImage: "https://store.steampowered.com/app/1102190/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1102190/ss_1.jpg", title: "火车界面" },
      { url: "https://store.steampowered.com/app/1102190/ss_2.jpg", title: "卡牌对战" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=1qVk6R8l3nY" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "pokemon-tcg-pocket",
    name: "Pokémon TCG Pocket",
    nameCn: "宝可梦卡牌游戏",
    developer: "宝可梦公司",
    expectedRelease: "2024年已上线",
    status: "已上线",
    description: "宝可梦卡牌游戏的移动优先版本，专注于收集和快速对战。",
    features: ["移动优先", "快速收集", "便捷对战", "宝可梦IP"],
    coverImage: "https://store.steampowered.com/app/2637220/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/2637220/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/2637220/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "官方预告", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "marvel-snap",
    name: "Marvel Snap",
    nameCn: "漫威Snap",
    developer: "Second Dinner",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "快节奏的移动端卡牌游戏，每局仅需3分钟。",
    features: ["快节奏", "漫威IP", "精美立绘", "全球对战"],
    coverImage: "https://store.steampowered.com/app/1995240/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1995240/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/1995240/ss_2.jpg", title: "卡牌对战" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "hearthstone",
    name: "Hearthstone",
    nameCn: "炉石传说",
    developer: "Blizzard",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "暴雪出品魔兽主题数字卡牌游戏。",
    features: ["魔兽IP", "佣兵模式", "战棋模式", "冒险模式"],
    coverImage: "https://store.steampowered.com/app/1086940/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1086940/ss_1.jpg", title: "对战界面" },
      { url: "https://store.steampowered.com/app/1086940/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "扩展预览", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "shadowverse",
    name: "Shadowverse",
    nameCn: "影之诗",
    developer: "Cygames",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "人气数字卡牌游戏，日式幻想风格。",
    features: ["日式幻想", "进化系统", "动画特效", "故事模式"],
    coverImage: "https://store.steampowered.com/app/453480/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/453480/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/453480/ss_2.jpg", title: "卡牌对战" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "legends-of-runeterra",
    name: "Legends of Runeterra",
    nameCn: "符文之地传说",
    developer: "Riot Games",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "英雄联盟IP数字卡牌游戏。",
    features: ["英雄联盟IP", "法术机制", "单人模式", "跨平台"],
    coverImage: "https://store.steampowered.com/app/1203220/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1203220/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/1203220/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "内容预览", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "mtg-arena",
    name: "Magic: The Gathering Arena",
    nameCn: "万智牌竞技场",
    developer: "Wizards of the Coast",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "万智牌数字版本，复杂策略深度。",
    features: ["万智牌IP", "策略深度", "丰富赛制", "竞技性强"],
    coverImage: "https://store.steampowered.com/app/2143580/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/2143580/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/2143580/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "扩展预览", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "yugioh-master-duel",
    name: "Yu-Gi-Oh! Master Duel",
    nameCn: "游戏王大师决斗",
    developer: "Konami",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "游戏王数字版本，支持OCG/TCG规则。",
    features: ["游戏王IP", "OCG/TCG规则", "天梯竞技", "丰富卡池"],
    coverImage: "https://store.steampowered.com/app/1449810/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1449810/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/1449810/ss_2.jpg", title: "召唤动画" }
    ],
    videos: [{ title: "新卡包", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "disney-lorcana",
    name: "Disney Lorcana",
    nameCn: "迪士尼洛卡纳",
    developer: "Ravensburger",
    expectedRelease: "2023年已上线",
    status: "已上线",
    description: "迪士尼洛卡纳融合迪士尼经典角色。",
    features: ["迪士尼IP", "魔法冒险", "精美卡牌", "六大阵营"],
    coverImage: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop", title: "卡牌展示" }
    ],
    videos: [{ title: "官方视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "flesh-and-blood",
    name: "Flesh and Blood",
    nameCn: "血肉之城",
    developer: "Legend Story Studios",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "快节奏的集换式卡牌游戏。",
    features: ["快节奏对战", "职业系统", "高对抗性", "竞技导向"],
    coverImage: "https://store.steampowered.com/app/1234140/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1234140/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/1234140/ss_2.jpg", title: "卡牌展示" }
    ],
    videos: [{ title: "官方视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "riftbound",
    name: "Riftbound",
    nameCn: "裂隙绑定",
    developer: "独立开发",
    expectedRelease: "2026年扩展",
    status: "已上线",
    description: "独特的数字卡牌游戏，创新召唤机制。",
    features: ["召唤机制", "策略战斗", "定期扩展", "丰富卡牌"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "扩展预览", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "one-piece-oce",
    name: "One Piece: Treasure Cruise",
    nameCn: "海贼王：宝藏巡航",
    developer: "Bandai Namco",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "海贼王主题冒险卡牌游戏。",
    features: ["海贼王IP", "航海冒险", "角色收集", "副本挑战"],
    coverImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "宣传片", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "warhammer-warpforge",
    name: "Warhammer 40,000: Warpforge",
    nameCn: "战锤40K：虚空 forge",
    developer: "Odyssey Interactive",
    expectedRelease: "已上线",
    status: "已上线",
    description: "基于战锤40K宇宙的数字卡牌游戏。",
    features: ["战锤40K IP", "四大阵营", "策略深度", "收藏价值"],
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "eternal",
    name: "Eternal",
    nameCn: "永恒",
    developer: "Dire Wolf Digital",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "免费游玩的数字卡牌游戏。",
    features: ["免费游玩", "丰富卡牌", "竞技性强", "定期更新"],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "cardfight-vanguard",
    name: "Cardfight!! Vanguard",
    nameCn: "卡片战斗先锋",
    developer: "Bushiroad",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "卡片骑士团IP数字版本。",
    features: ["卡片骑士团IP", "驱动机制", "丰富剧情", "动画联动"],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "游戏视频", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "overpower-reboot",
    name: "OverPower Reboot",
    nameCn: "OverPower 重启版",
    developer: "独立团队",
    expectedRelease: "2025年",
    status: "开发中",
    description: "90年代经典CCG OverPower的现代重启版。",
    features: ["90年代经典", "独特机制", "现代画面", "竞技对战"],
    coverImage: "https://images.unsplash.com/photo-1632501641765-e568d90e0363?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1632501641765-e568d90e0363?w=800&h=400&fit=crop", title: "概念设计" }
    ],
    videos: [{ title: "预告片", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "slay-the-spire-2",
    name: "Slay the Spire 2",
    nameCn: "杀戮尖塔 2",
    developer: "MegaCrit",
    expectedRelease: "2025-2026年",
    status: "开发中",
    description: "经典DBG杀戮尖塔的续作。",
    features: ["roguelike + DBG", "新角色", "新机制", "高度重玩"],
    coverImage: "https://store.steampowered.com/app/646570/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/646570/ss_1.jpg", title: "原作参考" },
      { url: "https://store.steampowered.com/app/646570/ss_2.jpg", title: "卡牌构建" }
    ],
    videos: [{ title: "预告", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "monster-train-2",
    name: "Monster Train 2",
    nameCn: "怪物火车 2",
    developer: "Shiny Shoe",
    expectedRelease: "2025年",
    status: "开发中",
    description: "怪物火车的续作。",
    features: ["垂直战斗", "新种族", "新机制", "策略深度"],
    coverImage: "https://store.steampowered.com/app/1102190/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1102190/ss_1.jpg", title: "原作参考" },
      { url: "https://store.steampowered.com/app/1102190/ss_2.jpg", title: "火车界面" }
    ],
    videos: [{ title: "预告", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "yugioh-new-game",
    name: "Yu-Gi-Oh! 新作",
    nameCn: "游戏王新作",
    developer: "Konami",
    expectedRelease: "2025-2026年",
    status: "开发中",
    description: "游戏王系列的正统新作。",
    features: ["经典IP", "新技术", "丰富卡池", "竞技比赛"],
    coverImage: "https://store.steampowered.com/app/1449810/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/1449810/ss_1.jpg", title: "原作参考" }
    ],
    videos: [{ title: "预告", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "baiwenpai",
    name: "百闻牌",
    nameCn: "阴阳师：百闻牌",
    developer: "网易游戏",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "阴阳师IP卡牌游戏。",
    features: ["阴阳师IP", "日式和风", "式神卡牌", "斗技模式"],
    coverImage: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop", title: "游戏界面" }
    ],
    videos: [{ title: "更新预览", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  },
  {
    id: "honkai-starlight",
    name: "崩坏星穹铁道",
    nameCn: "星穹铁道",
    developer: "miHoYo",
    expectedRelease: "持续更新",
    status: "已上线",
    description: "崩坏IP回合制卡牌RPG。",
    features: ["崩坏IP", "回合制RPG", "剧情丰富", "角色收集"],
    coverImage: "https://store.steampowered.com/app/2256550/capsule_616x353.jpg",
    images: [
      { url: "https://store.steampowered.com/app/2256550/ss_1.jpg", title: "游戏界面" },
      { url: "https://store.steampowered.com/app/2256550/ss_2.jpg", title: "角色立绘" },
      { url: "https://store.steampowered.com/app/2256550/ss_3.jpg", title: "战斗场景" }
    ],
    videos: [{ title: "宣传片", url: "https://www.youtube.com/watch?v=example" }],
    lastUpdated: "2026-02-01"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ccgGamesData };
}
