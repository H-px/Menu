'use client';

import { Check, ChefHat, Clock3, Flame, Salad, Users } from 'lucide-react';
import { useMemo, useState } from 'react';

type Role = 'chef' | 'diner';

type MenuItem = {
  name: string;
  desc: string;
  prep: string;
  badge: string;
};

const menuItems: MenuItem[] = [
  {
    name: '宫保鸡丁',
    desc: '花生香脆，鸡丁鲜嫩，默认微辣。',
    prep: '约 12 分钟',
    badge: '本日推荐',
  },
  {
    name: '番茄牛腩',
    desc: '慢炖入味，汤汁适合拌饭。',
    prep: '约 20 分钟',
    badge: '暖胃热菜',
  },
  {
    name: '蒜蓉西兰花',
    desc: '清爽少油，适合全家搭配。',
    prep: '约 8 分钟',
    badge: '轻负担',
  },
];

const roleCopy = {
  chef: {
    title: '厨师模式',
    subtitle: '一眼看到今天要做什么，专注掌勺。',
    hint: '可切换菜品“供应中/售罄”，订单会实时聚合提醒。',
    cta: '进入厨房看板',
  },
  diner: {
    title: '家人模式',
    subtitle: '轻点菜品，备注口味，实时同步到厨房。',
    hint: '支持“不辣、少盐”等个性备注，并查看当前状态。',
    cta: '开始点餐',
  },
};

export default function Home() {
  const [role, setRole] = useState<Role>('diner');

  const currentCopy = useMemo(() => roleCopy[role], [role]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-10 pt-7">
      <header className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-herb shadow-sm">
          <Flame size={14} /> FamilyBistro 家庭小馆
        </p>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight">今晚吃什么，不用再喊来喊去。</h1>
          <p className="text-sm leading-relaxed text-walnut/80">
            一个像家里数字黑板的点餐页：家人下单，厨房实时收到。温馨、简单、马上开饭。
          </p>
        </div>
      </header>

      <section className="mt-6 rounded-3xl border border-white/70 bg-white/75 p-4 shadow-warm backdrop-blur">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-walnut/60">选择身份</p>
        <div className="grid grid-cols-2 gap-2 rounded-2xl bg-cream p-1">
          <button
            type="button"
            onClick={() => setRole('chef')}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${
              role === 'chef' ? 'bg-walnut text-cream shadow' : 'text-walnut/70'
            }`}
          >
            <ChefHat size={16} /> 厨师
          </button>
          <button
            type="button"
            onClick={() => setRole('diner')}
            className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${
              role === 'diner' ? 'bg-walnut text-cream shadow' : 'text-walnut/70'
            }`}
          >
            <Users size={16} /> 家人
          </button>
        </div>

        <div className="mt-4 rounded-2xl bg-[#fffdf7] p-4">
          <h2 className="text-lg font-bold">{currentCopy.title}</h2>
          <p className="mt-1 text-sm text-walnut/75">{currentCopy.subtitle}</p>
          <p className="mt-3 text-xs text-walnut/60">{currentCopy.hint}</p>
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-herb px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <Check size={16} /> {currentCopy.cta}
          </button>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold">今日菜单</h3>
          <span className="text-xs text-walnut/60">示例预览</span>
        </div>

        <div className="space-y-3">
          {menuItems.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white/80 p-4 shadow-warm">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="mt-1 text-sm text-walnut/75">{item.desc}</p>
                </div>
                <span className="rounded-full bg-clay/40 px-2 py-1 text-[11px] font-medium text-walnut">{item.badge}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-walnut/70">
                <Clock3 size={13} /> {item.prep}
                <span className="mx-1">·</span>
                <Salad size={13} /> 可备注口味
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
