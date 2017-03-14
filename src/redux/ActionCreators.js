const { SET_CURRENT_STYLE, UPDATE_CURRENT_STYLE } = require('./Reducers')

export function setCurrentStyle(style) {
  return { type: SET_CURRENT_STYLE, style}
}

export function updateCurrentStyle(style) {
  return { type: UPDATE_CURRENT_STYLE, style}
}