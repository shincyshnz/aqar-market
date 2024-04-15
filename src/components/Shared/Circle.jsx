import React from 'react'

const Circle = ({color = "white"}) => {
  return (
    <>
    <svg
            width="225"
            height="225"
            viewBox="0 0 225 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="223"
              height="223"
              rx="111.5"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          </svg>
    </>
  )
}

export default Circle