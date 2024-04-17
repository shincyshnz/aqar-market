import React from 'react'

const Title = ({classname, classHeading, classSubHeading, heading,  subHeading}) => {
  return (
    <div className={`flex flex-col uppercase ${classname}`}>
      <h6 className={classSubHeading}>{subHeading}</h6>
      <h1 className={classHeading} >{heading}</h1>
    </div>
  )
}

export default Title