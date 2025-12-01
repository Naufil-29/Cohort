import heroImg from './public/hero-image.png'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <div className='bg-orange-400'>
     <nav className='max-w-7xl mx-auto py-4 px-4 flex justify-between items-center'> 
       <a href="/">
         <h1 className='text-2xl font-extrabold text-orange-600 tracking lighter'>Bimal</h1>
        </a>
        <div className='flex items-center gap-4'>
          <a href="#products" className="text-orange-950 font-medium tracking-tighter hover:text-orange-900 transition-all duration-300"> 
            Products
          </a>
          <button className='bg-orange-600 text-white font-medium px-4 py-2 hover:bg-orange-700 transition-all duration-300 rounded-lg'>Login</button>
       </div>
     </nav>

     <section className='hero m-w-7xl mx-auto p-12 px-4 flex flex-col items-center justify-center'> 
            <div className='flex flex-col items-center justify-center pt-8'> 
              <h1 className='text-6xl font-extrabold text-orange-950 text-tighter'> 
                Bolo zuban <span className='text-orange-200'>Canceri</span>
              </h1>
              <p className='text-xl text-orange-950'>More you eats, sooner you die.</p>
            </div>
            <img src={heroImg} alt="bolo zuba kesari" width={500} height={500} className='w-[40%] h-full object-contain'></img>
     </section>
    
    
     <section className='content bg-orange-50 py-12 px-4 flex flex-col items-center justify-center mx-4 bg-roange-50 rounded-2xl shadow-md gap-12'> 
          <div className='flex flex-col items-center justify-center gap-2'> 
            <h2 className='text-4xl font-extrabold text-orange-950 tracking-tighter'>Cancerous Products</h2>
            <p className='text-xl text-center text-orange-950'>Discover an extensive selection of highly cancerous products designed specially for you</p>

          </div>
          <div> 
            <Card/>
            <br/>
            <Card/>
            <br/>
            <Card/>
          </div>
     </section>


         <footer className="py-4 px-4 flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-2 max-w-sm">
        <a href="/">
          <h1 className="text-2xl font-extrabold text-orange-50 tracking-tighter hover:text-orange-700 transition-all duration-300">
            Vimal
          </h1>
        </a>
        <p className="text-sm text-orange-50 text-center">
          Bimal cannot be held accountable for any health issues, including
          cancer, that may arise from consumption.
        </p>
      </div>
      <p className="text-sm text-orange-100">
        &copy; {new Date().getFullYear()} Bolo Zubaan Canceri. All rights
        reserved.
      </p>
    </footer>
   </div>
   
  )
}

export default App
