import React from 'react'
import styled from 'styled-components'

import { Header } from './header'

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex: 1;
`

export const BaseLayout = (props) => (
  <Root>
    <Header />
    <Main {...props} />
  </Root>
)
