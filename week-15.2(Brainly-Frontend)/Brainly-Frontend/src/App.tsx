
import { Button } from './component/ui/Button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareIcon'

import './App.css'

function App() {

  return (
    <>
      <Button  size="sm" variant="primary" text="Share" endIcon={<ShareIcon size="lg"/>}/>
      <Button stratIcon={<PlusIcon size="md"/>} size="md" variant="secondary" text="Add Network"/>
      <Button size="lg" variant="secondary" text="Add Network"/>
    </>
  )
}

export default App
