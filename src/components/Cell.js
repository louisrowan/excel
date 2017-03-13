const React = require('react')

const Cell = React.createClass({
  render(){
    return (
      <td>
        <input type='text' />
      </td>
    )
  }
})

module.exports = Cell