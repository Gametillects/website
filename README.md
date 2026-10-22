# DDCNorth website

Static website imported from `DDCNorth-Website(1).zip`.

Website address: <https://ddcnorth.com/>

## Preview locally

No dependency installation is required. Prepare the public files and serve them:

```sh
sh scripts/build.sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory _site
```

Open <http://127.0.0.1:8000/>.

The homepage introduces DDCNorth. Detailed content lives on separate pages:

- <http://127.0.0.1:8000/services/> — services and individual service panels.
- <http://127.0.0.1:8000/approach/> — Discover, Develop and Deliver.
- <http://127.0.0.1:8000/about/> — company and team.

Navigation and search work from any page. Earlier homepage section links route
to the corresponding new pages. Relative asset/link paths also support the
GitHub Pages `/website/` prefix.

## Publish changes

Cloudflare Pages is the primary host. Its Git integration connects directly to
`ddcnorth/website`: pushes to `main` build and deploy production; pushes to other
branches create preview deployments.

Cloudflare project settings:

- Project: `ddcnorth-website`
- Production branch: `main`
- Framework preset: None
- Build command: `sh scripts/build.sh`
- Build output directory: `_site`
- Root directory: repository root
- Custom domains: `ddcnorth.com` and `www.ddcnorth.com`

The build publishes only `index.html`, `404.html`, `services/`, `approach/`,
`about/`, `assets/`, and `licenses/` (plus `.nojekyll`).
Repository documentation and configuration are excluded. No deployment token is
stored in GitHub; Cloudflare's GitHub App handles the native build pipeline.

The existing GitHub Actions workflow in `.github/workflows/deploy-pages.yml`
also publishes the same files to <https://ddcnorth.github.io/website/> as a
secondary deployment. Documentation-only changes do not trigger that workflow.

GitHub Pages must use **GitHub Actions** as its publishing source. This repository
is public as authorized by its owner for hosting on GitHub Free.

## Files

- `index.html`: homepage, with the original hero artwork and introduction.
- `services/`, `approach/`, `about/`: the three content pages.
- `assets/site.css`: shared original styles and embedded fonts.
- `assets/`: header/footer styles and shared navigation/search/accordion behavior.
- `scripts/build.sh`: shared static build used by Cloudflare and GitHub Pages.
- `404.html`: missing-page response for static hosting.
- `licenses/`: licenses for the bundled Inter and Space Mono fonts.
- `README.txt`: original export notes.
- `docs/`: publication plan, status, and requirement verification.

Contact links open the visitor's email application. Search and navigation run
entirely in the browser.
