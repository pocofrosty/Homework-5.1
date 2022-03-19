import React from 'react'

const EditPostButton = ({ setEditMode, editMode }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setEditMode(!editMode)
    }}
  >
    Edit Button
  </button>
)

export default EditPostButton
