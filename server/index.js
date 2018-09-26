const express = require('express')
const next = require('next')

const routes = require('./routes')
const createLocaleMiddleware = require('./localeMiddleware')

const { NODE_ENV = 'development', SSR_SERVER_PORT = 3000 } = process.env

const isDev = NODE_ENV !== 'production'

const app = next({ dev: isDev })
const handler = routes.getRequestHandler(app)

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(createLocaleMiddleware(isDev))

    server.use(handler)

    server.listen(SSR_SERVER_PORT, (err) => {
      if (err) {
        throw err
      }

      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${SSR_SERVER_PORT}`)
    })
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error(ex.stack)
    process.exit(1)
  })
