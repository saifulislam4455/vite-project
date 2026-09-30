import React from 'react'
import Rightcard from '../../Rightcard'

function Rightcontent(props) {

  return (
    <div id='right' className="h-full flex flex-nowrap gap-3 overflow-x-auto p-6 w-1/2">
      {props.user.map((elm, idx) => {
        return (
          <Rightcard
            key={idx}
            id={idx}
            img={elm.Img}
            tag={elm.tag}
          />
        )
      })}
    </div>
  )
}

export default Rightcontent