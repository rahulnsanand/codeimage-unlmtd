import {nodeTypes} from '@mdx-js/mdx';
import mdx from '@mdx-js/rollup';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import type {Plugin, UserConfigExport} from 'vite';
import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import {withStaticVercelPreview} from '../../scripts/vercel-output-build';

const config: UserConfigExport = defineConfig(({mode}) => ({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
        rehypePlugins: [rehypeSlug, [rehypeRaw, {passThrough: nodeTypes}]],
      }),
      enforce: 'pre',
    },
    vanillaExtractPlugin({
      unstable_mode: 'transform',
    }),
    solidPlugin({
      extensions: ['.mdx', '.tsx', '.ts'],
    }),
    tsconfigPaths(),
    {
      name: 'html-inject-umami',
      transformIndexHtml(html) {
        const websiteId = process.env.UMAMI_WEBSITE_ID;
        const scriptSrc = process.env.UMAMI_SCRIPT_SRC;

        if (mode !== 'production' || !websiteId || !scriptSrc) return html;

        // Auto-track is off since query param push a new page view and breaks the analytics
        // TODO: Find a better solution to handle query params
        return html.replace(
          '<!-- %UMAMI% -->',
          `<script async defer data-website-id='${websiteId.trim()}' src='${scriptSrc.trim()}'></script>`,
        );
      },
    },
    {
      name: 'parse-environment-variables',

      configResolved(resolvedConfig) {
        const config = resolvedConfig as Omit<typeof resolvedConfig, 'env'> & {
          env: (typeof resolvedConfig)['env'];
        };
        const env = config.env;
        config.env = Object.keys(env).reduce((acc, key) => {
          let parsed = config.env[key];
          try {
            parsed = JSON.parse(config.env[key]);
          } catch {}
          return {
            ...acc,
            [key]: parsed,
          };
        }, {});
      },
    },
    withStaticVercelPreview() as unknown as Plugin,
  ],
  server: {
    strictPort: true,
    port: 4200,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: false,
    minify: true,
    polyfillModulePreload: false,
    polyfillDynamicImport: false,
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  optimizeDeps: {
    // noDiscovery suppresses the Vite 8 Rolldown bug where the scanner wrongly
    // injects react/jsx-runtime into .tsx files (SolidJS project).
    noDiscovery: true,
    include: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language',
      '@mswjs/data',
      // Pre-bundle every CJS sub-dependency of @vanilla-extract/css so the
      // browser gets proper ESM default exports without duplicating VE itself.
      '@vanilla-extract/css > cssesc',
      '@vanilla-extract/css > deepmerge',
      '@vanilla-extract/css > @emotion/hash',
      '@vanilla-extract/css > css-what',
      '@vanilla-extract/css > dedent',
      '@vanilla-extract/css > deep-object-diff',
      '@vanilla-extract/css > lru-cache',
      '@vanilla-extract/css > media-query-parser',
      '@vanilla-extract/css > modern-ahocorasick',
      '@vanilla-extract/css > picocolors',
    ],
  },
}));

export default config;
