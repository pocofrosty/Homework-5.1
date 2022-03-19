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
    <div className="grid grid-cols-1 shadow border-solid border-4 py-2 px-3 justify-items-center px-16">
      <Title className="text-center font-bold" text="New Post!" />
      <label className="font-mono"> Title </label>
      <TextBox backgroundName="Enter Title" setText={setTitle} />
      <br />
      <BaseForm
        title={title}
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
        destination="POST_LIST"
      />
    </div>
  )

  return (
    <>
      <div className="grid grid-cols-2 justify-center justify-items-center gap-x-16">
        <Title
          className="text-center font-bold text-green-500 text-2xl"
          text="Blog Posts"
        />
        <AddPostButton
          editModeStatus={editModeStatus}
          setEditModeStatus={setEditModeStatus}
        />
      </div>
      {editModeStatus ? showForm() : null}
      <div className="grid grid-cols-3 justify-center justify-items-center py-16 px-24">
        {postList.map(({ postTitle = null, text, imageURL, postID }) => (
          <Post
            title={postTitle}
            text={text}
            imageURL={imageURL}
            postID={postID}
            key={postID}
          />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  postList: state.postList,
})

export default connect(mapStateToProps)(BlogPost)
