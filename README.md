# BC-Blocks

Open-source UI block playground built on Tailwind CSS v4.

## What is included

- 60+ responsive section blocks
- live preview and code view
- light and dark rendering
- brand color switcher
- keyboard navigation

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## How to use blocks

1. Choose a category from the sidebar.
2. Pick a block and choose a brand color.
3. Toggle light/dark and preview/code mode.
4. Copy the generated markup.
5. Paste into your project and adapt as needed.

## Tech notes

- Rendering runtime: React
- Preview styling: Tailwind CSS v4 browser runtime
- Goal: evolve this into a fully branded open-source block library

## Attribution

BC-Blocks includes adapted code from Tailblocks (MIT). The original copyright and permission notice are preserved in `LICENSE`.

## Contributing

Please read `CONTRIBUTING.md` before opening a pull request. Community expectations are documented in `CODE_OF_CONDUCT.md`.

## Deployment (GitHub Pages)

- GitHub Actions builds and deploys Pages from `main` using `.github/workflows/deploy-pages.yml`.
- CI checks run from `.github/workflows/ci.yml` for pull requests and pushes to `main`.
- Expected site URL: `https://nemesis312.github.io/bc-blocks/`.

## License

MIT. See `LICENSE`.
