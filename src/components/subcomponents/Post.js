/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react'

import Title from './Title'
import EditPostButton from './EditPostButton'
import BaseForm from './BaseForm'
import DeletePostButton from './DeletePostButton'
import TextBox from './TextBox'

const Post = ({ title, text, imageURL, postID }) => {
  const [postMode, setPostMode] = useState(true)

  const showPost = () => (
    <>
      <Title
        className="font-bold"
        text={`Post # ${postID}: ${title !== null ? `${title}` : ''}`}
      />
      <br />
      <img src={imageURL} alt="" />
      <label>{text}</label>
      <br />
      <EditPostButton setPostMode={setPostMode} postMode={postMode} />
    </>
  )

  const showEditForm = () => (
    <>
      <Title className="text-left text-m" text="Edit Post!" />
    </>
  )

  return <div>{showPost()}</div>
}

export default Post
