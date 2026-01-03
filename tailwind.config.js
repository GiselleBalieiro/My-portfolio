/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--bg-tertiary) / <alpha-value>)',
        'bg-card': 'rgb(var(--bg-card) / <alpha-value>)',
        'bg-hover': 'rgb(var(--bg-hover) / <alpha-value>)',

        // Text
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-tertiary': 'rgb(var(--text-tertiary) / <alpha-value>)',
        'text-inverse': 'rgb(var(--text-inverse) / <alpha-value>)',

        // Borders
        'border-primary': 'rgb(var(--border-primary) / <alpha-value>)',
        'border-secondary': 'rgb(var(--border-secondary) / <alpha-value>)',

        // Brand
        'brand-blue': 'rgb(var(--brand-blue) / <alpha-value>)',
        'brand-indigo': 'rgb(var(--brand-indigo) / <alpha-value>)',
        'brand-purple': 'rgb(var(--brand-purple) / <alpha-value>)',

        // Accents
        'accent-success': 'rgb(var(--accent-success) / <alpha-value>)',
        'accent-warning': 'rgb(var(--accent-warning) / <alpha-value>)',
        'accent-error': 'rgb(var(--accent-error) / <alpha-value>)',
        'accent-info': 'rgb(var(--accent-info) / <alpha-value>)',

        // Tech Stack Badges
        'badge-html': 'rgb(var(--badge-html) / <alpha-value>)',
        'badge-css': 'rgb(var(--badge-css) / <alpha-value>)',
        'badge-js': 'rgb(var(--badge-js) / <alpha-value>)',
        'badge-ts': 'rgb(var(--badge-ts) / <alpha-value>)',
        'badge-react': 'rgb(var(--badge-react) / <alpha-value>)',
        'badge-nextjs': 'rgb(var(--badge-nextjs) / <alpha-value>)',
        'badge-tailwind': 'rgb(var(--badge-tailwind) / <alpha-value>)',
        'badge-nodejs': 'rgb(var(--badge-nodejs) / <alpha-value>)',
        'badge-mongodb': 'rgb(var(--badge-mongodb) / <alpha-value>)',
        'badge-php': 'rgb(var(--badge-php) / <alpha-value>)',
        'badge-mysql': 'rgb(var(--badge-mysql) / <alpha-value>)',
        'badge-postgresql': 'rgb(var(--badge-postgresql) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '1rem',     // 16px
        'md': '1.5rem',   // 24px
        'lg': '2rem',     // 32px
        'xl': '3rem',     // 48px
        '2xl': '4rem',    // 64px
        '3xl': '6rem',    // 96px
      },
      borderRadius: {
        'sm': '0.25rem',       // 4px
        'DEFAULT': '0.375rem', // 6px
        'md': '0.5rem',        // 8px
        'lg': '0.75rem',       // 12px
        'xl': '1rem',          // 16px
        '2xl': '1.5rem',       // 24px
        'full': '9999px',
      },
      transitionDuration: {
        'fast': '100ms',
        'base': '150ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'custom-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      },
    },
  },
  plugins: [],
}