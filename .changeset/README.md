# Changesets 规范（Retainix）

本目录用于版本管理与变更日志，适用于 pnpm workspace + Turborepo 的 monorepo。

## 1. 何时必须写 changeset

以下情况必须创建 changeset：

- 对用户可见的功能变更（新增、修复、行为调整）
- API 变更（新增字段、修改响应结构、废弃接口）
- 共享包 `packages/*` 的对外导出变更
- 数据结构变更会影响上下游调用方

以下情况可不写：

- 纯文档调整
- 仅注释/格式化
- CI 配置且不影响产物

## 2. 版本级别定义

- `patch`：向后兼容的修复、微调、非破坏性优化
- `minor`：向后兼容的新功能
- `major`：破坏性变更（Breaking Change）

## 3. 操作流程

1. 开发完成后执行：`pnpm dlx changeset`
2. 选择受影响包（可多选）
3. 选择版本级别（patch/minor/major）
4. 写清楚变更说明（用户价值 + 影响范围）
5. 提交变更文件（`.changeset/*.md`）

## 4. changeset 文件内容规范

- 首段写“做了什么”（What）
- 次段写“为什么做”（Why）
- 末段写“风险/迁移说明”（Risk/Migration）

示例：

```md
---
"@retainix/web": minor
"@retainix/types": patch
---

新增文档上传后的异步解析队列接入，用户可在列表中看到实时状态。

将 `Document.status` 增加 `queued` 与 `parsing` 两个状态；旧状态 `processing` 保留兼容。

前端若按枚举严格判断，请同步更新状态映射表。
```

## 5. 发布策略

- `main` 分支触发 `release.yml`
- 有未发布 changeset 时：自动创建/更新 Release PR
- 合并 Release PR 后：自动打版本并（可选）发布 npm

## 6. 分支与提交建议

- 分支命名：`feat/*`、`fix/*`、`chore/*`
- 提交规范：Conventional Commits
- PR 中必须说明是否包含 changeset：
  - `yes`：附上影响包与升级级别
  - `no`：说明原因

## 7. 审核要求

- 至少 1 位 reviewer 通过
- CI 全绿
- 破坏性变更需附迁移说明

## 8. 注意事项

- 不要手改版本号到 `package.json`
- 不要在同一个 PR 混入无关大规模重构
- 对共享包的变更，必须补测试或验证步骤
