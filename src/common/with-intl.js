import { injectIntl } from 'react-intl'

import { hoistHocStatics } from 'src/lib'

export const withIntl = hoistHocStatics(injectIntl)
