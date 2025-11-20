import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return <div> 
      <BrowserRouter>




      <Routes> 
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>

    function Layout(){
      return<div style={{height: "100vh", background: "green"}}> 
        <Headers />
        <div style={{height: "90vh", background:"red"}}> 
          <Outlet />
        </div>
      </div>
    }

    function Headers(){ 
     return( 
     <div>
        <Link to="/">Allen</Link>
        |  
        <Link to="/neet/online-coaching-class-11">Class11</Link>
        |  
        <Link to="/neet/online-coaching-class-12">Class12</Link>
      </div>)
    }

    function NoPage(){ 
      return <div>NO Page found</div>
    }

    function Class11Program (){ 
      return<h1>Class11Program</h1>
    }
    function Class12Program (){ 

      const navigate = useNavigate();

      function redirectUser(){ 
        navigate("/");
      }

      return<div>
            <h1>Class12Program</h1>
            <button onClick={redirectUser}>Back to home page</button>
      </div>
    }
    function Landing (){ 
      return<h1>welcome to allen's landing page</h1>
    }
  
}

export default App
