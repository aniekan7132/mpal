import React from 'react'
import "../css/headingOne.css";

const HeadingOne = ({header}) => {
  return (
    <h1 className='header-text'>{header}</h1>
  )
}

export default HeadingOne