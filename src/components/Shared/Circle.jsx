import React from 'react'

const Circle = ({ color = "white", width = "100%", height = "100%" }) => {
  return (
    <>
        {/* <div className="w-[4rem] md:w-[8rem] lg:w-[10rem] max-w-[225px] absolute -top-3 left-[14px] md:left-[1rem] md:-top-[14px] bg-black"> */}
        <div className="absolute bg-black w-16 max-w-[225px] left-[3.2rem]">
          <svg
            width={width}
            height={height}
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
        </div>
    </>
  )
}

export default Circle