import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-4 py-1 bg-gray-300 m-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button