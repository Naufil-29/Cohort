import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import {todosAtomFamily} from './atoms'
import { useEffect } from 'react'

import './App.css'

function App() {

  return <RecoilRoot> 
    <UpdaterComponent />
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdaterComponent(){ 
  const updateTodo = useSetRecoilState(todosAtomFamily(2))
  useEffect(() => { 
    setTimeout(() => { 
      updateTodo({ 
        id: "2",
        title: "updated second todo",
        content: "updated second todo"
      })
    })
  }, [])
}

function Todo({id}){ 
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return <div> 
    {currentTodo.title}
    {currentTodo.content}
  </div>
}

export default App
