import React from 'react'

const CancelButton = ({ editModeStatus, setEditModeStatus }) => (
  <button
    className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      setEditModeStatus(!editModeStatus)
    }}
  >
    Cancel
  </button>
)
export default CancelButton
