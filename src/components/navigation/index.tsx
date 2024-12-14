import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import classNames from 'classnames'
import { FaTimes, FaAlignJustify, FaRegUser } from "react-icons/fa"

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
                      to={`${baseUrl}/main`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Home</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/lib`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Biblioteca</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/vid`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Video</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/settings`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Impostazioni</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
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
          to={`${baseUrl}/main`}
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
          Biblioteca
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
          Impostazioni
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
      <div className={classNames(
        styles.navigation_avatar,
        {
          [styles.nav_border_default]: theme === 'default',
          [styles.nav_border_earth]: theme === 'earth',
          [styles.nav_border_vintage]: theme === 'vintage',
          [styles.nav_border_cosmic]: theme === 'cosmic',
          [styles.nav_border_warm]: theme === 'warm',
          [styles.nav_border_modern]: theme === 'modern'
        }
        )}>
        {/* тут аватарка юзера c выпадающим меню или иконка если нет */}
        <FaRegUser />
      </div>
    </nav>
  )
}

export default Navigation