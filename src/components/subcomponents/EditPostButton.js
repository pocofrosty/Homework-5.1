import React from 'react'

const EditPostButton = ({ setPostMode, postMode }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setPostMode(!postMode)
    }}
  >
    Edit Post
  </button>
)

export default EditPostButton
