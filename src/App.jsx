import './App.css'
import Gym from './components/Gym'
import Linechart from './components/Linechart'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <h1 className='text-2xl'>Vite + React</h1>
      <Navbar></Navbar>
      <Gym></Gym>
      <Linechart></Linechart>
    </>
  )
}

export default App
