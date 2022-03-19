import { ADD_TO_POST_LIST, DELETE_POST, UPDATE_POST } from '../actions'

const default_state = []

const postList = (state = default_state, action) => {
  const { type, postTitle, text, imageURL, postID } = action

  switch (type) {
    case ADD_TO_POST_LIST:
      return [...state, { postTitle, text, imageURL, postID }]
    case UPDATE_POST:
      return state.map(post => {
        if (post.postID === postID) {
          return { ...post, postTitle, text, imageURL, postID }
        } else {
          return { ...post }
        }
      })
    case DELETE_POST:
      return state.filter(post => post.postID !== postID)
    default:
      return state
  }
}

export default postList
