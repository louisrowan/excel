const React = require('react')
const Cell = require('../components/Cell')

const SpreadsheetContainer = React.createClass({

  getInitialState(){
    return {
      cells: this.getCells()
    }
  },

  getCells(){
    return [[{},{},{}],[{},{},{}],[{},{},{}]]
  },

  render(){
    var { cells } = this.state
    console.log(cells)

    var renderCells = cells.map((row) => {
      var row = row.map((cell) => {
        return <Cell />
      })
      return <tr>{row}</tr>
    })

    return (
      <div id='spreadsheet-container'>
        <table>
          <tbody>
            { renderCells }
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = SpreadsheetContainer