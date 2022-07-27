import { render } from '@redwoodjs/testing/web'

import { Html5 } from 'src/assets'
import LinkImage from './LinkImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinkImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkImage svg={<Html5 />} alt='Html5' />)
    }).not.toThrow()
  })
})
