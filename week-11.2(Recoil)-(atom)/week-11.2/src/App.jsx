import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/Counter'

function App() {
   return (
 
    <RecoilRoot>
    <Counter/>
    <Buttons/>
    <IsEven />
    </RecoilRoot>


 
   
  )
}

function Counter(){ 
  const count = useRecoilValue(counterAtom)
  return<div>{count}</div>
}

function Buttons(){ 
  const setCount = useSetRecoilState(counterAtom)

  function increase(){ 
   setCount(c => c + 2);
  }
  function decrease(){ 
   setCount(c => c - 1);
  }

  return<div> 
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
}

function IsEven(){ 
  const even = useRecoilValue(evenSelector)

  return<div>
     {even ? "even" : "odd"}
  </div>
}



export default App
