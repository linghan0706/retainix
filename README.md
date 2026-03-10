# Retainix

Retainix 是一个基于 Next.js 的全栈多语种记忆学习平台。系统通过 AI 解析文档并生成学习大纲，结合间隔重复算法，帮助用户从“输入资料”到“长期记忆”形成完整学习闭环。

## 1. 项目概述

### 1.1 项目定位

基于 Next.js 的全栈多语种记忆学习平台，通过 AI 解析多种格式文档，自动生成细化学习大纲，结合间隔重复算法完成完整学习闭环。

### 1.2 核心价值

| 维度 | 说明 |
| --- | --- |
| 输入 | 支持 PDF/Word/EPUB/Markdown 等多种文档格式 |
| 处理 | AI 智能解析 -> 提取知识点 -> 生成学习大纲 |
| 输出 | 间隔重复记忆卡片 + 学习进度追踪 + 记忆效果分析 |

### 1.3 多语种学习支持

- 支持多语种学习内容（如英语、日语、韩语、法语、西语、德语等）统一导入与解析。
- 支持跨语言知识点提取与大纲构建，适用于二语学习、考试备考与专业阅读。
- 支持按语言维度追踪学习进度与记忆效果，便于制定个性化复习策略。

## 2. 核心功能模块

| 模块 | 功能描述 | 输出结果 |
| --- | --- | --- |
| 文档导入 | 上传与管理 PDF、DOCX、EPUB、MD 等学习资料 | 结构化文档记录 |
| AI 文档解析 | 分段、去噪、术语识别、主题归类、难度评估 | 可计算的知识点集合 |
| 学习大纲生成 | 自动生成章节树、子主题、学习顺序、重点难点 | 可执行学习计划 |
| 卡片生成引擎 | 按知识点生成问答卡片、填空卡片、术语卡片 | 可复习卡片库 |
| 间隔重复调度 | 依据记忆表现动态安排复习日期 | 每日待复习任务 |
| 学习进度追踪 | 统计完成率、连续学习天数、章节进度 | 实时进度面板 |
| 记忆效果分析 | 统计正确率、遗忘曲线、薄弱知识点 | 个性化优化建议 |

## 3. 学习闭环流程

1. 用户上传学习文档。
2. 系统解析文档并抽取知识点。
3. AI 自动生成学习大纲与优先级。
4. 系统生成记忆卡片并安排首轮学习。
5. 用户按日完成复习，系统记录作答表现。
6. 调度算法动态调整下一次复习时间。
7. 数据分析模块输出进度与记忆效果报告。

## 4. 技术栈

| 层级 | 选型 |
| --- | --- |
| 前端 | Next.js (App Router), React, TypeScript |
| UI | Tailwind CSS v4, daisyUI, GSAP |
| AI SDK | OpenAI Node SDK |
| 代码规范 | ESLint |
| 包管理 | pnpm（强制） |

## 5. 当前仓库结构（实际）

当前代码库为可运行骨架，业务模块正在建设中。

```text
retainix/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ public/
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
└─ tsconfig.json
```

## 6. 目标目录结构（建议）

下面是推荐的业务化目录方案，用于承载“文档解析 -> 大纲生成 -> 卡片复习 -> 分析追踪”的完整能力。

```text
retainix/
├─ app/
│  ├─ (marketing)/
│  ├─ dashboard/
│  ├─ documents/
│  ├─ outlines/
│  ├─ reviews/
│  ├─ analytics/
│  └─ api/
│     ├─ documents/
│     ├─ parse/
│     ├─ outlines/
│     ├─ cards/
│     └─ reviews/
├─ components/
├─ lib/
│  ├─ ai/
│  ├─ parser/
│  ├─ scheduler/
│  └─ analytics/
├─ types/
├─ prisma/ (或其他数据层目录)
└─ docs/
```

## 7. 数据实体设计（建议）

| 实体 | 关键字段 | 说明 |
| --- | --- | --- |
| User | id, email, timezone, profile | 用户信息与学习偏好 |
| Document | id, userId, sourceType, status, metadata | 原始文档与解析状态 |
| KnowledgePoint | id, documentId, title, summary, difficulty | 文档提取出的知识点 |
| Outline | id, documentId, tree, version | 结构化学习大纲 |
| Card | id, knowledgePointId, type, front, back | 记忆卡片 |
| ReviewLog | id, cardId, rating, reviewedAt, interval | 单次复习记录 |
| LearningStats | userId, accuracy, streak, retentionRate | 统计分析结果 |

## 8. API 设计（建议）

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | /api/documents/upload | 上传文档 |
| POST | /api/parse | 触发文档解析 |
| POST | /api/outlines/generate | 生成学习大纲 |
| POST | /api/cards/generate | 批量生成记忆卡片 |
| GET | /api/reviews/today | 获取今日复习任务 |
| POST | /api/reviews/submit | 提交复习结果 |
| GET | /api/analytics/overview | 获取学习分析面板数据 |

## 9. 开发规范

- 包管理器统一使用 `pnpm`。
- 已在 `preinstall` 强制校验：非 `pnpm` 安装会失败。
- 所有新增业务逻辑优先使用 TypeScript 并保持模块边界清晰。
- AI 结果需保留可追踪元数据，便于后续分析与重算。

## 10. 本地开发

### 10.1 环境要求

- Node.js >= 20
- pnpm >= 10

### 10.2 安装依赖

```bash
pnpm install
```

### 10.3 启动开发环境

```bash
pnpm dev
```

默认访问地址：`http://localhost:3000`

### 10.4 代码检查

```bash
pnpm lint
```

## 11. 环境变量（建议）

在项目根目录创建 `.env.local`：

```bash
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
DATABASE_URL=your_database_url
```

## 12. 里程碑规划（建议）

1. M1：完成文档上传与解析链路（单文档）。
2. M2：完成知识点抽取与学习大纲生成。
3. M3：完成卡片生成与间隔重复调度。
4. M4：完成学习分析面板与效果评估。
5. M5：上线多文档管理、权限与部署优化。
