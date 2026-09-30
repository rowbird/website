# rowbird.dev

The website of [Rowbird](https://github.com/rowbird/rowbird): scheduled SQL reports and data alerts,
self-hosted. The documentation lives in the main repository and is published at
[docs.rowbird.dev](https://docs.rowbird.dev).

Built with [Astro](https://astro.build) and Tailwind CSS. Static, no trackers, fonts served from the
site itself.

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site in dist/
```

Every push to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`), served at
rowbird.dev (`public/CNAME`).

The launch video and the screenshots come from a real Rowbird running the demo data. Brand colors:
orange `#E8762B`, bark `#3B2415`, paper `#FAF7F2`. Type: Fraunces, IBM Plex Sans and IBM Plex Mono.

Licensed under the Apache License 2.0.
