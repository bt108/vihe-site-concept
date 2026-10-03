/* README — multi-tenant org config.
 *
 * To re-skin this site for another organisation:
 *   1. Duplicate the `org` object below and swap copy/images/palette only.
 *   2. Replace public/assets/logo.png (+ placeholders if you have photos).
 *   3. Update the palette in tailwind.config.cjs and the :root fallbacks
 *      in src/layouts/Base.astro to match.
 * No component markup needs to change: every section reads its copy from
 * here through props that default to these values.
 */

export interface OrgNavLink {
  label: string;
  href: string;
}

export interface OrgCta {
  label: string;
  href: string;
}

export interface OrgCourse {
  title: string;
  mode: string;
  dates: string;
  by: string;
  desc: string;
}

export interface OrgPhone {
  display: string;
  href: string;
}

export interface OrgPalette {
  primary: string;
  primaryDark: string;
  cta: string;
  accent: string;
  sky: string;
  clay: string;
  bg: string;
  surface: string;
  text: string;
}

export interface OrgSevaColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface OrgConfig {
  name: string;
  shortName: string;
  logoMark: string;
  tagline: string;
  taglineSub: string;
  nav: OrgNavLink[];
  hero: { title: string; sub: string; ctas: [OrgCta, OrgCta]; image: string };
  contact: { phones: OrgPhone[]; email: string; emailHref: string };
  coursesHeader: { label: string; title: string; sub: string };
  courses: OrgCourse[];
  retreatsHeader: { label: string; title: string; sub: string };
  resourcesHeader: { label: string; title: string; sub: string };
  sevaHeader: { label: string; title: string; sub: string };
  sevaColumns: [OrgSevaColumn, OrgSevaColumn, OrgSevaColumn];
  footerNote: string;
  year: string;
  palette: OrgPalette;
}

