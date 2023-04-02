import React from 'react';

import './MainButton.scss';

const MainButton = (props) => {
  return (
    <button className='button'>{props.btnName}</button>
  )
}

export default MainButton