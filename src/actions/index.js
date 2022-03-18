export const ADD_TO_POST_LIST = 'ADD_TO_POST_LIST'

let postID = 0

export const addToPostList = (text, url) => ({
  type: ADD_TO_POST_LIST,
  text,
  url,
  id: postID++,
})
