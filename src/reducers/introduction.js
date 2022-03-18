import { UPDATE_INTRODUCTION } from '../actions/index'

const default_state = [{}]

const introduction = (state = default_state, action) => {
  const { type, text, imageURL } = action

  switch (type) {
    case UPDATE_INTRODUCTION:
      return [{ text, imageURL }]
    default:
      return state
  }
}

export default introduction
