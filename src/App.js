import React, { useState } from 'react'

import Introduction from './components/Introduction'
import BlogPosts from './components/BlogPosts'
import BaseForm from './components/subcomponents/BaseForm'
import Post from './components/subcomponents/Post'
import EditButton from './components/subcomponents/EditButton'

function App() {
  return (
    <>
      <Introduction />
      <BlogPosts />
      <br />
      <BaseForm />
    </>
  )
}

export default App
