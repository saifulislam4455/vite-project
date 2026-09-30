import React from 'react'

function Herotext() {
  return (
    <div className="max-w-xl p-6">
      <h3 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-gray-900">
        Prospective
        <br />
        <span className="text-gray-500">
          Customer
        </span>
        <br />
        Segmentation
      </h3>

      <p className="max-w-lg text-lg font-medium leading-relaxed text-gray-500">
        Discover and understand potential customers by identifying
        meaningful groups based on their needs, interests, and behavior.
      </p>

      <button className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
        Get Started
      </button>
    </div>
  )
}

export default Herotext