/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nosh: {
          black: '#070709',
          dark: '#0D0D11',
          charcoal: '#131318',
          card: '#181820',
          'card-hover': '#1F1F2A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(255, 85, 0, 0.35)',
          orange: '#FF5500',
          'orange-glow': '#FF6A14',
          'orange-dark': '#D43F00',
          amber: '#FFAE00',
          yellow: '#FFC837',
          cream: '#FAF6EE',
          'cream-muted': '#C8C4BA',
          muted: '#858392',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite alternate',
        'float-fast': 'float 3s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 85, 0, 0.45)',
        'glow-orange-lg': '0 0 60px -10px rgba(255, 85, 0, 0.55)',
        'glow-amber': '0 0 30px -5px rgba(255, 174, 0, 0.4)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-radial-hero': 'radial-gradient(circle at 60% 50%, rgba(255, 85, 0, 0.18) 0%, rgba(255, 174, 0, 0.08) 35%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
