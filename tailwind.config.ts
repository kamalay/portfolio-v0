import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '834px',     // Changed from default 768px
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'bg-primary-dark': 'var(--bg-primary-dark)',
        'bg-secondary-dark': 'var(--bg-secondary-dark)',
        'bg-tertiary-dark': 'var(--bg-tertiary-dark)',

        'text-primary-dark': 'var(--text-primary-dark)',
        'text-secondary-dark': 'var(--text-secondary-dark)',
        'text-tertiary-dark': 'var(--text-tertiary-dark)',

        'border-dark': 'var(--border-dark)',

        'teal-dark': 'var(--teal-dark)',
        'teal-hover-dark': 'var(--teal-hover-dark)',

        'saffron-dark': 'var(--saffron-dark)',
        'saffron-hover-dark': 'var(--saffron-hover-dark)',
      },
      fontFamily: {
        'firaCode': 'var(--font-firaCode)',
        'poppins': 'var(--font-poppins)',
        'firaSans': 'var(--font-firaSans)',
        'caveat': 'var(--font-caveat)',
        'crimsonPro': 'var(--font-crimsonPro)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        rocket: {
          '0%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(-1px)' },
          '20%': { transform: 'translateY(-2px)' },
          '30%': { transform: 'translateY(-4px)' },
          '40%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(-6px)' },
          '70%': { transform: 'translateY(-4px)' },
          '80%': { transform: 'translateY(-2px)' },
          '90%': { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'wave': 'wave 2.5s ease-in-out infinite',
        'rocket': 'rocket 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
} satisfies Config;
