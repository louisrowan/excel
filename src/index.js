const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./containers/App')
require('./stylesheets/index.css')
require('./stylesheets/app.css')
require('./stylesheets/spreadsheet.css')
require('./stylesheets/menu.css')

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
