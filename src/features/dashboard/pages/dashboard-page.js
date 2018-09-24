import React, { Fragment } from 'react'
import { FormattedMessage, defineMessages, intlShape } from 'react-intl'
import styled from 'styled-components'
import Head from 'next/head'
import { compose } from 'ramda'

import { th } from 'src/theme'
import { withIntl } from 'src/common'

const i18n = defineMessages({
  title: {
    id: 'dashboard.title',
    defaultMessage: 'Dashboard'
  },
  greeting: {
    id: 'dashboard.greeting',
    defaultMessage: 'Hello, {name}!'
  }
})

const Greeting = styled.h1`
  color: ${th('secondary')};
`

const DashboardPageView = ({ intl }) => {
  return (
    <Fragment>
      <Head>
        <title key="title">{intl.formatMessage(i18n.title)}</title>
      </Head>

      <Greeting>
        <FormattedMessage {...i18n.greeting} values={{ name: 'Alex' }} />
      </Greeting>
    </Fragment>
  )
}

DashboardPageView.propTypes = {
  intl: intlShape
}

const enhance = compose(withIntl)

export const DashboardPage = enhance(DashboardPageView)
