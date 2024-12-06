//import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import classNames from 'classnames'
//import { FaTimes, FaGithub } from "react-icons/fa"
//import { CiMenuFries } from "react-icons/ci";

function Navigation() {

    //const [navClick, setNavClick] = useState(false);
    const theme = useSelector((state: RootState) => state.settings.theme);

    //const handleNavClick = () => setNavClick(!navClick);

  // const dropContent = (
  //       <>
  //           <div className="navbar-drop-container bg-slate-900 transition">
  //               <ul className="text-center text-xl p-20">
  //                   <NavLink to="/issues">
  //                       <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Issues</li>
  //                   </NavLink>
  //                   <NavLink to="/logs">
  //                       <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Logs</li>
  //                   </NavLink>
  //               </ul>
  //           </div>
  //       </>
  //   )

  return (
    <nav className={classNames(
      styles.navigation_container,
      {
        [styles.container_default]: theme === 'default',
        [styles.container_dark]: theme === 'dark',
        [styles.container_light]: theme === 'light'
      }
    )}>
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
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? styles.navigation_link_active : styles.navigation_link
        }
      >
        Settings
      </NavLink>
    </nav>
  )
}

export default Navigation