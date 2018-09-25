<div align="center">
  <h1>With next.js</h1>
</div>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/gilaz/with-next.svg)](https://greenkeeper.io/)

## Stack

- [asdf](https://github.com/asdf-vm/asdf) to manage node.js version.
- [React](https://reactjs.org/) rendering
- [React-intl](https://github.com/yahoo/react-intl) for internationalization

## Development

You should have node.js v10.9+ and [watchman](https://facebook.github.io/watchman/docs/install.html).

- `git clone git@github.com:gilaz/with-next.git`
- `npm i` - install dependencies

- `npm run dev` - start server

## NPM scripts

- `yarn i18n:extract` - extract strings to `src/i18n`
- `npm run dev` - start dev server
- `npm run build` - build
- `npm run start` - start server
- `npm run analyze` - analyze the bundle
