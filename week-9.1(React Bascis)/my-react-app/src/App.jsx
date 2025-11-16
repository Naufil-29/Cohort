import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){ 
    setCount(count + 1);
  }

  return (
    <div> 
     <button id="btn" onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

function Button(props){ 
  return<button onClick={props.onClickHandler}>Counter {count}</button>
}

export default App
