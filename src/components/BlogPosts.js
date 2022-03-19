import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddPostButton from './subcomponents/AddPostButton'
import Title from './subcomponents/Title'
import Post from './subcomponents/Post'
import BaseForm from './subcomponents/BaseForm'
import TextBox from './subcomponents/TextBox'

const BlogPost = ({ editModeStatus, setEditModeStatus, postList }) => {
  const [title, setTitle] = useState('')

  const showForm = () => (
    <>
      <Title className="text-left text-m" text="New Post!" />
      <TextBox backgroundName="Enter Title" setText={setTitle} />
      <br />
      <BaseForm
        title={title}
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
        destination="POST_LIST"
      />
    </>
  )

  return (
    <>
      <Title
        className="text-center font-bold text-green-500 text-2xl"
        text="Blog Posts"
      />
      <AddPostButton
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
      />
      {editModeStatus ? showForm() : null}
      {postList.map(({ postTitle = null, text, imageURL, postID }) => (
        <Post
          title={postTitle}
          text={text}
          imageURL={imageURL}
          postID={postID}
          key={postID}
        />
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  postList: state.postList,
})

export default connect(mapStateToProps)(BlogPost)
