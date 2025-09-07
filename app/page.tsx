'use client';

import ChatForm from '@/components/ChatForm';
import ChatMessage from '@/components/ChatMessage';
import { useState } from 'react';

export default function Home() {
  const [room, setroom] = useState('');
  const [joined, setjoined] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleSendMessage = (message: string) => {
    console.log(message);
  };

  const handleJoinRoom = () => {
    if (username.trim() !== '' && roomId.trim() !== '') {
      setjoined(true);
    }
  };

  return (
    <main>
      <div className="flex mt-24 justify-center w-full">
        {!joined ? (
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">Join a Room</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter username"
                className="border-2 px-4 border-gray-500 rounded-lg py-2 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter room-id"
                className="border-2 px-4 border-gray-500 rounded-lg py-2 focus:outline-none focus:border-blue-500"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <button
                onClick={handleJoinRoom}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer active:scale-95 transition-transform"
              >
                Join Room
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="mb-4 text-2xl font-bold">Room : {roomId}</h1>
            <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-amber-50 rounded-lg border border-gray-200">
              {messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  sender={msg.sender}
                  message={msg.message}
                  isOwnMessage={msg.sender === username}
                />
              ))}
            </div>
            <ChatForm onSendMessage={handleSendMessage} />
          </div>
        )}
      </div>
    </main>
  );
}