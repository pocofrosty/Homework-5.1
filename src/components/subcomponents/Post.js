/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react'

import DeletePostButton from './DeletePostButton'
import BaseForm from './BaseForm'
import EditPostButton from './EditPostButton'
import TextBox from './TextBox'
import Title from './Title'

const Post = ({ title, text, imageURL, postID }) => {
  const [status, setStatus] = useState(false)
  const [titleText, setTitleText] = useState(title)

  const showPost = () => (
    <div className="shadow border-solid border-4 py-16 px-24">
      <Title
        className="font-bold"
        text={`Post # ${postID}: ${title !== null ? `${title}` : ''}`}
      />
      <br />
      <img src={imageURL} alt="" />
      <label>{text}</label>
      <br />
      <EditPostButton setEditMode={setStatus} editMode={status} />
    </div>
  )

  const showEditForm = () => (
    <div className="shadow border-solid border-4 py-16 px-24">
      <TextBox
        backgroundName="Enter Title"
        setText={setTitleText}
        text={title}
      />
      <br />
      <BaseForm
        title={titleText}
        editModeStatus={status}
        setEditModeStatus={setStatus}
        destination="THIS_POST"
        postID={postID}
        currentText={text}
        currentImage={imageURL}
      />
      <DeletePostButton postID={postID} />
    </div>
  )

  return <div>{status ? showEditForm() : showPost()}</div>
}

export default Post
