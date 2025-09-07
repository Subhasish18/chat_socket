"use client";


import React, { useState } from 'react'

const ChatForm = ({
    onSendMessage,
}: {
    onSendMessage?: (message: string) => void;  
}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() !== "") {
            onSendMessage?.(message);
            setMessage("");
        }
    };
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mt-4'>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border-2 px-4 border-gray-500 rounded-lg py-2 focus:outline-none focus:border-blue-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer active:scale-95 transition-transform">
        Send
      </button>
      <button type="button" className="bg-gray-500 text-white rounded-lg px-4 py-2 cursor-pointer active:scale-95 transition-transform" onClick={() => setMessage("")}>
        Clear
      </button>
    </form>
  )
}

export default ChatForm
