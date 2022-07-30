import './App.scss'
import { Component } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import WelcomePage from '../WelcomePage/WelcomePage.jsx'
import Lobby from '../Lobby/Lobby.jsx'
import ReflectionForm from '../ReflectionForm/ReflectionForm.jsx'
import ReflectionLibrary from '../ReflectionLibrary/ReflectionLibrary.jsx'
import FeelingRoom from '../FeelingRoom/FeelingRoom.jsx'
import BreathingRoom from '../BreathingRoom/BreathingRoom.jsx'
import openLogo from '../../Assets/openLogo.svg'
import { getQuote } from '../../apiCalls.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: '',
      mood: ''
    }
  }

  async componentDidMount () {
    const quote = await getQuote()
    this.setState({ quote: quote.content })
  }

  setMood = (e) => {
    const mood = e.target.innerText
    this.setState({ mood })
  }

  render () {
    return (
      <BrowserRouter >
        <main className="App">
          <Switch >
            <Route
              path='/reflecting/:feeling'
              render={({ match }) => {
                const feeling = match.params.feeling
                return (
                  <ReflectionForm mood={feeling} />
                )
              }}/>
            <Route
              path='/feeling/:feeling'
              render={({ match }) => {
                const feeling = match.params.feeling
                return (
                  <FeelingRoom mood={feeling}/>
                )
              }}/>
            <Route path='/myreflections'>
              <ReflectionLibrary />
            </Route>
            <Route
              path='/breathing/:feeling'
              render={({ match }) => {
                const feeling = match.params.feeling
                return (
                  <BreathingRoom mood={feeling} />
                )
              }}/>
            <Route path='/lobby'>
              <Lobby
                setMood={this.setMood}
                mood={this.state.mood}
              />
            </Route>
            <Route path='/'>
             <WelcomePage />
            </Route>
            </Switch>
          <footer>
            <NavLink activeClassName="activeHomeButton" to='/lobby'>
              <img
                className="homeButton"
                data-testid="homeButton"
                title="Return To Lobby"
                src={openLogo}
                alt="Navigate back to home page"
              />
            </NavLink>
            <p data-testid='randomQuote'>{this.state.quote}</p>
          </footer>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
