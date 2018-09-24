// See https://github.com/zeit/next.js/tree/canary/examples/with-react-intl

const { readFileSync } = require('fs')
const { basename } = require('path')

const IntlPolyfill = require('intl')
const accepts = require('accepts')
const glob = require('glob')
const flat = require('flat')

// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
Intl.NumberFormat = IntlPolyfill.NumberFormat
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat

// Get the supported languages by looking for translations in the `lang/` dir.
const languages = glob.sync('./i18n/*.json').map((f) => basename(f, '.json'))

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map()

const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0]

  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
    const localeDataScript = readFileSync(localeDataFile, 'utf8')
    localeDataCache.set(lang, localeDataScript)
  }

  return localeDataCache.get(lang)
}

const flatTranslationCache = new Map()

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => {
  const translation = require(`../src/i18n/${locale}.json`)

  if (!flatTranslationCache.has(locale)) {
    const flatTranslation = flat(translation)
    flatTranslationCache.set(locale, flatTranslation)
  }

  return flatTranslationCache.get(locale)
}

const createLocaleMiddleware = (dev) => (req, res, next) => {
  const accept = accepts(req)
  const locale = accept.language(dev ? ['en'] : languages)

  req.locale = locale
  req.localeDataScript = getLocaleDataScript(locale)
  req.messages = getMessages(locale)

  next()
}

module.exports = createLocaleMiddleware
