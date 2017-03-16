const React = require('react')
const { connect } = require('react-redux')
const { setCurrentStyle, updateCurrentCell, endPaste, handleDrag, updateAddFunction } = require('../redux/ActionCreators')

const Cell = React.createClass({

  getInitialState(){
    return {
      value: '',
      style: {},
      active: false,
      copy: false
    }
  },

  handleChange(e){
    this.setState({ value: e.target.value })
    if (this.state.active) {
    var param = {id: this.props.id, value: e.target.value}
    this.props.dispatchUpdateCurrentCell(param)
    }
  },

  handleFocus(){
    var param = {id: this.props.id, value: this.state.value, style: this.state.style}
    this.props.dispatchUpdateCurrentCell(param)
    this.props.dispatchSetCurrentStyle(this.state.style)
  },

  componentWillReceiveProps(props){
    if (props.functionAdd === this.props.id){
      if (props.addedArray.length === 2)
        this.handleFunctionValue('add', addedArray)
    }
    if (!props.copy) {
      this.setState({ copy: false })
    }
    if (props.paste && (props.currentCell.id === this.props.id)) {
      this.setState({ style: props.style, value: props.value })
      this.props.dispatchEndPaste()
      this.props.dispatchSetCurrentStyle(props.style)
    } else if ((props.copy === this.props.id) && (props.currentCell.id === this.props.id)) {
      this.setState({ copy: true })
    } else if (props.currentCell.id === this.props.id) {
      this.setState({ style: props.currentStyle, active: true })
    } else {
      this.setState({ active: false})
    }
    
  },

  handleFunctionValue(type, array){
    if (type === 'add') {
      this.setState({ value: this.createAddValue(array)})
    }
  }

  createAddValue(array){
    var first = document.getElementById(array[0])
    var second = document.getElementById(array[1])
  }

  mouseOver(){
    // if (this.props.dragged) {
    //   this.props.handleDrag(this.props.id)
    // }
  },

  handleDrag(coords){
    // var startX = coords[0][1]
    // var startY = coords[0][0]
    // var endX = coords[1][1]
    // var endY = coords[1][1]
    // var id = this.props.id.split('_')
    // if ((+startX < +id[0] < +endX || +startX > +id[0] > +endX) && (+startY < +id[1] < +endY || +startY > +id[1] > +endY)) {
    //   this.setState({ style: {backgound: 'blue'}})
    //   console.log('fit')
    // } else {
    //   console.log('did not fit')
    // }

  },

  handleClick(){
    if (this.props.functionAdd){
      this.props.dispatchUpdateAddFunction(this.props.id)
    }
  },

  render(){
    var { value, style, active, copy } = this.state
    var { id } = this.props

    var cellClass;
    if (active) cellClass += ' cell-active'
    if (copy) cellClass += ' cell-copy'

    return (
      <td onMouseOver={this.mouseOver}
      onFocus={this.handleFocus}
      onClick={this.handleClick}>
        <input className={'input-cell ' + cellClass}
          style={style}
          type='text'
          value={value}
          id={id}
          onChange={(e) => this.handleChange(e)}
          />
      </td>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    currentStyle: state.currentStyle,
    currentCell: state.currentCell,
    paste: state.paste,
    copy: state.copy,
    value: state.value,
    style: state.style,
    dragged: state.dragged,
    functionAdd: state.functionAdd
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetCurrentStyle (style) {
      dispatch(setCurrentStyle(style))
    },
    dispatchUpdateCurrentCell (cell) {
      dispatch(updateCurrentCell(cell))
    },
    dispatchEndPaste(){
      dispatch(endPaste())
    },
    dispatchHandleDrag(e){
      dispatch(handleDrag(e))
    },
    dispatchUpdateAddFunction(id){
      dispatch(updateAddFunction(id))
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cell)