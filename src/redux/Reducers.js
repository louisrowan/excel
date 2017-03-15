export const SET_CURRENT_STYLE = 'set_current_style'
export const UPDATE_CURRENT_STYLE = 'update_current_style'
export const UPDATE_CURRENT_CELL = 'update_current_cell'

const DEFAULT_STATE = {
  currentStyle: {}
}

const setCurrentStyle = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { currentStyle: action.style})
  return newState
}

const updateCurrentStyle = (state, action) => {
  const newState = {}
  const newStyle = {}

  var k = Object.keys(action.style)[0]
  var v = action.style[k]


  if (state.currentStyle[k] === v) {
    Object.assign(newStyle, state.currentStyle, {[k]: ''})
  } else {
    Object.assign(newStyle, state.currentStyle, {[k]: v})
  }

  Object.assign(newState, state)
  newState.currentStyle = newStyle

  return newState

}

const updateCurrentCell = (state, action) => {
  const newState = {}
  const current = {currentCell: action.cell}
  Object.assign(newState, state, current)
  return newState
}

export const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_STYLE:
      return setCurrentStyle(state, action)
    case UPDATE_CURRENT_STYLE:
      return updateCurrentStyle(state, action)
    case UPDATE_CURRENT_CELL:
      return updateCurrentCell(state, action)
    default:
      return state
  }
}