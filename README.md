# NextJS - Tailwindcss - Framer Motion Boilerplate

## 🗄 Directory Structure

```
|-- components
    |-- container.js *// A simple container component to wrap areas in a max width*
    |-- fancyLink.js *// A simple wrapper around `next/link`
    |-- footer.js *// Example footer component*
    |-- header.js *// Example header component*
    |-- layout.js *// Layout component that can be used to wrap your pages in a global layout*
|-- helpers
    |-- seo.config.js *// default SEO configuration helper, imported in `pages/_app.js`*
    |-- transitions.js *// re-usable framer motion transition helper with a basic 'fade' transition to get started*
|-- pages
    |-- _app.js *// Includes default SEO component & Framer motion AnimatePresence init*
    |-- _document.js *// Default Next document component*
    |-- about.js
    |-- index.js
|-- public *// Next public assets*
|-- styles
    |-- _fonts.css *// custom webfont styles*
    |-- _typography.css *// custom typographical styles*
    |-- main.css *// Tailwind init and custom css imports*
|-- .gitignore
|-- jsconfig.json *// module aliasing*
|-- postcss.config.js *// Tailwind, CSS import, CSS nesting init*
|-- next.config.js *// Prefer Preact to React*
|-- package.json
|-- README.md
|-- tailwind.config.js
```
