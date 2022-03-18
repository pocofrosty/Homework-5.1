import { ADD_TO_POST_LIST } from '../actions'

const default_state = []

const postList = (state = default_state, action) => {
  const { type, text, imageURL, postID } = action

  switch (type) {
    case ADD_TO_POST_LIST:
      return [...state, { text, imageURL, postID }]
    default:
      return state
  }
}

export default postList
