import React from 'react'

const AddPostButton = ({ editModeStatus, setEditModeStatus }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setEditModeStatus(!editModeStatus)
    }}
  >
    Add Post
  </button>
)

export default AddPostButton
