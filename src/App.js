import React, { Component } from 'react'
import logo from './logo.svg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Routes = [
  { path: '/users', label: '유저 검색' },
  { path: '/tags', label: '태그 검색' },
  { path: '/links', label: 'Links' },
]

const LeftNav = (props) => {
  const { handleNavOpen, open } = props
  const MenuItems = Routes.map(({ path, label }) => {
    return (
      <MenuItem key={`r_${label}`} onTouchTap={() => handleNavOpen(false)}>
        <Link to={path}>{label}</Link>
      </MenuItem>
    )
  })
  return (
    <Drawer open={open} docked={false} onRequestChange={handleNavOpen}> {MenuItems} </Drawer>
  )
}

const Child = ({ match: { params: { id } } }) => <h3>ID : {`I'm in "/${id}"!`}</h3>

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleNavOpen = open => this.setState({ open })

  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div>
              <AppBar
                title={<Link to="/">Title</Link>}
                onLeftIconButtonTouchTap={() => this.handleNavOpen(true)}
              />
              <LeftNav open={this.state.open} handleNavOpen={this.handleNavOpen}/>
            </div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2>Welcome to React</h2>
            </div>
            <Route path="/:id" component={Child}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App
