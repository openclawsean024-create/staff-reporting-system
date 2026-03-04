# 📑 專案戰情室 (Project Management Dashboard)

> 最後更新：2026-03-04 20:49 (Asia/Taipei)

---

## 1. 專案狀態總覽 (Current Status)

| 項目 | 數值 |
|------|------|
| **專案名稱** | OpenClaw Workspace |
| **當前進度** | ████████████░░░░░░░░░ 60% |
| **核心模型** | MiniMax-M2.5 (主要) / MiniMax-M2.1 (備用) |
| **最後活躍時間** | 2026-03-04 20:49 |
| **Context 使用** | 102k / 200k (51%) |
| **今日總 Tokens** | ~726k 輸入 / 2.8k 輸出 |

### 📊 戰情室指標

| 指標 | 數值 | 狀態 |
|------|------|------|
| 專案總數 | 24 個目錄 | 🟢 |
| 已上線網站 | 9 個 | 🟢 |
| 已安裝 Skills | 52+ 個 | 🟢 |
| Context 檔案 | 82 個 .md | 🟡 中等 |
| 每日 Cron Jobs | 7 個 | 🟡 需優化 |

---

## 2. 功能開發路徑 (Feature Roadmap)

### ✅ 已實作功能 (Completed)

| 功能 | 說明 | 狀態 |
|------|------|------|
| **文字轉語音 MVP** | 文字轉語音服務，v1.1 (5000字限制/進度條/歷史記錄) | ✅ 上線 |
| **有聲書轉換器** | 電子書轉有聲書，v3.9 | ✅ 上線 |
| **名片王系統** | 名片管理系統 (Vercel 部署) | ✅ 上線 |
| **駐點人員回報系統** | 人員報到管理系統 | ✅ 上線 |
| **Trade 回測系統** | 交易策略回測工具 | ✅ 上線 |
| **會議記錄系統** | 會議錄音與筆記系統 | ✅ 上線 |
| **市場調查工具** | 市場研究資料收集 | ✅ 上線 |
| **AI 簡報產生器** | AI 驅動簡報生成 | ✅ 上線 |
| **SUI 區塊鏈部落格** | 區塊鏈部落格系統 | ✅ 上線 |
| **YouTube 趨勢收集器** | 每日 YouTube 趨勢數據收集 | ✅ 運作中 |
| **OpenClaw 新聞收集器** | 自動化新聞監控 | ✅ 運作中 |
| **泡腳追蹤系統** | 每日健康習慣追蹤 | ✅ 運作中 |
| **Token 儀表板** | Token 使用量視覺化 | ✅ 新增 |
| **專案戰情室** | 專案管理儀表板 | ✅ 新增 |

### 🚧 當前開發中 (In Progress)

| 項目 | 描述 | 進度 |
|------|------|------|
| **MP3 下載功能** | 文字轉語音 MVP 的下載功能 | 🔧 籌備中 (需後端) |
| **名片匯入功能** | 名片王的 CSV/QRCode 匯入 | 📋 規劃中 |
| **更多音色選項** | 有聲書轉換器的聲音選擇 | 📋 規劃中 |
| **MiniMax API 整合** | 整合 MiniMax 圖片/影片生成 API | 🔄 研究中 |
| **Google Drive 上傳** | 雲端備份與同步功能 | 🔄 研究中 |

### 🚀 預計新增功能 (Roadmap)

| 功能 | 拆分步驟 | 優先級 |
|------|---------|--------|
| **自動化測試框架** | 1. 建立 Playwright 測試腳本<br>2. 整合 CI/CD 流程<br>3. 撰寫單元測試 | 🟡 中 |
| **數據分析儀表板** | 1. 設計儀表板 UI<br>2. 串接數據源<br>3. 建立視覺化圖表 | 🟡 中 |
| **多語言支援** | 1. i18n 架構建立<br>2. 翻譯檔案製作<br>3. 語言切換器 | 🟢 低 |
| **Stripe 支付整合** | 1. Stripe API 技能安裝<br>2. 測試支付流程<br>3. 商家帳號設定 | 🟢 低 |
| **LINE Bot 整合** | 1. LINE Developer 帳號<br>2. Webhook 設定<br>3. 訊息回覆邏輯 | 🟢 低 |

