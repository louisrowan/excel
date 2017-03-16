export const SET_CURRENT_STYLE = 'set_current_style'
export const UPDATE_CURRENT_STYLE = 'update_current_style'
export const UPDATE_CURRENT_CELL = 'update_current_cell'
export const HANDLE_COPY = 'handle_copy'
export const HANDLE_PASTE = 'handle_paste'
export const END_PASTE = 'end_paste'
export const END_COPY = 'end_copy'
export const HANDLE_DRAG = 'handle_drag'
export const END_DRAG = 'end_drag'
export const START_ADD_FUNCTION = 'start_add_function'
export const UPDATE_ADD_FUNCTION = 'update_add_function'
export const END_ADD_FUNCTION = 'end_add_function'

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

const handleCopy = (state, action) => {
  const newState = {}
  const copy = {value: state.currentCell.value, style: state.currentStyle, copy: state.currentCell.id}
  Object.assign(newState, state, copy)
  return newState
}

const endCopy = (state, action) => {
  const newState = {}
  const copy = {copy: false}
  Object.assign(newState, state, copy)
  return newState
}

const handlePaste = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {paste: true})
  return newState
}

const endPaste = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {paste: false})
  return newState
}

const handleDrag = (state, action) => {
  const newState = {}
  const dragged = {dragged: action.coords}
  Object.assign(newState, state, dragged)
  return newState
}

const endDrag = (state, action) => {
  const newState = {}
  const dragged = {dragged: false}
  Object.assign(newState, state, dragged)
  return newState
}

const startAddFunction = (state, action) => {
  const newState = {}
  const add = {functionAdd: state.currentCell.id}
  Object.assign(newState, state, add)
  return newState
}

const updateAddFunction = (state, action) => {
  const newState = {}
  const added = state.addedArray? state.addedArray : []
  added.push(action.id)
  console.log('in update add and added = ', added)
  Object.assign(newState, state, {addedArray: added})
  return newState
}

const endAddFunction = (state, action) => {
  const newState = {}
  console.log('in end add func')
  const add = {functionAdd: false}
  Object.assign(newState, state, add)
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
    case HANDLE_COPY:
      return handleCopy(state, action)
    case HANDLE_PASTE:
      return handlePaste(state, action)
    case END_PASTE:
      return endPaste(state, action)
    case END_COPY:
      return endCopy(state, action)
    case HANDLE_DRAG:
      return handleDrag(state, action)
    case END_DRAG:
      return endDrag(state, action)
    case START_ADD_FUNCTION:
      return startAddFunction(state, action)
    case UPDATE_ADD_FUNCTION:
      return updateAddFunction(state, action)
    case END_ADD_FUNCTION:
      return endAddFunction(state, action)
    default:
      return state
  }
}