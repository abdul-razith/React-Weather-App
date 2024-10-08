import './App.css'
import { Error } from './components/Error/Error'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
