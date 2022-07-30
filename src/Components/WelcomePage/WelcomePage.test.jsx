import { render } from '@testing-library/react'
import WelcomePage from './WelcomePage'

describe('WelcomePage', () => {
  describe('Unit Tests', () => {
    const setUp = () => render(<WelcomePage />)
    test('Should render Welcome Page', () => {
      const { getByTestId } = setUp()
      const appTitle = getByTestId('appTitle')
      const appDirections = getByTestId('appDirections')
      expect(appTitle).toBeInTheDocument()
      expect(appDirections).toBeInTheDocument()
    })
  })
})
