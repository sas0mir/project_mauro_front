import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import classNames from 'classnames'
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci";

function Navigation() {

    const [navClick, setNavClick] = useState(false);
    const theme = useSelector((state: RootState) => state.settings.theme);
    const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL || '';

    const handleNavClick = () => setNavClick(!navClick);

    const dropContent = (
        <>
            <div className="navbar-drop-container bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <NavLink to="/issues">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Issues</li>
                    </NavLink>
                    <NavLink to="/logs">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Logs</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
  // { value: "default", label: "Default" },
  //   { value: "earth", label: "Earth" },
  //   { value: "vintage", label: "Vintage" },
  //   { value: "cosmic", label: "Cosmic" },
  //   { value: "warm", label: "Warm" },
  //   { value: "modern", label: "Modern" },
  return (
    <nav className={classNames(
      styles.navigation_container,
      {
        [styles.nav_bg_default]: theme === 'default',
        [styles.nav_bg_earth]: theme === 'earth',
        [styles.nav_bg_vintage]: theme === 'vintage',
        [styles.nav_bg_cosmic]: theme === 'cosmic',
        [styles.nav_bg_warm]: theme === 'warm',
        [styles.nav_bg_modern]: theme === 'modern'
      }
    )}>
      <div className={styles.navigation_links}>
        <NavLink
          to={`${baseUrl}/`}
          className={({ isActive }) => 
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`${baseUrl}/lib`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          Libri
        </NavLink>
        <NavLink
          to={`${baseUrl}/vid`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          Video
        </NavLink>
        <NavLink
          to={`${baseUrl}/settings`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          Settings
        </NavLink>
      </div>
      
      <div>
          {navClick && dropContent}
      </div>

      <button className="navigation_btn sm:hidden transition" onClick={handleNavClick}>
          {navClick ? <FaTimes /> : <CiMenuFries />}
      </button>
    </nav>
  )
}

export default Navigation