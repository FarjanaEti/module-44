import './App.css'
import Gym from './components/Gym'
import Linechart from './components/Linechart'
import Navbar from './components/Navbar'
import Phones from './components/Phones'
function App() {

  return (
    <>
      <h1 className='text-2xl'>Vite + React</h1>
      <Navbar></Navbar>
      <Gym></Gym>
      <Linechart></Linechart>
      <Phones></Phones>
    </>
  )
}

export default App
