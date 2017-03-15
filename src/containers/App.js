const React = require('react')
const SpreadsheetContainer = require('./SpreadsheetContainer')
const MenuContainer = require('./MenuContainer')
const { connect } = require('react-redux')
const { endCopy } = require('../redux/ActionCreators')

const App = React.createClass({

  getInitialState(){
    return {
      start: '',
      dragging: false
    }
  },

  componentDidMount(){
    window.addEventListener('keydown', (e) => this.handleKeyPress(e))
    window.addEventListener('mousedown', (e) => this.handleDragStart(e))
    window.addEventListener('mousemove', (e) =>
      this.handleDragOver(e))
    window.addEventListener('mouseup', (e) => this.handleDragEnd(e))
  },

  handleDragStart(e){
    this.setState({ start: e.target })
    this.setState({ dragging: true})
  },

  handleDragOver(e){
    if (this.state.dragging){
      
    }
  },

  handleDragEnd(e) {
    if ((e.target.classList.contains('input-cell') && this.state.start.classList.contains('input-cell'))) {
      var start_id = this.state.start.id.split('_')
      var end_id = e.target.id.split('_')

      var start_row = +start_id[0]
      var start_col = +start_id[1]
      var end_row = +end_id[0]
      var end_col = +end_id[1]
      console.log(start_row, start_col)
      console.log(end_row, end_col)
    }

    this.setState({ dragging: false, start: '' })
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