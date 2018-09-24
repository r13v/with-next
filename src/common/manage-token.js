import cookie from 'cookie'

import { COOKIE_MAX_AGE } from 'src/config'

export const storeToken = (token) => {
  document.cookie = cookie.serialize('token', token, { maxAge: COOKIE_MAX_AGE })
}
