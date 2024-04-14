import React from 'react'

const Button = () => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClickProp}
    >
      {text}
    </button>
  )
}

export default Button