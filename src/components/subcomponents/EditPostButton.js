import React from 'react'
import { connect } from 'react-redux'

const EditPostButton = ({ render, setRender }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setRender(!render)
    }}
  >
    Edit Post
  </button>
)

export default EditPostButton