export const org: OrgConfig = {
  name: 'Vrindavan Institute for Higher Education',
  shortName: 'VIHE',
  logoMark: 'V',
  tagline: 'Sadhana, Study and Preaching in Sri Vrindavan Dhama',
  taglineSub: 'Serving Srila Prabhupada’s mission since 1987',
  nav: [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'Retreats', href: '#retreats' },
    { label: 'Resources', href: '#resources' },
    { label: 'Seva', href: '#news' },
    { label: 'About', href: '#get-started' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    // Per-org re-skins swap this path (file lives in public/assets/).
    image: '/assets/hero.jpg',
    title: 'Welcome to Vrindavan Institute for Higher Education',
    sub: 'Established in 1987 in Sri Vrindavan Dhama, VIHE offers systematic study of the Gaudiya Vaisnava scriptures alongside deep sadhana and training in preaching — welcoming devotees from around the world.',
    ctas: [
      { label: 'Explore Courses', href: '#courses' },
      { label: 'Join a Retreat', href: '#retreats' },
    ],
  },
  contact: {
    phones: [
      { display: '+91 72595 26797', href: 'tel:+917259526797' },
      { display: '+91 91791 53513', href: 'tel:+919179153513' },
      { display: '+91 89799 43134', href: 'tel:+918979943134' },
      { display: '+91 81303 99345', href: 'tel:+918130399345' },
    ],
    email: 'courses@vihe.org',
    emailHref: 'mailto:courses@vihe.org',
  },
  coursesHeader: {
    label: 'Admissions Open',
    title: 'Winter Semester 2025–26 & Caturmasya 2026',
    sub: 'On-site in Vrindavan and online — systematic courses in Gaudiya Vaisnava philosophy, from introductory to advanced levels.',
  },
  courses: [
    {
      title: 'Bhakti-sadacara (Hindi)',
      mode: 'Online · Hindi',
      dates: 'Winter 2025–26',
      by: 'VIHE faculty',
      desc: 'Vaisnava etiquette and the foundations of devotional practice, taught in Hindi.',
    },
    {
      title: 'Bhakti-pravesa (Hindi)',
      mode: 'Online · Hindi',
      dates: 'Winter 2025–26',
      by: 'VIHE faculty',
      desc: 'Enter the philosophy of Krsna consciousness step by step, taught in Hindi.',
    },
    {
      title: 'Vedic Cosmology',
      mode: 'On-site · Vrindavan',
      dates: 'Feb 4–7, 2026',
      by: 'Pavanesvara Dasa',
      desc: 'A four-day intensive on the cosmology of the Srimad-Bhagavatam.',
    },
    {
      title: 'Bhakti-sastri',
      mode: 'On-site & Online',
      dates: 'Winter 2025–26',
      by: 'VIHE faculty',
      desc: 'Systematic study of Bhagavad-gita, Nectar of Devotion, Nectar of Instruction and Sri Isopanisad.',
    },
    {
      title: 'Bhakti-vedanta · Canto 10, Part 3',
      mode: 'On-site & Online',
      dates: 'Winter 2025–26',
      by: 'VIHE faculty',
      desc: 'Advanced study of Krsna-lila from the Tenth Canto of Srimad-Bhagavatam.',
    },
    {
      title: 'Bhakti-silanam',
      mode: 'On-site & Online',
      dates: 'Caturmasya 2026',
      by: 'VIHE faculty',
      desc: 'A focused course for deepening devotional practice and scriptural understanding.',
    },
    {
      title: 'Bhakti-vaibhava · Canto 6',
      mode: 'On-site & Online',
      dates: 'Caturmasya 2026',
      by: 'VIHE faculty',
      desc: 'Advanced study of the Sixth Canto of Srimad-Bhagavatam.',
    },
    {
      title: 'Bhakti-sadacara (English)',
      mode: 'Online · English',
      dates: 'Caturmasya 2026',
      by: 'VIHE faculty',
      desc: 'Vaisnava etiquette and the foundations of devotional practice, taught in English.',
    },
    {
      title: 'Bhakti-pravesa (English)',
      mode: 'Online · English',
      dates: 'Caturmasya 2026',
      by: 'VIHE faculty',
      desc: 'Enter the philosophy of Krsna consciousness step by step, taught in English.',
    },
  ],
  retreatsHeader: {
    label: 'Intensives & Retreats',
    title: 'Retreats in Vrindavan & Online',
    sub: 'Step out of routine and study in the dhama — short intensives and guided retreats through the year, in Vrindavan and online.',
  },
  resourcesHeader: {
    label: 'Study Aids',
    title: 'Resources for Students',
    sub: 'Recordings, reading lists and study materials that support VIHE courses and retreats — free for students and friends.',
  },
  sevaHeader: {
    label: 'Get Involved',
    title: 'Serve at VIHE',
    sub: 'VIHE runs on the service of devotees. Offer your time and talents — in Vrindavan or from wherever you are.',
  },
  sevaColumns: [
    {
      heading: 'Service Opportunities',
      links: [
        { label: 'Prasadam & kitchen seva', href: '#news' },
        { label: 'Guest care & reception', href: '#news' },
        { label: 'Gardening & goshala', href: '#news' },
        { label: 'Media & translations', href: '#news' },
      ],
    },
    {
      heading: 'Offer Your Seva',
      links: [
        { label: 'Fill the seva form', href: '#contact' },
        { label: 'Write to courses@vihe.org', href: 'mailto:courses@vihe.org' },
        { label: 'Call +91 72595 26797', href: 'tel:+917259526797' },
        { label: 'Visit us in Vrindavan', href: '#contact' },
      ],
    },
    {
      heading: 'Announcements',
      links: [
        { label: 'Winter 2025–26 admissions open', href: '#courses' },
        { label: 'Vedic Cosmology, Feb 4–7 2026', href: '#courses' },
        { label: 'Caturmasya 2026 calendar', href: '#courses' },
        { label: 'New study materials out now', href: '#books' },
      ],
    },
  ],
  footerNote: 'Sri Vrindavan Dhama — write to courses@vihe.org or call any number listed here.',
  year: '2026',
  palette: {
    primary: '#3F7D2B',
    primaryDark: '#4A1C1C',
    cta: '#E9B04B',
    accent: '#2B3F9E',
    sky: '#A9D2EA',
    clay: '#C48A4F',
    bg: '#FBF7EC',
    surface: '#FFFFFF',
    text: '#1A1A1A',
  },
};
