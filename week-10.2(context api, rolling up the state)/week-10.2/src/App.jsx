import { useContext ,createContext, useState, use } from 'react'
import './App.css'
//using context api to get rid of prop drilling
const BulbContext = createContext()

function BulbProvider({ children }){ 
    const [bulbOn, setBulbOn] = useState(true);
  
  
    return<BulbContext.Provider 
    value={{
    bulbOn:bulbOn, 
    setBulbOn:setBulbOn}}> 
    {children}
  </BulbContext.Provider>
}

// Example of rolling state up
function App() {

    return (
     <BulbProvider> 
      <LightBulb />
     </BulbProvider>
      
    
  )
};

function LightBulb(){ 
  return(
    <div>
        <BulbState />
        <ToggleBulbState />
      </div>
  )
};

function BulbState(){ 
  const { bulbOn } = useContext(BulbContext)
  return(
     <div> 
      {bulbOn ? "bulbOn" : "bulbOff"}
     </div>
  )
};

function ToggleBulbState(){ 
  const { bulbOn, setBulbOn } = useContext(BulbContext)
  function toggle(){ 
    //setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }

  return( 
    <button onClick={toggle}>toggle bulb</button>
  )
}




export default App
