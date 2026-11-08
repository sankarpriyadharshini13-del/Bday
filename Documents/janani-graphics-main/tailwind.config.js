import { Config } from "tailwindcss";

const config = {
  // ✅ Enable JIT mode for faster builds and smaller CSS
  mode: 'jit',
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // Semantic palette; the values live in CSS variables in app/globals.css
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
        },
        navy: 'var(--color-navy)',
        ivory: 'var(--color-ivory)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-text-secondary)',
        line: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        peach: 'var(--color-peach)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        soft: 'var(--shadow-sm)',
        card: 'var(--shadow-md)',
      },
      
      // ✅ SEO Performance: Optimize font loading
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      
      // Entrance fade only; no perpetual decorative animation
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
      },
      
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      
      // ✅ Keep your existing gradient backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  
  plugins: [
    // ✅ SEO: Better typography for readability
    require('@tailwindcss/typography'),
  ],
  
  // ✅ SEO Performance: Purge unused CSS in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        // Preserve animation classes
        'animate-fadeIn',
        'animate-spin',
        // Preserve responsive classes
        'md:',
        'lg:',
        'xl:',
      ],
    },
  },
  
  // ✅ SEO: Enable important for better specificity control
  important: false,
  
  // ✅ SEO: Optimize separator
  separator: ':',
  
  // ✅ SEO Performance: Configure variants (reduce CSS size)
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active'],
      scale: ['active', 'group-hover'],
    },
  },
  
  // ✅ SEO: Configure prefix (if needed for conflicts)
  prefix: '',
  
  // ✅ SEO Performance: Disable unused utilities
  corePlugins: {
    // Keep all core plugins enabled for your design
    // But you can disable unused ones later for optimization
  },
};

export default config;