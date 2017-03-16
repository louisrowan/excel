const React = require('react')
const SpreadsheetContainer = require('./SpreadsheetContainer')
const MenuContainer = require('./MenuContainer')
const { connect } = require('react-redux')
const { endCopy, handleDrag, endDrag } = require('../redux/ActionCreators')

const App = React.createClass({

  getInitialState(){
    return {
      start: '',
      dragging: false
    }
  },

  componentDidMount(){
    window.addEventListener('keydown', (e) => this.handleKeyPress(e))
    // window.addEventListener('mousedown', (e) => this.handleDragStart(e))
    // window.addEventListener('mouseup', (e) => this.handleDragEnd(e))
  },

  handleDragStart(e){
    this.setState({ start: e.target })
    this.setState({ dragging: true})
  },

  handleDragEnd(e) {
    if ((e.target.classList.contains('input-cell') && this.state.start.classList.contains('input-cell'))) {

      console.log('show final drag state')
    } else {
      console.log('remove drag imagdry')
    }
    this.props.dispatchEndDrag()
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
    var update;
    var newVal;
    if (e.code === 'ArrowDown'){
      update = (+id[0] + 1).toString()
      newVal = [...update, ...id[1]].join('_')
    } else if (e.code === 'ArrowUp'){
      update = (+id[0] - 1).toString()
      newVal = [...update, ...id[1]].join('_')      
    } else if (e.code === 'ArrowLeft'){
      update = (+id[1] - 1).toString()
      newVal = [...id[0], ...update].join('_')      
    } else if (e.code === 'ArrowRight'){
      update = (+id[1] + 1).toString()
      newVal = [...id[0], ...update].join('_')
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
    },
    dispatchHandleDrag(coords){
      dispatch(handleDrag(coords))
    },
    dispatchEndDrag(){
      dispatch(endDrag())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)