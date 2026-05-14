import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0f1f3d',
        navy2:   '#1a3260',
        blue:    '#2355d4',
        'blue-l':'#e8eeff',
        sand:    '#c9a96e',
        teal:    '#0d7377',
        green:   '#16a34a',
        muted:   '#8a8680',
        text2:   '#4a4540',
        border:  '#e8e4df',
        bg:      '#f9f8f6',
        bg2:     '#f3f1ee',
      },
      fontFamily: {
        heading: ['var(--font-bricolage)', 'sans-serif'],
        body:    ['var(--font-instrument)', 'sans-serif'],
        inter:   ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '14px',
        sm: '8px',
      },
      boxShadow: {
        sm:  '0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)',
        md:  '0 2px 8px rgba(0,0,0,.08), 0 12px 40px rgba(0,0,0,.08)',
        lg:  '0 4px 16px rgba(0,0,0,.08), 0 24px 64px rgba(0,0,0,.1)',
        card:'0 32px 64px rgba(10,20,60,0.12), 0 8px 24px rgba(10,20,60,0.07)',
      },
      animation: {
        'marquee':    'marquee 40s linear infinite',
        'marquee-rev':'marquee 40s linear infinite reverse',
        'marquee-sm': 'marquee 30s linear infinite',
        'marquee-sm-rev':'marquee 30s linear infinite reverse',
        'fadeUp':     'fadeUp .65s cubic-bezier(.16,1,.3,1) both',
        'float':      'float 3.5s ease-in-out infinite',
        'pulse-dot':  'pulse-dot 2s ease-in-out infinite',
        'bar-grow':   'bar-grow .8s ease forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(22,163,74,.4)' },
          '50%':      { opacity: '.8', boxShadow: '0 0 0 5px rgba(22,163,74,0)' },
        },
        'bar-grow': {
          from: { height: '4px' },
        },
      },
    },
  },
  plugins: [],
}

export default config
