const React = require('react')
const { connect } = require('react-redux')
const { updateCurrentStyle } = require('../redux/ActionCreators')

const StyleButton = React.createClass({
  handleClick(style) {
    this.props.dispatchUpdateCurrentStyle(style)
  },

  render(){
    var { value, currentStyle } = this.props    
    var active;
    var k = Object.keys(value.style)[0]
    var v = value.style[k]
    if (currentStyle[k] === v){
      active = true
    } else {
      active = false
    }

    return (
      <button
        style={value.style}
        className={active ? 'active-button' : ''}
        onClick={() => this.handleClick(value.style)}>
         { value.name } </button>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    currentStyle: state.currentStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdateCurrentStyle (style) {
      dispatch(updateCurrentStyle(style))
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(StyleButton)