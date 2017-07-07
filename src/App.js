import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import './App.css';

const LeftNav = (props) => {
  return <Drawer
    open={props.open}>
    <MenuItem onClick={props.handleClose}>Menu Item</MenuItem>
    <MenuItem onClick={props.handleClose}>Menu Item 2</MenuItem>
  </Drawer>
}

class App extends Component {
  state = { open: false }

  handleToggle = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <MuiThemeProvider>
        <div className="App">
          <RaisedButton label="Open Drawer" onClick={this.handleToggle}/>
          <LeftNav open={this.state.open} handleClose={this.handleClose} />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
