import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const OldSchoolMenuLink = ({children, to, exact}) => {
  return (
    <Route path={to} exact={exact} children={({match}) => (
      <div className={match ? 'active' : ''}>
        {match ? '>' : ''}
        <Link to={to}>
          {children}
        </Link>
      </div>
    )}/>
  )
}

const App = () => (
  <Router>
    <div>
      <OldSchoolMenuLink exact={true} to='/'>
        Home
      </OldSchoolMenuLink>
      <OldSchoolMenuLink to='/about'>
        About
      </OldSchoolMenuLink>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
)

render(<App />, document.getElementById('root'))
