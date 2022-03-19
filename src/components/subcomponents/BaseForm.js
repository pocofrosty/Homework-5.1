import React, { useState } from 'react'

import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import TextBox from './TextBox'

const BaseForm = ({
  title,
  editModeStatus,
  setEditModeStatus,
  destination,
}) => {
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <TextBox backgroundName="Enter Image" setText={setImageURL} />
      <br />
      <TextBox backgroundName="Enter Description" setText={setDescription} />
      <br />
      <SaveButton
        title={title}
        description={description}
        imageURL={imageURL}
        destination={destination}
        editMode={editModeStatus}
        setEditMode={setEditModeStatus}
      />
      <CancelButton
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
      />
    </>
  )
}

export default BaseForm
