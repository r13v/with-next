import hoistStatics from 'hoist-non-react-statics'
import React, { Component } from 'react'

import { getCurrentUser } from './current-user'

import { redirect } from 'src/lib'

export const withAuth = (
  { isPrivate, url } = { isPrivate: true, url: '/login' }
) => (W) => {
  class WithLayout extends Component {
    static async getInitialProps(context) {
      const currentUser = await getCurrentUser(context)

      const accessGranted = isPrivate === !!currentUser

      if (!accessGranted) {
        redirect(context, url)
      }

      let pageProps = {}

      if (W.getInitialProps) {
        pageProps = await W.getInitialProps(context)
      }

      return { ...pageProps, currentUser }
    }

    render() {
      return <W {...this.props} />
    }
  }

  return hoistStatics(WithLayout, W)
}
