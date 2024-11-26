//import { useState } from 'react'
import Navigation from './components/navigation'
import { Outlet } from 'react-router'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='app_container'>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
