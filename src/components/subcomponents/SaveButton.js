import React from 'react'

import { connect } from 'react-redux'
import { addToPostList, updateIntroduction, updatePost } from '../../actions'

const SaveButton = ({
  title,
  description,
  imageURL,
  dispatchSendPost,
  destination,
  postID,
  editMode,
  setEditMode,
}) => (
  <button
    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      dispatchSendPost(title, description, imageURL, destination, postID)
      setEditMode(!editMode)
    }}
  >
    Save
  </button>
)

const MapDispatchToProps = dispatch => ({
  dispatchSendPost: (title, text, imageURL, destination, postID) => {
    if (destination === 'POST_LIST') {
      dispatch(addToPostList(title, text, imageURL))
    } else if (destination === 'INTRODUCTION') {
      dispatch(updateIntroduction(text, imageURL))
    } else if (destination === 'THIS_POST') {
      dispatch(updatePost(title, text, imageURL, postID))
    }
  },
})

export default connect(null, MapDispatchToProps)(SaveButton)
