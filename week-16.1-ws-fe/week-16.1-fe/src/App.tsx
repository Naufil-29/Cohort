import { useEffect, useState } from 'react';
import { useRef } from 'react'
import './App.css'

function App() {
  const [ws, setWs] = useState();
  const inputRef = useRef();
      function sendMessage(){ 
        if(!ws){
          return
        }
        const message = inputRef.current.value

        //@ts-ignore
        ws.send(message)
      }

      useEffect(() => { 
        const ws = new WebSocket("ws://localhost:8080");

        setWs(ws)

        ws.onmessage = (ev) => { 
          alert(ev.data)
        }
      },[])
  return (
    <>
     <input ref={inputRef} type="text" placeholder="message"></input>
     <button onClick={sendMessage}>send</button>
    </>
  )
}

export default App
