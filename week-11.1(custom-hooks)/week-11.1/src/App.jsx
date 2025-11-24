import { useState } from 'react'
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/use-prev';
import './App.css'



// this is main app function
function App() {

  const [state, setState] = useState(0);
  const Prev = usePrev(state);
  


  return (<div>
    <p>{state}</p>
    <button onClick={() => {setState((curr) => curr + 1)}}>click me</button>
    <p>The previous value is {Prev}</p>
          </div>
  )
};



export default App
