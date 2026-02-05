# Paloma Bordons - Author Website

Git project for palomabordons.com.

Currently served by Netlify.

## Project Structure

```
paloweb-jekyll/
├── _config.yml          # Jekyll configuration
├── _layouts/            # HTML layout templates
│   ├── global.html      # Base template with header/footer
│   ├── standard_page.html
│   └── single_page.html
├── styles/              # CSS files (one per section)
├── js/                  # JavaScript files
├── images/              # Site images organized by section
├── index.html           # Home page
├── leer.html
├── catar.html
├── mirar.html
├── vida.html
├── prensa.html
├── contacto.html
├── Gemfile              # Ruby dependencies
└── Gemfile.lock
```

## Prerequisites

- Ruby (2.7+)
- Bundler

## Local Development

1. Install dependencies:

   ```bash
   bundle install
   ```

2. Serve the site locally:

   ```bash
   bundle exec jekyll serve
   ```

3. Open http://localhost:4000 in your browser.

## Build for Production

```bash
bundle exec jekyll build
```

The generated static site will be in the `_site/` directory.
