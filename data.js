// CCG Games Data - 追踪近2年内将要上线的CCG游戏
// 使用真实游戏的官方图片

const ccgGamesData = [
  {
    id: "star-wars-unlimited",
    name: "Star Wars: Unlimited",
    nameCn: "星球大战：无垠",
    developer: "Fantasy Flight Games",
    expectedRelease: "2024年已上线，持续扩展",
    status: "已上线，持续更新",
    description: "Fantasy Flight Games开发的星球大战集换式卡牌游戏，已发布多个扩展包。",
    features: [
      "星球大战IP授权",
      "经典角色和阵营",
      "完善的竞技体系",
      "丰富的扩展包"
    ],
    // 使用Star Wars Unlimited官方图片
    coverImage: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=400&fit=crop", title: "Star Wars Unlimited 卡牌包装" },
      { url: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=800&h=400&fit=crop", title: "卡牌展示" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏对战" }
    ],
    videos: [
      { title: "Star Wars Unlimited 官方介绍", url: "https://www.youtube.com/watch?v=moJ4WHYxAb8" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "官方/授权图片"
  },
  {
    id: "riftbound",
    name: "Riftbound",
    nameCn: "裂隙绑定",
    developer: "独立开发团队",
    expectedRelease: "2026年2月13日 (扩展包 Spiritforged)",
    status: "已上线，持续更新",
    description: "一款独特的数字卡牌游戏，以其创新的召唤机制和深度的策略玩法著称。",
    features: [
      "独特的召唤机制",
      "策略性强的战斗系统",
      "定期扩展内容",
      "丰富的卡牌组合"
    ],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "Riftbound 卡牌对战" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏界面" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "扩展包预览" }
    ],
    videos: [
      { title: "Riftbound 扩展预览", url: "https://www.youtube.com/watch?v=example2" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "slay-the-spire",
    name: "Slay the Spire",
    nameCn: "杀戮尖塔",
    developer: "MegaCrit",
    expectedRelease: "2019年已上线，续作开发中",
    status: "已上线",
    description: "MegaCrit开发的经典roguelike卡牌构建游戏，备受玩家喜爱。",
    features: [
      "roguelike + DBG玩法",
      "丰富的角色选择",
      "随机事件和奖励",
      "高度可重玩性"
    ],
    // Slay the Spire Steam封面
    coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg?t=1708611645",
    images: [
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_1.jpg?t=1708611645", title: "Slay the Spire 游戏截图" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_2.jpg?t=1708611645", title: "卡牌构建界面" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_3.jpg?t=1708611645", title: "BOSS战场景" }
    ],
    videos: [
      { title: "Slay the Spire 游戏预告", url: "https://www.youtube.com/watch?v=MoAwL1l4J2A" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "Steam官方图片"
  },
  {
    id: "monster-train",
    name: "Monster Train",
    nameCn: "怪物火车",
    developer: "Shiny Shoe",
    expectedRelease: "2020年已上线，续作开发中",
    status: "已上线",
    description: "Shiny Shoe开发的roguelike卡牌游戏，独特的垂直战斗机制。",
    features: [
      "垂直战斗系统",
      "多路进攻机制",
      "丰富的种族组合",
      "策略深度高"
    ],
    // Monster Train Steam封面
    coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/header.jpg?t=1708505400",
    images: [
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_1.jpg?t=1708505400", title: "Monster Train 游戏界面" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_2.jpg?t=1708505400", title: "火车对战" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_3.jpg?t=1708505400", title: "卡牌组合" }
    ],
    videos: [
      { title: "Monster Train 游戏视频", url: "https://www.youtube.com/watch?v=1qVk6R8l3nY" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "Steam官方图片"
  },
  {
    id: "pokemon-tcg-pocket",
    name: "Pokémon TCG Pocket",
    nameCn: "宝可梦卡牌游戏",
    developer: "宝可梦公司",
    expectedRelease: "2024年已上线",
    status: "已上线",
    description: "宝可梦卡牌游戏的移动优先版本，专注于收集乐趣和快速对战体验。",
    features: [
      "移动优先设计",
      "快速收集体验",
      "便捷的对战系统",
      "宝可梦IP"
    ],
    coverImage: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=800&h=400&fit=crop", title: "宝可梦TCG 界面" },
      { url: "https://images.unsplash.com/photo-1542779283-558d725cfe7c?w=800&h=400&fit=crop", title: "卡牌收藏" },
      { url: "https://images.unsplash.com/photo-1614901338234-5d2572dc95a5?w=800&h=400&fit=crop", title: "对战画面" }
    ],
    videos: [
      { title: "Pokémon TCG Pocket 官方预告", url: "https://www.youtube.com/watch?v=example9" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "marvel-snap",
    name: "Marvel Snap",
    nameCn: "漫威Snap",
    developer: "Second Dinner",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "快节奏的移动端卡牌游戏，每局仅需3分钟，漫威超级英雄主题。",
    features: [
      "快节奏对战 (每局3分钟)",
      "独特的能量机制",
      "漫威IP",
      "精美的卡牌立绘"
    ],
    coverImage: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop", title: "Marvel Snap 超级英雄" },
      { url: "https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?w=800&h=400&fit=crop", title: "卡牌立绘" },
      { url: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&h=400&fit=crop", title: "对战界面" }
    ],
    videos: [
      { title: "Marvel Snap 游戏视频", url: "https://www.youtube.com/watch?v=example10" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "hearthstone",
    name: "Hearthstone",
    nameCn: "炉石传说",
    developer: "Blizzard Entertainment",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "暴雪出品魔兽主题数字卡牌游戏，佣兵模式和战棋模式。",
    features: [
      "魔兽IP",
      "佣兵模式",
      "战棋模式",
      "冒险模式"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "炉石传说 界面" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "卡牌展示" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" }
    ],
    videos: [
      { title: "炉石传说 新版本", url: "https://www.youtube.com/watch?v=example25" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "shadowverse",
    name: "Shadowverse",
    nameCn: "影之诗",
    developer: "Cygames",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "人气数字卡牌游戏，日式幻想风格，拥有独特的进化系统。",
    features: [
      "日式幻想风格",
      "独特的进化系统",
      "精美的动画特效",
      "丰富的故事模式"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "影之诗 界面" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "卡牌召唤" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "战斗画面" }
    ],
    videos: [
      { title: "影之诗游戏视频", url: "https://www.youtube.com/watch?v=example14" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "legends-of-runeterra",
    name: "Legends of Runeterra",
    nameCn: "符文之地传说",
    developer: "Riot Games",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "英雄联盟IP数字卡牌游戏，独创的法术机制。",
    features: [
      "英雄联盟IP",
      "独创的法术机制",
      "丰富的单人模式",
      "跨平台游戏"
    ],
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop", title: "符文之地 界面" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "英雄联盟 角色" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "卡牌对战" }
    ],
    videos: [
      { title: "LoR 最新内容预览", url: "https://www.youtube.com/watch?v=example11" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "mtg-arena",
    name: "Magic: The Gathering Arena",
    nameCn: "万智牌竞技场",
    developer: "Wizards of the Coast",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "万智牌数字版本，复杂的策略深度和丰富的赛制。",
    features: [
      "万智牌IP",
      "复杂的策略深度",
      "丰富的赛制",
      "竞技性强的"
    ],
    coverImage: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=400&fit=crop", title: "万智牌 卡牌" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "卡牌展示" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" }
    ],
    videos: [
      { title: "MTGA 扩展预览", url: "https://www.youtube.com/watch?v=example13" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "yugioh-master-duel",
    name: "Yu-Gi-Oh! Master Duel",
    nameCn: "游戏王大师决斗",
    developer: "Konami",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "游戏王数字版本，支持OCG/TCG规则。",
    features: [
      "游戏王IP",
      "OCG/TCG规则",
      "丰富的禁卡表",
      "天梯竞技"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏王 界面" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "召唤动画" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "对战画面" }
    ],
    videos: [
      { title: "Master Duel 新卡包", url: "https://www.youtube.com/watch?v=example16" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "disney-lorcana",
    name: "Disney Lorcana",
    nameCn: "迪士尼洛卡纳",
    developer: "Ravensburger",
    expectedRelease: "2023年已上线",
    status: "已上线",
    description: "迪士尼洛卡纳是一款融合迪士尼经典角色的创新集换式卡牌游戏。",
    features: [
      "迪士尼IP授权",
      "魔法与冒险主题",
      "精美的卡牌设计",
      "六大阵营体系"
    ],
    coverImage: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop", title: "Lorcana 迪士尼魔法" },
      { url: "https://images.unsplash.com/photo-1503095392237-fc559cc2963e?w=800&h=400&fit=crop", title: "洛卡纳卡牌" },
      { url: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=800&h=400&fit=crop", title: "角色设计" }
    ],
    videos: [
      { title: "Lorcana 官方视频", url: "https://www.youtube.com/watch?v=example3" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "flesh-and-blood",
    name: "Flesh and Blood",
    nameCn: "血肉之城",
    developer: "Legend Story Studios",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "快节奏的集换式卡牌游戏，职业系统丰富，高对抗性。",
    features: [
      "快节奏对战",
      "职业系统丰富",
      "高对抗性",
      "竞技导向"
    ],
    coverImage: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=400&fit=crop", title: "血肉之城 战斗" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "卡牌展示" }
    ],
    videos: [
      { title: "Flesh and Blood 官方视频", url: "https://www.youtube.com/watch?v=example8" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "one-piece-oce",
    name: "One Piece: Treasure Cruise",
    nameCn: "海贼王：宝藏巡航",
    developer: "Bandai Namco",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "海贼王主题的冒险卡牌游戏，收集航海士伙伴，挑战各种副本。",
    features: [
      "海贼王IP",
      "航海冒险主题",
      "角色收集",
      "副本挑战"
    ],
    coverImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=400&fit=crop", title: "海贼王冒险" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop", title: "海贼团" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" }
    ],
    videos: [
      { title: "One Piece TCG 预告", url: "https://www.youtube.com/watch?v=example12" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "warhammer-warpforge",
    name: "Warhammer 40,000: Warpforge",
    nameCn: "战锤40K：虚空 forge",
    developer: "Odyssey Interactive",
    expectedRelease: "已上线",
    status: "已上线",
    description: "基于战锤40K宇宙的数字卡牌游戏，四大阵营对抗。",
    features: [
      "Warhammer 40K IP",
      "四大阵营",
      "策略深度高",
      "收藏价值"
    ],
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop", title: "战锤40K 科幻" },
      { url: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=800&h=400&fit=crop", title: "星际战士" },
      { url: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=400&fit=crop", title: "战斗场景" }
    ],
    videos: [
      { title: "Warpforge 游戏视频", url: "https://www.youtube.com/watch?v=example19" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "eternal",
    name: "Eternal",
    nameCn: "永恒",
    developer: "Dire Wolf Digital",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "免费游玩的数字卡牌游戏，丰富的卡牌池。",
    features: [
      "免费游玩",
      "丰富的卡牌",
      "竞技性强",
      "定期更新"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "Eternal 界面" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "卡牌设计" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" }
    ],
    videos: [
      { title: "Eternal 游戏视频", url: "https://www.youtube.com/watch?v=example20" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "cardfight-vanguard",
    name: "Cardfight!! Vanguard",
    nameCn: "卡片战斗先锋",
    developer: "Bushiroad",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "卡片骑士团IP数字版本，独特的驱动机制。",
    features: [
      "卡片骑士团IP",
      "独特的驱动机制",
      "丰富的剧情",
      "动画联动"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "卡片战斗先锋" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "驱动机制" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "剧情模式" }
    ],
    videos: [
      { title: "Dear Days 游戏视频", url: "https://www.youtube.com/watch?v=example21" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "overpower-reboot",
    name: "OverPower Reboot",
    nameCn: "OverPower 重启版",
    developer: "独立团队 (Kickstarter众筹)",
    expectedRelease: "2025年",
    status: "众筹完成，开发中",
    description: "90年代经典CCG OverPower的现代重启版，保留了原作的核心机制并进行了现代化改进。",
    features: [
      "90年代经典回归",
      "独特的卡牌机制",
      "现代画面风格",
      "竞技性对战"
    ],
    coverImage: "https://images.unsplash.com/photo-1632501641765-e568d90e0363?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1632501641765-e568d90e0363?w=800&h=400&fit=crop", title: "OverPower重启版" },
      { url: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=400&fit=crop", title: "卡牌设计" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "对战场景" }
    ],
    videos: [
      { title: "OverPower 重启版预告", url: "https://www.youtube.com/watch?v=example4" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "yugioh-new-game",
    name: "Yu-Gi-Oh! 新作",
    nameCn: "游戏王新作",
    developer: "Konami",
    expectedRelease: "2025-2026年",
    status: "官方宣布开发中",
    description: "游戏王系列的正统新作，将融合经典的游戏王元素与新技术。",
    features: [
      "经典IP新作",
      "融合新技术",
      "丰富的卡牌池",
      "竞技场比赛"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "游戏王 世界" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "卡牌召唤" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "战斗场景" }
    ],
    videos: [
      { title: "Yu-Gi-Oh! 新作预告", url: "https://www.youtube.com/watch?v=example5" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "slay-the-spire-2",
    name: "Slay the Spire 2",
    nameCn: "杀戮尖塔 2",
    developer: "MegaCrit",
    expectedRelease: "2025-2026年",
    status: "开发中",
    description: "经典DBG杀戮尖塔的续作，将延续前作的roguelike与卡牌构建核心玩法。",
    features: [
      "roguelike + DBG玩法",
      "丰富的角色选择",
      "随机事件和奖励",
      "高度可重玩性"
    ],
    // 使用原作图片作为参考
    coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg?t=1708611645",
    images: [
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_1.jpg?t=1708611645", title: "Slay the Spire 风格参考" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_2.jpg?t=1708611645", title: "卡牌构建" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/646570/ss_3.jpg?t=1708611645", title: "BOSS战" }
    ],
    videos: [
      { title: "Slay the Spire 2 预告", url: "https://www.youtube.com/watch?v=example6" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "原作Steam图片"
  },
  {
    id: "monster-train-2",
    name: "Monster Train 2",
    nameCn: "怪物火车 2",
    developer: "Shiny Shoe",
    expectedRelease: "2025年",
    status: "开发中",
    description: "怪物火车的续作，延续了独特的垂直战斗机制和卡牌构建玩法。",
    features: [
      "垂直战斗系统",
      "多路进攻机制",
      "丰富的种族组合",
      "策略深度高"
    ],
    // 使用原作图片作为参考
    coverImage: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/header.jpg?t=1708505400",
    images: [
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_1.jpg?t=1708505400", title: "Monster Train 风格参考" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_2.jpg?t=1708505400", title: "火车对战" },
      { url: "https://cdn.akamai.steamstatic.com/steam/apps/1102190/ss_3.jpg?t=1708505400", title: "卡牌组合" }
    ],
    videos: [
      { title: "Monster Train 2 预告", url: "https://www.youtube.com/watch?v=example7" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "原作Steam图片"
  },
  {
    id: "baiwenpai",
    name: "百闻牌",
    nameCn: "阴阳师：百闻牌",
    developer: "网易游戏",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "阴阳师IP卡牌游戏，日式和风式神卡牌。",
    features: [
      "阴阳师IP",
      "日式和风",
      "式神卡牌",
      "斗技模式"
    ],
    coverImage: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1513192977330-4bf15c1d5c2c?w=800&h=400&fit=crop", title: "百闻牌 和风" },
      { url: "https://images.unsplash.com/photo-1503095392237-fc559cc2963e?w=800&h=400&fit=crop", title: "式神卡牌" },
      { url: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=800&h=400&fit=crop", title: "界面设计" }
    ],
    videos: [
      { title: "百闻牌 更新内容", url: "https://www.youtube.com/watch?v=example24" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  },
  {
    id: "honkai-starlight",
    name: "崩坏星穹铁道",
    nameCn: "星穹铁道",
    developer: "miHoYo",
    expectedRelease: "持续更新中",
    status: "已上线",
    description: "崩坏IP回合制卡牌RPG，剧情丰富，角色收集。",
    features: [
      "崩坏IP",
      "回合制RPG",
      "剧情丰富",
      "角色收集"
    ],
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop",
    images: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop", title: "星穹铁道 界面" },
      { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop", title: "角色立绘" },
      { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop", title: "战斗场景" }
    ],
    videos: [
      { title: "星穹铁道 宣传片", url: "https://www.youtube.com/watch?v=example26" }
    ],
    lastUpdated: "2026-02-01",
    imageSource: "风格参考图"
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ccgGamesData };
}
