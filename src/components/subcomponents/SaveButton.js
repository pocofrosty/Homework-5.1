import React from 'react'

import { connect } from 'react-redux'
import { addToPostList, updateIntroduction } from '../../actions'

const SaveButton = ({
  title,
  description,
  imageURL,
  dispatchAddToPostList,
  destination,
  editMode,
  setEditMode,
}) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      dispatchAddToPostList(title, description, imageURL, destination)
      setEditMode(!editMode)
    }}
  >
    Save
  </button>
)

const mdtp = dispatch => ({
  dispatchAddToPostList: (title, text, imageURL, destination) => {
    if (destination === 'POST_LIST') {
      dispatch(addToPostList(title, text, imageURL))
    } else if (destination === 'INTRODUCTION') {
      dispatch(updateIntroduction(text, imageURL))
    }
  },
})

export default connect(null, mdtp)(SaveButton)
