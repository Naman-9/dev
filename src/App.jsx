
import './App.css'
import { Footer } from './features/footer/Footer'
import { Navbar } from './features/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    
      <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>

  )
}

export default App
