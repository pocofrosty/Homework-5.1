import React, { useState } from 'react'

import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import TextBox from './TextBox'
import Title from './Title'

const BaseForm = () => {
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <Title className="text-left text-m" text="Darren's Personal Blog!" />
      <TextBox backgroundName="Enter Image" setText={setImageURL} />
      <br />
      <TextBox backgroundName="Enter Description" setText={setDescription} />
      <br />
      <SaveButton description={description} imageURL={imageURL} />
      <CancelButton />
    </>
  )
}

export default BaseForm
