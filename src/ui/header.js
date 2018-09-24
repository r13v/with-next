import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import cookie from 'cookie'
import styled from 'styled-components'

import { Button } from './button'

import { CurrentUser } from 'src/common'
import { redirect } from 'src/lib'
import { th } from 'src/theme'

const i18n = defineMessages({
  logo: {
    id: 'base-layout.header.logo',
    defaultMessage: 'LOGO'
  },
  logout: {
    id: 'base-layout.header.logout',
    defaultMessage: 'Logout'
  }
})

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  text-decoration: none;
  color: ${th('primary')};
  font-size: 24px;

  :active,
  :focus,
  :hover {
    text-decoration: none;
    color: ${th('primary')};
  }
`

export const Header = () => {
  return (
    <Root>
      <Logo>
        <FormattedMessage {...i18n.logo} />
      </Logo>

      <CurrentUser>
        {({ user, setUser }) => {
          if (!user) return null

          return (
            <Button
              onClick={() => {
                document.cookie = cookie.serialize('token', '', {
                  maxAge: -1 // Expire the cookie immediately
                })

                setUser(null)

                // Redirect to a more useful page when signed out
                redirect({}, '/login')
              }}
            >
              <FormattedMessage {...i18n.logout} />
            </Button>
          )
        }}
      </CurrentUser>
    </Root>
  )
}
