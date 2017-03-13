const React = require('react')
const SpreadsheetContainer = require('./SpreadsheetContainer')
const MenuContainer = require('./MenuContainer')

const App = React.createClass({
  render(){
    return (
      <div id='app-container'>
        <MenuContainer />
        <SpreadsheetContainer />
      </div>
    )
  }
})

module.exports = App