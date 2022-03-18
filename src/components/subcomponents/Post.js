import React from 'react'

import Title from './Title'

const Post = ({ text, imageURL }) => {
  console.log(imageURL)

  return (
    <>
      <img src={imageURL} alt="" />
      <Title className="font-bold" text={`Post # ${1}`} />
      <br />
      <label>{text}</label>
    </>
  )
}

export default Post
