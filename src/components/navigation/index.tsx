import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import classNames from 'classnames'
import { FaTimes, FaAlignJustify, FaRegUser } from "react-icons/fa"
import { PiHouseLineBold } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuMessageSquare, LuLibrary } from "react-icons/lu";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useClickOutside } from '../../hooks/useClickOutsideHook'

function Navigation() {

    const [navClick, setNavClick] = useState(false);
    const [showUMenu, setShowUMenu] = useState(false);
    const theme = useSelector((state: RootState) => state.settings.theme);
    const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL || '';
    const dropMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (navClick) {
        console.log('123')
      }
    }, [navClick, showUMenu])

    useClickOutside(navClick, dropMenuRef, () => {
      console.log('WORK->', navClick);
      //setNavClick(false)
    })

    const handleNavClick = () => {
      setNavClick(!navClick);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }

    const handleUMenuClick = () => {
      setShowUMenu(!showUMenu);
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
              )} ref={dropMenuRef}>
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
                      <li className={styles.navbar_drop_list_item}><PiHouseLineBold /> Pagina principale</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/groups`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}><GrGroup /> Comunità</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/friends`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}><LiaUserFriendsSolid /> Amici</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/messages`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}><LuMessageSquare /> Messagi</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/lib`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}><LuLibrary /> Biblioteca</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/vid`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}><MdOutlineOndemandVideo /> Video</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )

    const uMenuContent = (
      <div className={classNames(
        styles.umenu_drop_container,
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
                      to={`${baseUrl}/cabinet`}
                      onClick={handleUMenuClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Pagina personale</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/settings`}
                      onClick={handleUMenuClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Impostazioni</li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/login`}
                      onClick={handleUMenuClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>Accedi</li>
                    </NavLink>
                </ul>
        </div>
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
          <PiHouseLineBold />
          Pagina principale
        </NavLink>
        <NavLink
          to={`${baseUrl}/groups`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <GrGroup />
          Comunità
        </NavLink>
        <NavLink
          to={`${baseUrl}/friends`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <LiaUserFriendsSolid />
          Amici
        </NavLink>
        <NavLink
          to={`${baseUrl}/messages`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <LuMessageSquare />
          Messaggi
        </NavLink>
        <NavLink
          to={`${baseUrl}/lib`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <LuLibrary />
          Biblioteca
        </NavLink>
        <NavLink
          to={`${baseUrl}/vid`}
          className={({ isActive }) =>
            isActive ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <MdOutlineOndemandVideo />
          Video
        </NavLink>
      </div>

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
        )} onClick={handleUMenuClick}>
        {/* тут аватарка юзера c выпадающим меню или иконка если нет */}
        <FaRegUser />
      </div>
      {navClick && dropContent}
      {showUMenu && uMenuContent}
    </nav>
  )
}

export default Navigation