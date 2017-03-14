const React = require('react')
const { connect } = require('react-redux')
const { setCurrentStyle } = require('../redux/ActionCreators')

const Cell = React.createClass({

  getInitialState(){
    return {
      value: '',
      style: {}
    }
  },

  handleChange(e){
    this.setState({ value: e.target.value })
  },

  clicked(){
    this.props.dispatchSetCurrentStyle(this.state.style)
  },

  componentWillReceiveProps(props){
    this.setState({ style: props.currentStyle })
  },

  render(){
    var { value, style } = this.state
    console.log(style)

    return (
      <td onClick={this.clicked}>
        <input className='input-cell' style={style}
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
    currentStyle: state.currentStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetCurrentStyle (style) {
      dispatch(setCurrentStyle(style))
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cell)