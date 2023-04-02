import React from 'react'

import './SubButton.scss'

const SubButton = (props) => {
  return (
    <button className='subButton'>{props.name}</button>
  )
}

export default SubButton
