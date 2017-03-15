const React = require('react')
const { connect } = require('react-redux')
const { setCurrentStyle, updateCurrentCell } = require('../redux/ActionCreators')

const Cell = React.createClass({

  getInitialState(){
    return {
      value: '',
      style: {},
      active: false
    }
  },

  handleChange(e){
    this.setState({ value: e.target.value })
  },

  handleFocus(){
    this.props.dispatchUpdateCurrentCell(this.props.id)
    this.props.dispatchSetCurrentStyle(this.state.style)
  },

  componentWillReceiveProps(props){
    if (props.currentCell === this.props.id) {
      this.setState({ style: props.currentStyle, active: true })
    } else {
      this.setState({ active: false})
    }
  },

  render(){
    var { value, style, active } = this.state

    return (
      <td onFocus={this.handleFocus}>
        <input className={'input-cell ' + (active ? 'cell-active' : '')}
          style={style}
          type='text'
          value={value}
          onChange={(e) => this.handleChange(e)}
          />
      </td>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    currentStyle: state.currentStyle,
    currentCell: state.currentCell
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetCurrentStyle (style) {
      dispatch(setCurrentStyle(style))
    },
    dispatchUpdateCurrentCell (cell) {
      dispatch(updateCurrentCell(cell))
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cell)