import React from 'react'
import Rightcardcontent from './component/section1/Rightcardcontent'

function Rightcard(props) {
  return (
    <div className="group relative h-full w-80 overflow-hidden rounded-4xl shrink-0 shadow-2xl">

      <img
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        src={props.img}
        alt="Customer"
      />

      <Rightcardcontent
        id={props.id}
        tag={props.tag}
      />

    </div>
  )
}

export default Rightcard