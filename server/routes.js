const routes = require('next-routes')

// See https://github.com/fridays/next-routes
module.exports = routes()
  .add({ name: 'dashboard', pattern: '/', page: 'dashboard' })
  .add({ name: 'login', pattern: '/login' })
