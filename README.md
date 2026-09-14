# MUNCS Website

https://muncompsci.ca/

This website is built using [Astro](https://astro.build).

Use Node.js 24 (`nvm install && nvm use`) before installing dependencies. CI uses the same version from `.nvmrc`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm ci`          | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview the production build locally        |

Pull requests run a clean install and production build. Pushes to `main` also deploy to the existing `gh-pages` branch.

## Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.
