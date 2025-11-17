import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counterVisible, setCounterVisible] = useState(true);
useEffect(function(){
  setInterval(function(){ 
    setCounterVisible(c => !c)
  },5000);
}, []);

  return( 
    <div> 
      <b> 
        <h1>hello</h1>
      </b>
      {counterVisible && <Counter/>}
    </div>
  )
};


function Counter(){ 
  const [count, setCount] = useState(0);
  
  useEffect(function(){
    console.log("on mount")
    let clock = setInterval(function(){ 
      console.log("inside interval");
      setCount(function(count){ 
        return count + 1;
      });
    },1000);

    return function(){
      console.log("on unmount");
      clearInterval(clock);
    }
  },[]);

  function increaseCounter(){ 
    setCount(count + 1);
  }
  // function deccreaseCounter(){ 
  //   setCount(count - 1);
  // }
  // function resetCounter(){ 
  //   setCount(0);
  // }

  return( 
    <div> 
      <h1 id='text'>{count}</h1>
      <button onClick={increaseCounter}>Increase counter</button>

    </div>
  )
}

export default App
