const React = require('react')
const Cell = require('../components/Cell')

const SpreadsheetContainer = React.createClass({

  getInitialState(){
    return {
      cells: this.getCells()
    }
  },

  getCells(){
    var cells = []
    for (var r = 0; r < 10; r++){
      var row = []
      for (var c = 0; c < 6; c++){
        row.push({})
      }
      cells.push(row)
    }
    return cells
  },

  render(){
    var { cells } = this.state

    var renderCells = cells.map((row, ri) => {
      row = row.map((cell, ci) => {
        return <Cell key={`${ri}_${ci}`} id={`${ri}_${ci}`} />
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