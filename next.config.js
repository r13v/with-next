const { ANALYZE } = process.env

const publicRuntimeConfig = {
  // Will be available on both server and client
}

const serverRuntimeConfig = {
  // Will only be available on the server side
}

module.exports = {
  publicRuntimeConfig,
  serverRuntimeConfig,
  webpack(config, { isServer }) {
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      )
    }

    return config
  }
}
