export const ADD_TO_POST_LIST = 'ADD_TO_POST_LIST'

export const UPDATE_INTRODUCTION = 'UPDATE_INTRODUCTION'

export const UPDATE_POST = 'UPDATE_POST'

export const DELETE_POST = 'DELETE_POST'
let postID = 0

export const addToPostList = (title, text, imageURL) => ({
  type: ADD_TO_POST_LIST,
  postTitle: title,
  text,
  imageURL,
  postID: postID++,
})

export const updateIntroduction = (text, imageURL) => ({
  type: UPDATE_INTRODUCTION,
  text,
  imageURL,
})

export const updatePost = (title, text, imageURL, postID2) => ({
  type: UPDATE_POST,
  postTitle: title,
  text,
  imageURL,
  postID: postID2,
})

export const deletePost = postID2 => ({
  type: DELETE_POST,
  postID: postID2,
})
