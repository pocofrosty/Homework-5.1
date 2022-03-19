import React, { useState } from 'react'
import { connect } from 'react-redux'

import Title from './subcomponents/Title'
import EditButton from './subcomponents/EditButton'
import BaseForm from './subcomponents/BaseForm'

const Introduction = ({ introduction }) => {
  const [editMode, setEditMode] = useState(false)

  const showEditButton = () => (
    <EditButton editMode={editMode} setEditMode={setEditMode} />
  )

  const showForm = () => (
    <BaseForm
      editModeStatus={editMode}
      setEditModeStatus={setEditMode}
      destination="INTRODUCTION"
    />
  )

  return (
    <>
      <Title
        className="text-center font-bold text-2xl"
        text="Darren's Personal Blog!"
      />
      {editMode ? showForm() : showEditButton()}
      {introduction.map(({ text, imageURL }) => (
        <div key={0}>
          <img src={imageURL} alt="" />
          <label> {text} </label>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  introduction: state.introduction,
})

export default connect(mapStateToProps)(Introduction)
