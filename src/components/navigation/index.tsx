import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import classNames from 'classnames'
import { FaTimes, FaAlignJustify } from "react-icons/fa"
import { LuCross } from "react-icons/lu";

function Navigation() {

    const [navClick, setNavClick] = useState(false);
    const theme = useSelector((state: RootState) => state.settings.theme);
    const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL || '';

    const handleNavClick = () => {
      setNavClick(!navClick);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }

    const dropContent = (
        <>
            <div className={classNames(
              styles.navbar_drop_container,
              {
                [styles.nav_bg_default]: theme === 'default',
                [styles.nav_bg_earth]: theme === 'earth',
                [styles.nav_bg_vintage]: theme === 'vintage',
                [styles.nav_bg_cosmic]: theme === 'cosmic',
                [styles.nav_bg_warm]: theme === 'warm',
                [styles.nav_bg_modern]: theme === 'modern'
              }
              )}>
                <ul className={classNames(
                  styles.navbar_drop_list,
                  {
                    [styles.nav_border_default]: theme === 'default',
                    [styles.nav_border_earth]: theme === 'earth',
                    [styles.nav_border_vintage]: theme === 'vintage',
                    [styles.nav_border_cosmic]: theme === 'cosmic',
                    [styles.nav_border_warm]: theme === 'warm',
                    [styles.nav_border_modern]: theme === 'modern'
                  }
                  )}>
                    <NavLink
                      to={`${baseUrl}/`}
                      className={({ isActive }) => 
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                    </NavLink>
                    <NavLink to="/issues">
                        
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
      
      {navClick && dropContent}

      <button className={classNames(
      styles.navigation_btn,
      {
        [styles.nav_color_default]: theme === 'default',
        [styles.nav_color_earth]: theme === 'earth',
        [styles.nav_color_vintage]: theme === 'vintage',
        [styles.nav_color_cosmic]: theme === 'cosmic',
        [styles.nav_color_warm]: theme === 'warm',
        [styles.nav_color_modern]: theme === 'modern'
      }
    )} onClick={handleNavClick}>
          {navClick ? <FaTimes /> : <FaAlignJustify />}
      </button>
      <div>
        {/* тут аватарка юзера c выпадающим меню или иконка если нет */}
        <LuCross />
      </div>
    </nav>
  )
}

export default Navigation