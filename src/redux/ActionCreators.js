const {
  SET_CURRENT_STYLE,
  UPDATE_CURRENT_STYLE,
  UPDATE_CURRENT_CELL,
  HANDLE_COPY,
  HANDLE_PASTE,
  END_PASTE } = require('./Reducers')

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