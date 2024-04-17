import React from 'react'

const Button = ({...props}) => {

  return (
    <button className={props.classname} onClick={props.onClick}>
        <div className="flex-center gap-2">
        {props.icons && props.icons}
        {props.text}
        </div>
    </button>
  )
}

export default Button