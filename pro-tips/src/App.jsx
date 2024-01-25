import './App.css'
import Navbar from '../src/Components/NavBar'
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
    </>
  )
}

export default App