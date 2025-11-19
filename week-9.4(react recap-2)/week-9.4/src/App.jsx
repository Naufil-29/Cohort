import { React, useState } from 'react';

const Card = ({ children }) => { 
  return( 
    <div style={{ 
      border: '1px solid black',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
    }}> 
      {children}
    </div>
  )
}



const App = () => {
   return( 
    <div> 
      <Card> 
        <h1>Hello, World!</h1>
        <p>This is a simple card component.</p>
      </Card>
    </div>
   )
}

export default App
