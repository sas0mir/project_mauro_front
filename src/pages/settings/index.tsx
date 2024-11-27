import { useState } from 'react'
import styles from './settingspage.module.scss'
import { UseSelector, useDispatch } from 'react-redux'
import { setTheme, setLanguage } from '../../slices/settingsSlice'

function Settingspage() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
        <h3>Settings</h3>
      <div>
        
      </div>
    </div>
  )
}

export default Settingspage
