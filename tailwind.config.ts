import type { Config } from 'tailwindcss';

export default {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-debug-screens')],
  content: [
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        background: 'black',
        color: 'white',
        margin: '1rem',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '1rem',
      },
      selector: '.debug-screens',
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'slide-in-left': 'slide-in-from-left 0.3s ease-out',
        'slide-out-left': 'slide-out-to-left 0.3s ease-in',
      },
    },
  },
} satisfies Config;
