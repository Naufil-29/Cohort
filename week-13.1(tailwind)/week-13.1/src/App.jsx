import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import { Otp } from './Otp.jsx'
import './App.css'

function App() {

  return (
    <div className='h-screen bg-[#002b5b]'>
      <Otp />
    </div>
  )
}

export default App

























      // <div className='card justify-center h-[700px] w-[1500px] items-center rounded-2xl flex flex-col gap-10'>
      //   <div className='flex text-4xl'><p className='text-[#36c6c0]'>Webinar</p><p className='text-white'>.gg</p></div>
      //   <h3 className='text-white text-2xl font-extrabold'>Verify your Age</h3>
      //   <h5 className='text-[#8094ad]'>Please confirm your birth year, This data will not be stored </h5>
      //   <Input disabled={true} placeholder={"username"}></Input>
      //   <Button disabled={false}>sign in</Button>
      // </div>