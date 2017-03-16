const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./containers/App')
const Store = require('./redux/Store')
const { Provider } = require('react-redux')
require('./stylesheets/index.css')
require('./stylesheets/app.css')
require('./stylesheets/spreadsheet.css')
require('./stylesheets/cell.css')
require('./stylesheets/menu.css')

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
