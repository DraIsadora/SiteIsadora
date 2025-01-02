import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bege-100': '#F9F4F2',
        'bege-150': '#FCF0E6',
        'orange-1000': '#D27D2F',
        'orange-10': '#DD964F',
        'whiteoff-100': '#F9F4F2',
        'blackgray-100': '#4B4B4B',
      },
    },
  },
  plugins: [],
}
export default config
