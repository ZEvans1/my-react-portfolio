import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    background: 'green'
  }
}

class App extends Component {
  
  render() {
    return (
      <div>
        <AppBar className={this.props.classes.root}>
          <Toolbar color='secondary'>
            <Typography variant="title">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles) (App);
