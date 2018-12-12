import React from 'react';
import ReactDOM from 'react-dom';
import ExampleApp from './ExampleApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

const App = () => (
  <MuiThemeProvider>
    <ExampleApp />
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
