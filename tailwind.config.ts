import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#13202b',
        steel: {
          50: '#f4f6f7',
          100: '#e8ecef',
          200: '#d3dade',
          300: '#b4bfc6',
          400: '#8c9aa4',
          500: '#6f7f8a',
          700: '#3b4852',
          900: '#1b2831',
        },
        brand: { DEFAULT: '#0b5f7a', dark: '#084a60', light: '#d9eef4' },
        brass: { DEFAULT: '#b8923a', dark: '#8f7029', light: '#f3e9cf' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
