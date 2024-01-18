import './App.css'
import Landing from './Pages/Landing'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
<Route exact path="/" element={<Landing/>}/>
<Route path="/:city" element={<Landing/>} />
    </Routes>
  )
}

export default App
