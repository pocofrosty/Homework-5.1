import React from 'react'
import { useState } from 'react/cjs/react.production.min'

const TextBox = ({ setText, backgroundName }) => (
  <input
    className="shadow appearance-none border-rounded py-2 px-3"
    placeholder={backgroundName}
    onChange={e => setText(e.target.value)}
  />
)

export default TextBox
