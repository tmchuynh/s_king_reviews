import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          '1': 'var(--accent-1)',
          '2': 'var(--accent-2)',
          '3': 'var(--accent-3)',
          '4': 'var(--accent-4)',
          '5': 'var(--accent-5)',
          '6': 'var(--accent-6)',
          foreground: 'var(--accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
          '6': 'var(--chart-6)',
        }
      },
      fontFamily: {
        FascinateInline: [
          'FascinateInline',
          'sans-serif'
        ],
        Sigmar: [
          'Sigmar',
          'sans-serif'
        ],
        PoiretOne: [
          'PoiretOne',
          'sans-serif'
        ],
        Oswald: [
          'Oswald',
          'sans-serif'
        ],
        MontserratAlternates: [
          'MontserratAlternates',
          'sans-serif'
        ],
        LeagueSpartan: [
          'LeagueSpartan',
          'sans-serif'
        ],
        AlumniSansPinstripe: [
          'AlumniSansPinstripe',
          'sans-serif'
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.4s ease-out'
      }
    }
  },
  plugins: [require( "tailwindcss-animate" )],
} satisfies Config;
