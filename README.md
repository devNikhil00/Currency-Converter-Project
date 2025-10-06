# Currency Converter

A small JavaScript currency converter project.

## Live demo

You can view the published demo on GitHub Pages:

https://devnikhil00.github.io/Currency-Converter-Project/

## Project structure

- `index.html` - Main HTML page.
- `script.js` - JavaScript logic for converting currencies.
- `style.css` - Styles for the page.
- `codes.js` - (Optional) Additional code or helper functions.

## Technologies

- HTML5 — markup and structure.
- CSS3 — styling and responsive layout.
- JavaScript (ES6+) — application logic and DOM manipulation.
- Fetch API (or other HTTP client) — to request exchange rates from a remote API if used.
- (Optional) Node.js — for running a local static server during development.

## How to run

This is a static web project. To run it:

1. Open `index.html` directly in your browser by double-clicking it.

OR

2. Serve it from a local static server (recommended for CORS or fetch use):

If you have Node.js installed, run one of the following from the project folder:

```powershell
# Using the built-in http.server in Python (if Python installed)
python -m http.server 8000

# Or use a simple Node.js package like "serve" (install once):
npm install -g serve
serve -l 8000
```

Then open `http://localhost:8000` in your browser.

## Notes

- If your project fetches exchange rates from an API, ensure you have an API key and update `script.js` accordingly.
- Add any environment or build artifacts to `.gitignore` (already included).

## License

MIT
