import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef(null)
  const [messages, setMessages] = useState(["hi there", "hola"]);

  useEffect(() => {
     const ws = new WebSocket('http://localhost:8080');
     ws.onmessage = (event) => { 
      setMessages(m => [...m, event.data])
     }
     wsRef.current = ws;
     ws.onopen = () => { 
      ws.send(JSON.stringify({ 
        type: "join",
        payload: { 
          roomId: "red"
        }
      }))
     }
     return () => { 
      ws.close()
     }
  },[])

  return (
    <div className='h-screen bg-black'> 
      <div className='h-[80vh]'> 
        {messages.map(message => <div className='pt-8'> 
          <span className='bg-white text-black rounded-2xl p-4'> 
            {message}
            </span>
          </div>)}
      </div>
      <div className='w-full bg-white flex p-4 rounded-2xl'> 
        <input ref={inputRef} type='text' className='flex-1 border-2 rounded-2xl'></input>
        <button onClick={() => { 
          const message = inputRef.current?.value
          wsRef.current.send(JSON.stringify({ 
            type: "chat",
            payload: { 
              message: message
            }
          }))
        }} className='purple-600 border-2 rounded-2xl bg-gray-400 p-4'>Send Message</button>
      </div>
    </div>
  )
}

export default App
