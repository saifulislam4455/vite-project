import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './Rightcontent'

function Content(props) {
  return (
    <div className="pb-16  flex gap-10 items-center h-[90vh] px-18">
      <Leftcontent />
      <Rightcontent user={props.user} color={props.color} />  
    </div>
  )
}

export default Content