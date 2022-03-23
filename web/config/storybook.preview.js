import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const viewports = {
  phone: {
    name: 'phone',
    styles: {
      width: '1080px',
      height: '2246px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
}

export const parameters = {
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...viewports,
    },
  },
}
