const React = require('react')

const Cell = React.createClass({

  getInitialState(){
    return {
      value: ''
    }
  },

  handleChange(e){
    this.setState({ value: e.target.value })
  },

  render(){
    var { value } = this.state
    console.log(value)
    
    return (
      <td>
        <input
          type='text'
          value={value}
          onChange={(e) => this.handleChange(e)}
          />
      </td>
    )
  }
})

module.exports = Cell