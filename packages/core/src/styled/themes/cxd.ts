import { DefaultTheme } from 'styled-components'

import * as Types from '@/utils/types'

export const cxdTheme: Types.DeepPartial<DefaultTheme> = {
  ns: 'cxd-',
  name: 'cxd',
  text: '淡雅主题',
  colors: {
    bodyBg: '#fff',
    text: '#666',
    layoutHeaderBg: '#f5f5f5',
    linkHover: 'rgb(18, 140, 238)',
    border: '#e8ebee',
  },
}
