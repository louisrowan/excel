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
      this.props.dispatchEndCopy()
    }
    if (e.code === 'ArrowDown' ||
        e.code === 'ArrowUp' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowRight') {
      var id = this.props.currentCell.id.split('_')
      this.handleArrowPress(e, id)
    }
    
  },

  handleArrowPress(e, id) {
    if (e.code === 'ArrowDown'){
      var update = (+id[0] + 1).toString()
      var newVal = [...update, ...id[1]].join('_')
    } else if (e.code === 'ArrowUp'){
      var update = (+id[0] - 1).toString()
      var newVal = [...update, ...id[1]].join('_')      
    } else if (e.code === 'ArrowLeft'){
      var update = (+id[1] - 1).toString()
      var newVal = [...id[0], ...update].join('_')      
    } else if (e.code === 'ArrowRight'){
      var update = (+id[1] + 1).toString()
      var newVal = [...id[0], ...update].join('_')
    }
    var newCell = document.getElementById(newVal)
    if (newCell) newCell.focus()
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
  return {
    currentCell: state.currentCell
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchEndCopy(){
      dispatch(endCopy())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)