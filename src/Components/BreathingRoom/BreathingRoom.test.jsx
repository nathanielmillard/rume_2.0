import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import BreathingRoom from './BreathingRoom'
import { inhaleExhale } from './BreathingRoomAnimation.js'
jest.mock('./BreathingRoomAnimation.js')

describe('BreathingRoom', () => {
  const setUp = (mood) => {
    return render(
      <MemoryRouter>
        <BreathingRoom
          mood={mood}/>
      </MemoryRouter>
    )
  }
  describe('Unit Tests', () => {
    test('Should render a BreathingRoom', () => {
      const currentMood = 'Fine'
      const { getByTestId, getByText } = setUp(currentMood)
      const directions = getByTestId('instructions')
      expect(directions).toBeInTheDocument()
      const startButton = getByText('Start')
      expect(startButton).toBeInTheDocument()
    })
  })

  describe('Integration Tests', () => {
    test('Should not display instructions once breathing animation begins', () => {
      const currentMood = 'Fine'
      const { getByTestId, getByText } = setUp(currentMood)
      const directions = getByTestId('instructions')
      expect(directions).toBeInTheDocument()
      const startButton = getByText('Start')
      expect(startButton).toBeInTheDocument()
      userEvent.click(startButton)
      expect(directions).not.toBeInTheDocument()
    })
    test('Should invoke the animation function after start is clicked', () => {
      const currentMood = 'Fine'
      const { getByTestId, getByText } = setUp(currentMood)
      const directions = getByTestId('instructions')
      expect(directions).toBeInTheDocument()
      const startButton = getByText('Start')
      expect(startButton).toBeInTheDocument()
      userEvent.click(startButton)
      expect(directions).not.toBeInTheDocument()
      expect(inhaleExhale).toHaveBeenCalledTimes(1)
    })
  })
})
