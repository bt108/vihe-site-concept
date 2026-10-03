/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* VIHE palette (canonical tokens only — every class in src/ uses these):
           buttons -> primary, deep maroon panels/hovers/footers -> primary-dark,
           badges + CTA highlights -> cta, links + community CTA -> accent,
           page backgrounds -> bg, cards -> surface, headings/body -> text. */
        primary:      '#3F7D2B',
        'primary-dark': '#4A1C1C',
        cta:          '#E9B04B',
        accent:       '#2B3F9E',
        sky:          '#A9D2EA',
        clay:         '#C48A4F',
        bg:           '#FBF7EC',
        surface:      '#FFFFFF',
        text:         '#1A1A1A',
      },
      fontFamily: {
        head: ['"Charis SIL"', 'Georgia', 'serif'],
        body: ['"Charis SIL"', 'Georgia', 'serif'],
      },
      borderRadius: { card: '6px', btn: '4px' },
    },
  },
  plugins: [],
};
