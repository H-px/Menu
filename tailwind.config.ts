import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f3ea',
        clay: '#ddc7a1',
        walnut: '#5f4a32',
        herb: '#4f7754',
      },
      boxShadow: {
        warm: '0 12px 30px rgba(95, 74, 50, 0.14)',
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"PingFang SC"', '"Microsoft Yahei"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
