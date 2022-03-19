import React from 'react'

import { connect } from 'react-redux'
import { deletePost } from '../../actions'

const DeletePostButton = ({ postID, dispatchDeletePost }) => (
  <button
    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      dispatchDeletePost(postID)
    }}
  >
    Delete
  </button>
)

const MapDispatchToProps = dispatch => ({
  dispatchDeletePost: postID => {
    dispatch(deletePost(postID))
  },
})

export default connect(null, MapDispatchToProps)(DeletePostButton)
