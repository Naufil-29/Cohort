import { useEffect, useState } from 'react'
import  SideBarToggle from './components/sideBarToggle'
import './App.css'

const useMediaQuery = (query) => { 
  const [matches, setMatches] = useState(false);

  useEffect(() => { 
    const media = window.matchMedia(query);
    if(media.matches !== matches){ 
      setMatches(media.matches)
    }

    const listener= () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener)
  }, [matches, query])
    return matches
}


function App() {

  const[sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery('(min-width:768px)')

  useEffect(() => { 
    if(!isDesktop){
      setSidebarOpen(false);
    }else{ 
      setSidebarOpen(true)
    }
  },[isDesktop])

  return<div className='flex'> 
    <SideBar sideBarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <MainContent sideBarOpen={sidebarOpen}/>
  </div>


function SideBar(){ 
  if(!sidebarOpen){ 
    return<div className='fixed top-0 left-0'> 
      <div className='cursor-pointer hover:bg-gray-200' onClick={() => { 
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
    </div>
  }

    return<div className='w-96 h-screen fixed top-0 left-0 bg-red-200 md:relative'>
      <div className='cursor-pointer hover:bg-gray-200' onClick={() => { 
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
    </div>

}

function MainContent(){ 
  return<div className='w-full'>
    <div className='h-72 bg-black hidden md:block'></div>
    <div className='grid grid-cols-11 gap-8 p-8'>
    <div className='h-96 rounded-2xl bg-red-200 col-span-11  -translate-y-24 shadow-lg md:col-span-3 hidden md:block'>
      
    </div>
    <div className='h-96 rounded-2xl bg-yellow-200 col-span-11 shadow-lg md:col-span-5'>

    </div>
    <div className='h-96 rounded-2xl  bg-green-200 col-span-11 shadow-lg md:col-span-3'>

    </div>
    </div>
  </div>
}
 
}


export default App
