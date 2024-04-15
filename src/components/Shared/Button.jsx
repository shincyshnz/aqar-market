import React from 'react'

const Button = ({...props}) => {

  return (
    <button className={props.classname} onClick={props.onClick}>
        <div className="flex-center gap-2">
        {props.icons && <img src={props.icons} alt='icon'/>}
        {props.text}
        </div>
    </button>
  )
}

export default Button