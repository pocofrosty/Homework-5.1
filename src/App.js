import React, { useState } from 'react'

import Introduction from './components/Introduction'
import BlogPosts from './components/BlogPosts'

function App() {
  const [editModeStatus, setEditModeStatus] = useState(false)
  return (
    <>
      <Introduction />
      <BlogPosts
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
      />
    </>
  )
}

export default App
