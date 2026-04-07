# FamilyBistro（家庭小馆）

一个 **温馨、极简、移动端优先** 的家庭点餐应用雏形。目标是把“今晚吃什么”的沟通变成轻量、实时、可视化的家庭协作体验。

## 当前完成（第一步）

- 落地页（Warm Minimalist 风格）
- 身份切换（**厨师 / 家人**）
- 称呼输入（如：爸爸、小明）
- 今日菜单卡片预览（移动端优先布局）

## 技术栈

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

> 下一步会接入 Supabase 或 Firebase Real-time，实现厨师端与家人端无需刷新自动同步。

## 如何运行

### 1) 安装依赖

```bash
npm install
```

### 2) 启动开发环境

```bash
npm run dev
```

启动后打开：

- http://localhost:3000

### 3) 代码检查（可选）

```bash
npm run lint
```

### 4) 生产构建（可选）

```bash
npm run build
npm run start
```

## 项目结构（当前）

```text
app/
  globals.css      # 全局样式（奶油色+木质感氛围）
  layout.tsx       # 根布局与 metadata
  page.tsx         # 落地页 + 身份切换 UI
```

## 规划中的下一步

- 接入实时数据库（Supabase/Firebase）
- Chef Mode：菜品供应开关、订单聚合统计、提醒音效/震动
- Diner Mode：下单备注、订单状态追踪（已收到/制作中/准备开饭）
