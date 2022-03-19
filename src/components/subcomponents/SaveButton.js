import React from 'react'

import { connect } from 'react-redux'
import { addToPostList, updateIntroduction } from '../../actions'

const SaveButton = ({
  title,
  description,
  imageURL,
  dispatchSendPost,
  destination,
  editMode,
  setEditMode,
}) => (
  <button
    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      dispatchSendPost(title, description, imageURL, destination)
      setEditMode(!editMode)
    }}
  >
    Save
  </button>
)

const MapDispatchToProps = dispatch => ({
  dispatchSendPost: (title, text, imageURL, destination) => {
    if (destination === 'POST_LIST') {
      dispatch(addToPostList(title, text, imageURL))
    } else if (destination === 'INTRODUCTION') {
      dispatch(updateIntroduction(text, imageURL))
    }
  },
})

export default connect(null, MapDispatchToProps)(SaveButton)
