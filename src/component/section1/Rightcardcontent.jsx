import React from 'react'

function Rightcardcontent(props) {
  return (
    <>
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/80"></div>

      <div className="absolute inset-0 flex flex-col justify-between p-5">

        <h2 className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-black shadow-lg backdrop-blur-sm">
          {props.id + 1}
        </h2>

        <div>
          <p className="mb-5 text-base leading-relaxed text-white/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos veritatis, animi illum iusto ullam sapiente unde cupiditate.
          </p>

          <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-500 hover:scale-105">
            {props.tag}
          </button>
        </div>

      </div>
    </>
  )
}

export default Rightcardcontent