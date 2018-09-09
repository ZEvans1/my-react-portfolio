import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Main from './Components/main';

const styles = {
  root: {
    background: 'rgba(0,0,0,0)'
  }
}

class App extends Component {
  
  render() {
    return (
      <div>
        <AppBar position="static" className={this.props.classes.root}>
          <Toolbar color='secondary'>
            <Typography variant="title">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <Main/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
