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

    var renderCells = cells.map((row, ri) => {
      row = row.map((cell, ci) => {
        return <Cell key={`r${ri}_c${ci}`} id={`r${ri}_c${ci}`} />
      })
      return <tr key={ri}>{row}</tr>
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