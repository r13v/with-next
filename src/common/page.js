import { compose } from 'ramda'

import { withAuth } from './with-auth'
import { withIntl } from './with-intl'
import { withLayout } from './with-layout'
import { withTheme } from './with-theme'

export const pageWithoutLayout = compose(
  withTheme,
  withIntl
)

export const page = compose(
  pageWithoutLayout,
  withLayout
)

export const privatePage = compose(
  withAuth(),
  page
)

export const guestPage = compose(
  withAuth({ isPrivate: false, url: '/' }),
  page
)