---

## 3. 系統 Context 目錄 (Context Inventory)

### 📁 核心檔案 (每次載入)

| 檔案路徑 | 大小 (Bytes) | 預估 Tokens | 功能描述 |
|----------|--------------|-------------|---------|
| `AGENTS.md` | 7,869 | ~2,000 | AI 行為規範與工作流程 |
| `SOUL.md` | 1,673 | ~425 | AI 人格與特質定義 |
| `USER.md` | 477 | ~125 | 使用者資訊與偏好 |
| `TOOLS.md` | 860 | ~225 | 本地工具與設定 |
| `IDENTITY.md` | 636 | ~150 | AI 身份認同 |
| `HEARTBEAT.md` | 68 | ~17 | 心跳檢查清單 |
| `BOOTSTRAP.md` | 1,470 | ~375 | 初始化腳本 (可移除) |
| **小計** | **13,053** | **~3,317** | |

### 📂 Memory 目錄 (按需載入)

| 檔案路徑 | 大小 | 預估 Tokens | 功能描述 |
|----------|------|-------------|---------|
| `memory/2026-03-04.md` | 471 B | ~120 | 今日待辦事項 |
| `memory/2026-03-03.md` | 3,575 B | ~900 | 昨日開發日誌 |
| `memory/2026-03-02.md` | 1,534 B | ~375 | 前日記錄 |
| `memory/2026-03-01.md` | 1,760 B | ~450 | 本週初記錄 |
| `memory/market-research.md` | 963 B | ~240 | 市場研究資料 |
| **小計** | **8,303** | **~2,085** | |

### 📂 Skills 目錄 (按需載入)

| 檔案路徑 | 大小 | 預估 Tokens | 功能描述 |
|----------|------|-------------|---------|
| `skills/stripe/skill.md` | 26,085 | ~6,500 | Stripe 支付整合 |
| `skills/afrexai-presentation-mastery/SKILL.md` | 22,233 | ~5,500 | 簡報大師技能 |
| `skills/prezentit/SKILL.md` | 21,918 | ~5,500 | Prezentit 簡報 |
| `skills/agentmail/references/EXAMPLES.md` | 14,140 | ~3,500 | Email API範例 |
| `skills/clawscan/SKILL.md` | 14,342 | ~3,500 | 安全掃描技能 |
| `skills/skill-vetting/ARCHITECTURE.md` | 11,065 | ~2,750 | 技能審核架構 |
| `skills/google-slides/SKILL.md` | 12,954 | ~3,250 | Google Slides 整合 |
| `skills/soul-guardian/README.md` | 8,133 | ~2,025 | 檔案完整性監控 |
| **Top 8 小計** | **130,870** | **~32,525** | |
| **其他 Skills** | ~100,000 | ~25,000 | 其他 44+ 技能 |
| **Skills 總計** | ~230,000 | ~57,500 | |

### 📂 專案目錄 (不載入 Context)

| 目錄 | 主要檔案 | 說明 |
|------|---------|------|
| `text-to-speech-mvp/` | - | 文字轉語音服務 |
| `ebook-to-audiobook/` | PROJECT.md | 有聲書轉換器 |
| `business-card-manager/` | SETUP.md | 名片管理系統 |
| `sui-blog/` | README.md | 區塊鏈部落格 |
| `youtube-trending-collector/` | README.md | YouTube 趨勢收集 |
| `openclaw-news-collector/` | README.md | 新聞收集器 |
| `automation/` | 24-7-system.md | 自動化腳本 |

---

## 4. 運行成本紀錄 (Execution Log)

### 過去 5 天每日活動量

