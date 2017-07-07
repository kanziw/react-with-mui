import React, { Component } from 'react'
import logo from './logo.svg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const LeftNav = (props) => {
  const { handleNavOpen, open } = props
  return (
    <Drawer open={open} docked={false} onRequestChange={handleNavOpen}>
      <MenuItem onTouchTap={() => handleNavOpen(false)}>Menu Item</MenuItem>
      <MenuItem onTouchTap={() => handleNavOpen(false)}>Menu Item 2</MenuItem>
    </Drawer>
  )
}

const Child = ({ match: { params: { id } } }) => <h3>ID : {`I'm in "/${id}"!`}</h3>

class App extends Component {
  state = { open: false }

  handleNavToggle = () => this.setState({ open: !this.state.open })
  handleNavOpen = open => this.setState({ open })

  render () {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div>
              <RaisedButton label="Open Drawer" onTouchTap={this.handleNavToggle}/>
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
