# DDCNorth website

Static website imported from `DDCNorth-Website(1).zip`.

Website address: <https://ddcnorth.github.io/website/>

## Preview locally

No build or dependency installation is required:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>.

## Publish changes

Push changes to `main`. The GitHub Actions workflow in
`.github/workflows/deploy-pages.yml` publishes `index.html`, `assets/`, and
`licenses/` to GitHub Pages. Documentation-only changes do not redeploy the site.
The workflow can also be run manually from the repository's Actions tab.

GitHub Pages must use **GitHub Actions** as its publishing source. This repository
is public as authorized by its owner for hosting on GitHub Free.

## Files

- `index.html`: page content, inline styles, logos, and embedded fonts.
- `assets/`: header/footer styles and navigation/search behavior.
- `licenses/`: licenses for the bundled Inter and Space Mono fonts.
- `README.txt`: original export notes.
- `docs/`: publication plan, status, and requirement verification.

Contact links open the visitor's email application. Search and navigation run
entirely in the browser.
