//import { useState } from 'react'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'

function Navigation() {
  //const [count, setCount] = useState(0)

  return (
    <nav className={styles.navigation_container}>
      <NavLink
        to="/"
        className={({ isActive }) => 
          isActive ? styles.navigation_link_active : styles.navigation_link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/lib"
        className={({ isActive }) =>
          isActive ? styles.navigation_link_active : styles.navigation_link
        }
      >
        Libri
      </NavLink>
      <NavLink
        to="/vid"
        className={({ isActive }) =>
          isActive ? styles.navigation_link_active : styles.navigation_link
        }
      >
        Video
      </NavLink>
    </nav>
  )
}

export default Navigation