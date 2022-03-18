import React from 'react'
import { connect } from 'react-redux'

import AddPostButton from './subcomponents/AddPostButton'
import Title from './subcomponents/Title'
import Post from './subcomponents/Post'

const BlogPost = ({ postList }) => (
  <>
    <Title
      className="text-center font-bold text-green-500 text-2xl"
      text="Blog Posts"
    />
    <AddPostButton />
    {postList.map(({ text, imageURL, postID }) => (
      <Post text={text} imageURL={imageURL} key={postID} />
    ))}
  </>
)

const mapStateToProps = state => ({
  postList: state.postList,
})

export default connect(mapStateToProps)(BlogPost)
