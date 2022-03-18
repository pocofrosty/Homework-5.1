import React from 'react'

const ExitButton = ({ setRender, render }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setRender(!render)
    }}
  >
    X
  </button>
)

export default ExitButton
