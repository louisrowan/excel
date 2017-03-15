const React = require('react')
const { connect } = require('react-redux')
const { setCurrentStyle, updateCurrentCell, endPaste } = require('../redux/ActionCreators')

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

  render(){
    var { value, style, active, copy } = this.state
    var { id } = this.props

    var cellClass;
    if (active) cellClass += ' cell-active'
    if (copy) cellClass += ' cell-copy'

    return (
      <td onFocus={this.handleFocus}>
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
    style: state.style
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
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cell)