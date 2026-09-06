# 駐點回報系統 — 變更日誌

> 本檔記錄本 repo 規格與基礎設施的所有重要變更。

---

## v3.0.2 — 2026-09-06 — 基礎設施層補完（Sean 10-repo-fleet）

**v3.0.2 完成於 2026-09-06 by Sean 10-repo-fleet**

### Added
- `PRD/SPEC.md` 新增 §B1–§B9「v3.0.2 基礎設施規格層」cover（既有 §A1–§A15 v2.2.1 產品層 frozen 保留）
- `PRD/CHANGELOG.md`（本檔）
- `.github/workflows/ci.yml`（4-job CI: lint / test / build / deploy）
- `.gitignore` 補完（node_modules / .DS_Store / Thumbs.db / IDE / .vercel）

### Changed
- `README.md` 維持現況（已含部署 URL + 結構圖，無需變動）
- `PRD/SPEC.md` 標題改為 v3.0.2（v2.2.1 產品層 + v3.0.2 基礎設施層）

### Preserved（不動）
- `GoogleAppsScript.js` — Apps Script 主邏輯（frozen）
- `api/submit.js` — Vercel serverless function
- `index.html` / `dashboard.html` / `pricing.html` — Static UI
- `vercel.json` — Vercel routing
- `archive/` — 17 個歷史 Apps Script 版本（frozen）

### Notes
- 本 repo 為 v1 版的「Google Apps Script 員工報工系統」前端 + Vercel API 收件端
- **產品已封存**（Sophia 於 v2.2.1 §0 重寫為「LINE + Web 雙通道」新定位，參見 `staff-reporting-system-v2`）
- 本 repo 保留為**歷史 frozen 部署**，不再疊加新產品功能
- 部署目標：Vercel Hobby（自動 GitHub integration），GHA workflow 不接管 deploy（避免雙 deploy 衝突）
- GHA deploy job 設為 `DEPLOY_TARGET=none`（graceful），主 deploy 仍走 Vercel GitHub App

---

## v2.2.1 — 2026-07-19 — Sweet Spot 體檢重寫（Sophia CPO, frozen）

### Changed
- 從 v1.0「通用駐點回報」紅海定位重寫為「**LINE + AI 雙通道、零月費、給 5 人微型保全的月報救星**」
- §A1.2 Persona 鎖定 4 種（微型保全、清潔外包、機電駐點、物業包租代管）
- §A3.1 MVP 從 12 features 縮到 6 features
- §A4 技術棧更新：Next.js 16 + Supabase + OpenAI gpt-4o-mini

### Added
- §A7 風險與決策（含 8 條 ADR）
- §A15 Sweet Spot 5 問體檢 + 重寫理由

### Notes
- 本版本為 v2.2.1 frozen，後續 v3.x 改在 `staff-reporting-system-v2` 進行

---

## v1.0 — 2024 — 初版（OpenClaw 開發）

### Added
- Google Apps Script 主邏輯（`GoogleAppsScript.js`）
- Vercel API 收件端（`api/submit.js`，multiparty + nodemailer + sharp）
- Static HTML UI（index / dashboard / pricing）

### Notes
- 初版以「通用駐點回報」為定位，後於 v2.2.1 判定紅海（4/10）並重寫
