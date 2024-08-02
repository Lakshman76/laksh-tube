import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 p-1 shadow-sm'>
        <FaRegCircleUser className='w-5 h-5'/>
        <span className='text-slate-700'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage