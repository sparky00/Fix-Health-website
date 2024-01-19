import './App.css'
import Landing from './Pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Thanks from './Components/Thanks'

function App() {

  return (
    <Routes>
<Route exact path="/" element={<Landing/>}/>
<Route path="/:city" element={<Landing/>} />
<Route path="/thankyou" element={<Thanks/>}/>
    </Routes>
  )
}

export default App
