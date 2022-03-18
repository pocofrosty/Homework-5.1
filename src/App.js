import React, { useState } from 'react'

import Introduction from './components/Introduction'
import BlogPosts from './components/BlogPosts'
import BaseForm from './components/subcomponents/BaseForm'
import Post from './components/subcomponents/Post'
import EditButton from './components/subcomponents/EditButton'

function App() {
  const [editModeStatus, setEditModeStatus] = useState(false)
  return (
    <>
      <Introduction />
      <BlogPosts
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
      />
      <br />
    </>
  )
}

export default App
