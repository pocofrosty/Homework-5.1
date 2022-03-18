import React from 'react'

import Title from './Title'

const Post = ({ title, text, imageURL, postID }) => (
  <>
    <Title
      className="font-bold"
      text={`Post # ${postID}: ${title !== null ? `${title}` : ''}`}
    />
    <br />
    <img src={imageURL} alt="" />
    <label>{text}</label>
  </>
)

export default Post
