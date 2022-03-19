import React, { useState } from 'react'

import CancelButton from './CancelButton'
import SaveButton from './SaveButton'
import TextBox from './TextBox'

const BaseForm = ({
  title,
  editModeStatus,
  setEditModeStatus,
  destination,
  postID,
  currentText = '',
  currentImage = '',
}) => {
  const [imageURL, setImageURL] = useState(currentImage)
  const [description, setDescription] = useState(currentText)

  return (
    <div className="grid grid-cols-1 py-2 px-3">
      <label className="font-mono"> Image </label>
      <TextBox
        backgroundName="Enter Image"
        setText={setImageURL}
        text={imageURL}
      />
      <br />
      <label className="font-mono"> Description </label>
      <TextBox
        backgroundName="Enter Description"
        setText={setDescription}
        text={description}
      />
      <br />
      <SaveButton
        title={title}
        description={description}
        imageURL={imageURL}
        destination={destination}
        postID={postID}
        editMode={editModeStatus}
        setEditMode={setEditModeStatus}
      />
      <br />
      <CancelButton
        editModeStatus={editModeStatus}
        setEditModeStatus={setEditModeStatus}
      />
    </div>
  )
}

export default BaseForm
