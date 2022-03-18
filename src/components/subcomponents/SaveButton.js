import React from 'react'

import { connect } from 'react-redux'
import { addToPostList } from '../../actions'

const SaveButton = ({ description, imageURL, dispatchAddToPostList }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => {
      dispatchAddToPostList(description, imageURL)
    }}
  >
    Save
  </button>
)

const mdtp = dispatch => ({
  dispatchAddToPostList: (text, url) => dispatch(addToPostList(text, url)),
})

export default connect(null, mdtp)(SaveButton)
