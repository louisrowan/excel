const React = require('react')
const SpreadsheetContainer = require('./SpreadsheetContainer')
const MenuContainer = require('./MenuContainer')
const { connect } = require('react-redux')
const { endCopy } = require('../redux/ActionCreators')

const App = React.createClass({

  componentDidMount(){
    window.addEventListener('keydown', (e) => this.handleKeyPress(e))
  },

  handleKeyPress(e){
    if (e.code === 'Escape'){
      console.log('helloooo')
      this.props.dispatchEndCopy()

    }
  },

  render(){
    return (
      <div id='app-container'>
        <MenuContainer />
        <SpreadsheetContainer />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEndCopy(){
      dispatch(endCopy())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)