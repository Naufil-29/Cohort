export default function ToggleTheme() {
 return<div className='h-screen bg-white text-black dark:bg-black dark:text-white'> 
  <button onClick={Toggle} class='border-2'>Toggle theme</button>
 </div>
function Toggle(){ 
  document.querySelector("html").classList.toggle("dark")
}
}