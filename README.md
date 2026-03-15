# Christopher Baptiste — Developer Portfolio

Personal portfolio site built with Rails 8, React 19, and Inertia.js. Showcases production projects, technical skills, and a contact form — deployed at [christopherbaptiste.xyz](https://christopherbaptiste.xyz).

## Features

- React 19 + Inertia.js SPA experience served by Rails
- Copper/teal aurora gradient theme with animated CSS blobs (no Three.js)
- Animated hero with typing effect and live metrics card
- Projects section with real screenshots from live production apps
- Tech badge grid categorized by Frontend / Backend / Database / Tools
- Stats section with CountUp animation on scroll
- Contact form wired to Rails backend with CSRF protection
- Responsive, accessible, keyboard-navigable layout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Rails 8.0 |
| Frontend | React 19, Inertia.js |
| Styling | Tailwind CSS v4, custom CSS (no UI library) |
| Animations | Framer Motion, CSS keyframes |
| Build | esbuild (JS), @tailwindcss/cli (CSS) |
| Deployment | Kamal (Docker) |
| Domain | christopherbaptiste.xyz |

## Projects Showcased

- **Shopzilla** — Gloria's Embroidery e-commerce platform · [gloriasembroideryshop.com](https://gloriasembroideryshop.com)
- **Libra Arcana** — Digital bookstore with Stripe & secure downloads · [libra-arcana.online](https://libra-arcana.online)
- **Tethered** — Full-featured social media platform · [tethered.site](https://tethered.site)
- **Cyrus Baptiste Portfolio** — Client portfolio site · [cyrusbaptiste.com](https://cyrusbaptiste.com)

## Getting Started

```bash
git clone https://github.com/chrisbaptiste83/dev_portfolio
cd dev_portfolio
bundle install
npm install
```

### Run locally

```bash
bin/dev
```

Runs Rails server, esbuild watcher, and CSS watcher via Foreman/Overmind.

### Build assets manually

```bash
npm run build       # JS
npm run build:css   # CSS
```

## Deployment

Deployed via [Kamal](https://kamal-deploy.org) to a Linode VPS:

```bash
kamal deploy
```

Requires `RAILS_MASTER_KEY` and `KAMAL_REGISTRY_PASSWORD` in `.kamal/secrets`.
