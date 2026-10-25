# ReadLynx Website

Landing + download site for **ReadLynx** — Next.js static export, hosted on GitHub Pages.

- Live: `https://readlynx-books.github.io/` (English default at `/en/`, Persian at `/fa/`)
- App repo (downloads source): `https://github.com/Regestea/readlynx`
- Theme tokens are 1:1 with `readlynx/src/styles/variables.css`

## Dev

```bash
npm install
npm run dev
# open http://localhost:3000/en or /fa
```

## Build (static)

```bash
npm run build
# output in ./out — serve it statically
```

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and deploys `./out` to Pages.

- Root domain (`readlynx-books.github.io`): keep `NEXT_PUBLIC_BASE_PATH=""`.
- Project page (`…github.io/readlynx-website`): set `NEXT_PUBLIC_BASE_PATH=/readlynx-website`.

## TODO after first deploy

- Put your real card number + holder name in `SITE.donateCardNumber` / `SITE.donateCardHolder` (`lib/site.ts`).
- Add real screenshots to `public/` and wire them into the hero.
- Update `NEXT_PUBLIC_SITE_URL` if the domain changes.
