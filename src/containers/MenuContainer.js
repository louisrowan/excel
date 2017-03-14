const React = require('react')
const StyleButton = require('../components/StyleButton')

const MenuContainer = React.createClass({
  getInitialState(){
    return {
      styleButtons: [
        { name: 'B', style: {fontWeight: 'bold'}},
        { name: 'I', style: {fontStyle: 'italic'}},
        { name: 'U', style: {textDecoration: 'underline'}},
      ]
    }
  },

  render(){
    var { styleButtons } = this.state

    var buttons = styleButtons.map((style, i) => {
      return <StyleButton key={i} value={style} />
    })

    return (
      <div id='menu-container'>
        { buttons }
      </div>
    )
  }
})

module.exports = MenuContainer