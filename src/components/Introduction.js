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
    <div className="shadow border-solid border-4 py-2 px-3">
      <BaseForm
        editModeStatus={editMode}
        setEditModeStatus={setEditMode}
        destination="INTRODUCTION"
        currentText={introduction[0].text}
        currentImage={introduction[0].imageURL}
      />
    </div>
  )

  return (
    <>
      <div className="grid grid-cols-2 justify-center justify-items-center gap-x-16">
        <Title
          className="inline-block text-center font-bold text-2xl"
          text="Darren's Personal Blog!"
        />
        {editMode ? showForm() : showEditButton()}
      </div>
      {introduction.map(({ text, imageURL }) => (
        <div
          className="grid grid-cols-2 justify-center justify-items-center"
          key={0}
        >
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
