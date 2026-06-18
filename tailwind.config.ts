import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'im-taupe': '#B7A08A',
        'im-beige': '#EFE8E1',
        'im-creme': '#F7F4F0',
        'im-text': '#4A423B',
        'im-dark': '#6A5D52',
        'im-sage': '#A7B0A0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
