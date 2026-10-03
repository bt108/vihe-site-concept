/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* VIHE palette (canonical tokens) — meanings from the logo artwork,
           kept here for future re-skins:
           primary      Meadow green      #3F7D2B  The grass and leaves
           primary-dark Deep maroon-brown #4A1C1C  The tree trunk (header, footer)
           cta          Saffron gold       #E9B04B  The figure's skin tone and glow (CTAs)
           accent       Peacock blue       #2B3F9E  The peacock's neck (links, highlights)
           sky          Sky blue           #A9D2EA  The sky behind the tree (cards, banners)
           clay         Terracotta clay    #C48A4F  The hills on the right (warm neutral)
           bg           Cream              #FBF7EC  The dhoti and paper (page background)
           surface      White              #FFFFFF  Cards / surfaces
           text         Near-black         #1A1A1A  The ring and lettering */
        primary:      '#3F7D2B',   /* Meadow green — grass and leaves */
        'primary-dark': '#4A1C1C', /* Deep maroon-brown — tree trunk; header, footer */
        cta:          '#E9B04B',   /* Saffron gold — figure's skin tone and glow */
        accent:       '#2B3F9E',   /* Peacock blue — peacock's neck; links, highlights */
        sky:          '#A9D2EA',   /* Sky blue — sky behind the tree; cards, banners */
        clay:         '#C48A4F',   /* Terracotta clay — hills on the right */
        bg:           '#FBF7EC',   /* Cream — dhoti and paper */
        surface:      '#FFFFFF',
        text:         '#1A1A1A',   /* Near-black — ring and lettering */
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
        head: ['"Charis SIL"', 'Georgia', 'serif'],
        body: ['"Charis SIL"', 'Georgia', 'serif'],
      },
      borderRadius: { card: '6px', btn: '4px' },
    },
  },
  plugins: [],
};
