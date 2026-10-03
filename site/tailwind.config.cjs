/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* VIHE palette (canonical tokens). */
        primary:      '#3F7D2B',
        'primary-dark': '#4A1C1C',
        cta:          '#E9B04B',
        accent:       '#2B3F9E',
        sky:          '#A9D2EA',
        clay:         '#C48A4F',
        bg:           '#FBF7EC',
        surface:      '#FFFFFF',
        text:         '#1A1A1A',
        /* Legacy template aliases remapped onto the VIHE palette so every
           existing class keeps working with zero layout change:
           buttons -> primary, pine hovers/footers -> primary-dark,
           gold/amber badges + CTAs -> cta, danger/community CTA -> accent,
           cream/paper/mist/tint page bgs -> bg, cards -> surface. */
        ink:    '#1A1A1A',
        pine:   '#4A1C1C',
        body:   '#1A1A1A',
        sage:   '#C48A4F',
        mist:   '#FBF7EC',
        cream:  '#FBF7EC',
        bronze: '#C48A4F',
        gold:   '#E9B04B',
        sand:   '#FBF7EC',
        tint:   '#FBF7EC',
        paper:  '#FBF7EC',
        stone:  '#C48A4F',
        cloud:  '#A9D2EA',
        danger: '#2B3F9E',
        blush:  '#A9D2EA',
        ember:  '#4A1C1C',
        peach:  '#2B3F9E',
      },
      fontFamily: {
        head: ['Epilogue', 'sans-serif'],
        body: ['Inter Regular', 'Inter', 'sans-serif'],
      },
      borderRadius: { card: '6px', btn: '4px' },
    },
  },
  plugins: [],
};