| 日期 | LLM 模型 | 活動描述 | 預估消耗 (k Tokens) |
|------|----------|---------|-------------------|
| 2026-03-04 | MiniMax-M2.5 | 主會話互動 + Cron Jobs | ~726k (當前累積) |
| 2026-03-04 | MiniMax-M2.5 | project-hourly-check (10次) | ~150k |
| 2026-03-04 | MiniMax-M2.5 | daily-skill-scan (06:00) | ~36k |
| 2026-03-04 | MiniMax-M2.5 | daily-project-summary (09:00) | ~6.6k |
| 2026-03-04 | MiniMax-M2.5 | daily-update (05:00) | ~1.4k |
| 2026-03-03 | MiniMax-M2.5 | 主會話互動 (推估) | ~80k |
| 2026-03-03 | MiniMax-M2.5 | project-hourly-check | ~106k |
| 2026-03-03 | MiniMax-M2.5 | daily-skill-scan | ~30k |
| 2026-03-03 | MiniMax-M2.5 | daily-project-summary | ~10k |
| 2026-03-02 | MiniMax-M2.5 | 主會話互動 (推估) | ~80k |
| 2026-03-02 | MiniMax-M2.5 | project-hourly-check | ~95k |
| 2026-03-02 | MiniMax-M2.5 | daily-skill-scan | ~31k |
| 2026-03-01 | MiniMax-M2.5 | 主會話互動 (推估) | ~80k |
| 2026-03-01 | MiniMax-M2.5 | Cron Jobs (推估) | ~120k |

### 📈 月度彙總

| 月份 | 輸入 Tokens | 輸出 Tokens | 總計 |
|------|------------|------------|------|
| 2026-03 (截至今日) | ~1,400k | ~100k | ~1,500k |
| 2026-02 (推估) | ~3,500k | ~250k | ~3,750k |
| 2026-01 (推估) | ~3,000k | ~200k | ~3,200k |

---

## 5. 自動化任務排程 (Cron Jobs)

| Job Name | 排程 | 狀態 | 預估消耗 |
|----------|------|------|---------|
| `project-hourly-check` | 每小時 | 🟢 運作中 | ~130k/天 |
| `youtube-daily-trending` | 每日 20:00 | 🟢 運作中 | ~5k/天 |
| `泡腳-天數成效Agent` | 每日 23:00 | 🟢 運作中 | ~3k/天 |
| `daily-update` | 每日 05:00 | 🟢 運作中 | ~1k/天 |
| `daily-skill-scan` | 每日 06:00 | 🟡 需優化 | ~32k/天 |
| `daily-project-summary` | 每日 09:00 | 🟢 運作中 | ~8k/天 |
| `openclaw-daily-news` | 每日 09:00 | 🔴 錯誤 | - |

---

## 6. 待處理事項 (Action Items)

### 🔴 高優先級

- [ ] **確認執行** daily-skill-scan 改為每週一次 (可省 ~200k/天)
- [ ] **確認執行** project-hourly-check 改為每 2 小時 (可省 ~65k/天)

### 🟡 中優先級

- [ ] 精簡 AGENTS.md 減少 Context 載入
- [ ] 修復 openclaw-daily-news Cron Job 錯誤

### 🟢 低優先級

- [ ] 移除 BOOTSTRAP.md (已完成初始化)
- [ ] 建立 Stripe 支付測試環境
- [ ] 開發 MP3 下載功能

---

## 📋 變更記錄 (Changelog)

| 日期 | 變更內容 |
|------|---------|
| 2026-03-04 | 新增 Token 儀表板 |
| 2026-03-04 | 新增泡腳追蹤系統 |
| 2026-03-04 | 建立專案戰情室 |
| 2026-03-03 | 會議記錄系統上線 |
| 2026-03-03 | 市場調查工具上線 |
| 2026-03-03 | AI 簡報產生器上線 |
| 2026-03-03 | SUI 部落格系統上線 |
| 2026-03-02 | TTS MVP v1.1 更新 |

---

*此戰情室由 OpenClaw 自動維護*
