const React = require('react')
const StyleButton = require('../components/StyleButton')
const { connect } = require('react-redux')
const {
  handleCopy,
  handlePaste,
  startAddFunction,
  endAddFunction } = require('../redux/ActionCreators')

const MenuContainer = React.createClass({
  getInitialState(){
    return {
      styleButtons: [
        { name: 'B', style: {fontWeight: 'bold'}},
        { name: 'I', style: {fontStyle: 'italic'}},
        { name: 'U', style: {textDecoration: 'underline'}},
        { name: '-', style: {textAlign: 'left'}},
        { name: '-', style: {textAlign: 'center'}},
        { name: '-', style: {textAlign: 'right'}}
      ]
    }
  },

  render(){
    var { styleButtons } = this.state
    var { dispatchHandleCopy, dispatchHandlePaste, currentCell, dispatchStartAddFunction, dispatchEndAddFunction } = this.props

    var buttons = styleButtons.map((style, i) => {
      return <StyleButton key={i} value={style} />
    })

    return (
      <div id='menu-container'>
        { buttons }
        <button
          onClick={() => dispatchHandleCopy(currentCell)}>
          Copy
        </button>
        <button
          onClick={() => dispatchHandlePaste(currentCell)}>
          Paste
        </button>
        {/*
        <button
          onClick={() => dispatchStartAddFunction()}>
          Add Function
        </button>
        <button
          onClick={() => dispatchEndAddFunction()}>
          Finish Add Function
        </button>
      */}
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
    dispatchHandleCopy(cell) {
      dispatch(handleCopy(cell))
    },
    dispatchHandlePaste(cell) {
      dispatch(handlePaste(cell))
    },
    dispatchStartAddFunction(){
      dispatch(startAddFunction())
    },
    dispatchEndAddFunction(){
      dispatch(endAddFunction())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuContainer)