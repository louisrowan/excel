const {
  SET_CURRENT_STYLE,
  UPDATE_CURRENT_STYLE,
  UPDATE_CURRENT_CELL,
  HANDLE_COPY,
  HANDLE_PASTE,
  END_PASTE,
  END_COPY,
  HANDLE_DRAG,
  END_DRAG,
  START_ADD_FUNCTION,
  UPDATE_ADD_FUNCTION } = require('./Reducers')

export function setCurrentStyle(style) {
  return { type: SET_CURRENT_STYLE, style}
}

export function updateCurrentStyle(style) {
  return { type: UPDATE_CURRENT_STYLE, style}
}

export function updateCurrentCell(cell) {
  return { type: UPDATE_CURRENT_CELL, cell}
}

export function handleCopy(cell) {
  return { type: HANDLE_COPY, cell}
}

export function handlePaste(cell) {
  return { type: HANDLE_PASTE, cell}
}

export function endPaste(){
  return { type: END_PASTE}
}

export function endCopy(){
  return { type: END_COPY}
}

export function handleDrag(coords){
  return { type: HANDLE_DRAG, coords}
}

export function endDrag(){
  return { type: END_DRAG}
}

export function startAddFunction(){
  return { type: START_ADD_FUNCTION}
}

export function updateAddFunction(id){
  return { type: UPDATE_ADD_FUNCTION, id}
}