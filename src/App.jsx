import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <div id="navbar">
      <Navbar/>
    </div>
    <div id="main">  
      <Outlet/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
    </>
  )
}

export default App
