import React from 'react'

const EditButton = ({ setEditMode, editMode }) => (
  <button
    className="w-24 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setEditMode(!editMode)
    }}
  >
    Edit
  </button>
)

export default EditButton
