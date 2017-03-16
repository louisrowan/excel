const { createStore } = require('redux')
const { rootReducer } = require('./Reducers')

const Store = createStore(rootReducer)

module.exports = Store