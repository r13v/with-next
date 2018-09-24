import React, { Fragment } from 'react'
import Head from 'next/head'
import { defineMessages, intlShape, FormattedMessage } from 'react-intl'
import { compose } from 'ramda'

import { Button } from 'src/ui'
import { withIntl, storeToken, CurrentUser } from 'src/common'
import { redirect } from 'src/lib'

const i18n = defineMessages({
  title: {
    id: 'login.title',
    defaultMessage: 'Login page for {name}.'
  },
  button: {
    id: 'login.button',
    defaultMessage: '{name}, please log in.'
  }
})

const LoginPageView = ({ intl }) => {
  return (
    <Fragment>
      <Head>
        <title key="title">
          {intl.formatMessage(i18n.title, { name: 'Alex' })}
        </title>
      </Head>

      <CurrentUser>
        {({ setUser }) => {
          return (
            <Button
              onClick={() => {
                storeToken('123')
                redirect({}, '/')
                setUser('123')
              }}
            >
              <FormattedMessage {...i18n.button} values={{ name: 'Alex' }} />
            </Button>
          )
        }}
      </CurrentUser>
    </Fragment>
  )
}

LoginPageView.propTypes = {
  intl: intlShape
}

const enhance = compose(withIntl)

export const LoginPage = enhance(LoginPageView)
