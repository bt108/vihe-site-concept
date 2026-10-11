import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  // Project Pages serve under /<repo>/ — base makes asset URLs resolve there.
  // Local dev is then served under the same subpath.
  base: '/vihe-site-concept/',
  integrations: [tailwind({ configFile: './tailwind.config.cjs' })],
});
