import React from 'react'
import { ThemeProvider } from 'styled-components'

import { hoistHocStatics } from 'src/lib'
import * as theme from 'src/theme'

const withThemeHoc = (W) => {
  const WithTheme = (props) => (
    <ThemeProvider theme={theme}>
      <W {...props} />
    </ThemeProvider>
  )

  return WithTheme
}

export const withTheme = hoistHocStatics(withThemeHoc)
