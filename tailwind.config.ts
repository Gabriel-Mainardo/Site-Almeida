import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				plum: {
					DEFAULT: '#2D2136',
					light: '#3D2C48',
					dark: '#1E1624',
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#F0CD5D',
					dark: '#B38B28',
				},
				cream: {
					DEFAULT: '#F3F4E5',
					light: '#FAFBF2',
					dark: '#E8E9D9',
				},
				sage: {
					DEFAULT: '#A1C1BE',
					light: '#B5D0CD',
					dark: '#8AABA8',
				},
				slate: {
					DEFAULT: '#424E5E',
					light: '#566579',
					dark: '#323A46',
				},
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
				},
				'fade-in': {
					'0%': {
					  opacity: '0',
					  transform: 'translateY(10px)'
					},
					'100%': {
					  opacity: '1',
					  transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
					  opacity: '1',
					  transform: 'translateY(0)'
					},
					'100%': {
					  opacity: '0',
					  transform: 'translateY(10px)'
					}
				},
				'shimmer': {
					'0%': {
					  backgroundPosition: '-200% 0'
					},
					'100%': {
					  backgroundPosition: '200% 0'
					}
				},
				'logo-fade-in': {
					'0%': {
					  opacity: '0',
					  transform: 'scale(0.8) rotate(-5deg)'
					},
					'50%': {
					  opacity: '0.7',
					  transform: 'scale(1.8) rotate(2deg)'
					},
					'100%': {
					  opacity: '1',
					  transform: 'scale(1.6) rotate(0deg)'
					}
				},
				'logo-glow': {
					'0%': {
					  opacity: '0',
					  transform: 'scale(0.8)',
					  filter: 'blur(10px)'
					},
					'50%': {
					  opacity: '0.5',
					  transform: 'scale(1.5)',
					  filter: 'blur(15px)'
					},
					'100%': {
					  opacity: '0',
					  transform: 'scale(1.8)',
					  filter: 'blur(20px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'shimmer': 'shimmer 2s infinite linear',
				'logo-fade-in': 'logo-fade-in 1.2s ease-out forwards',
				'logo-glow': 'logo-glow 2.5s ease-in-out infinite'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'raleway': ['Raleway', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-gold': 'linear-gradient(45deg, #D4AF37 30%, #F0CD5D 70%, #B38B28 90%)',
				'gradient-plum': 'linear-gradient(to bottom, rgba(45, 33, 54, 0.8), rgba(30, 22, 36, 0.95))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

