import React, { useState } from 'react'

const Form = () => {
  const [text, setText] = useState('')
  return (
    <>
      <input
        onChange={e => {
          setText(e.target.value)
        }}
      />
      <label> {text}</label>
    </>
  )
}

export default Form
