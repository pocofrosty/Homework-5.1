export const ADD_TO_POST_LIST = 'ADD_TO_POST_LIST'

export const UPDATE_INTRODUCTION = 'UPDATE_INTRODUCTION'

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
