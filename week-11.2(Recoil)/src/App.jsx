
import { RecoilRoot, useRecoilValue, useSetRecoilState, atom } from 'recoil'
import { counterAtom } from './store/atoms/Counter'
import './App.css'


function App() {


  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>  
  )
}

function Counter(){ 

    return<div> 
     <CurrentCount />
     <Increase />
     <Decrease />
    </div>
}

function CurrentCount(){ 
  const count = useRecoilValue(counterAtom);

  return<div>
     {count}
  </div>
}

function Increase(){ 
  const setCount = useSetRecoilState(counterAtom);

  function increase(){ 
    setCount( count => count + 1);
  }

  return<div> 
    <button onClick={increase}>increase</button>
  </div>
}

function Decrease(){ 
  const setCount = useSetRecoilState(counterAtom);

  function decrease(){ 
    setCount( c => c - 1);
  }

  return<div> 
    <button onClick={decrease}>decrease</button>
  </div>
}

export default App
