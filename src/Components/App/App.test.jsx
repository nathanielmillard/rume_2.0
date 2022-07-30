import { render } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  describe('Unit Tests', () => {
    const setUp = () => render(<App />)
    test('Should render a footer on the App', () => {
      const { getByTestId } = setUp()
      const homeButton = getByTestId('homeButton')
      const randomQuote = getByTestId('randomQuote')
      expect(homeButton).toBeInTheDocument()
      expect(randomQuote).toBeInTheDocument()
    })

    test('Should see a random quote generated in the footer', () => {
      const { getByTestId } = setUp()
      const randomQuote = getByTestId('randomQuote')
      expect(randomQuote).toBeInTheDocument()
    })

    test('Should see the open door icon generated in the footer', () => {
      const { getByTestId } = setUp()
      const homeButton = getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
    })
  })

  describe('Integration Tests', () => {
    test('Should render Lobby when the "door" icon is clicked', () => {
      const { getByTestId } = setUp()
      const homeButton = getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
      userEvent.click(homeButton)
      const feelingPrompt = getByTestId('checkInQuestion')
      expect(feelingPrompt).toBeInTheDocument()
    })

    test('Should render the Reflection page when the reflect button is clicked', () => {
      const { getByTestId, getByText } = setUp()
      const homeButton = getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
      userEvent.click(homeButton)
      const fineButton = getByText('Fine')
      expect(fineButton).toBeInTheDocument()
      userEvent.click(fineButton)
      const reflectButton = getByTestId('reflect')
      userEvent.click(reflectButton)
      const reflectionsButton = getByTestId('linkToAllReflections')
      expect(reflectionsButton).toBeInTheDocument()
    })

    test('Should render the Reflection Library when the "show all reflections" button is clicked', () => {
      const { getByTestId } = setUp()
      const homeButton = getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
      userEvent.click(homeButton)
      const fineButton = getByText('Fine')
      expect(fineButton).toBeInTheDocument()
      userEvent.click(fineButton)
      const reflectButton = getByTestId('reflect')
      userEvent.click(reflectButton)
      const reflectionsButton = getByTestId('linkToAllReflections')
      expect(reflectionsButton).toBeInTheDocument()
      userEvent.click(reflectionsButton)
      const library = getByTestId('reflections')
      expect(library).toBeInTheDocument()
    })

    test('Should render the Feeling page when feel is clicked', () => {
      const { getByTestId, getByText } = setUp()
      const homeButton = getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
      userEvent.click(homeButton)
      const fineButton = getByText('Fine')
      expect(fineButton).toBeInTheDocument()
      userEvent.click(fineButton)
      const feelButton = getByTestId('feel')
      userEvent.click(feelButton)
      const directions = getByText('Welcome to the feeling room')
      expect(directions).toBeInTheDocument()
    })

    test('Should render the Breathing page when breathe is clicked', () => {
      const { getByTestId, getByText } = setUp()
      const homeButton = screen.getByTestId('homeButton')
      expect(homeButton).toBeInTheDocument()
      userEvent.click(homeButton)
      const fineButton = screen.getByText('Fine')
      expect(fineButton).toBeInTheDocument()
      userEvent.click(fineButton)
      const breatheButton = screen.getByTestId('breathe')
      userEvent.click(breatheButton)
      const directions = getByTestId('instructions')
      expect(directions).toBeInTheDocument()
    })
  })
})
