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
import Tooltip from '../tooltip'

function Navigation() {

    const [navClick, setNavClick] = useState(false);
    const [showUMenu, setShowUMenu] = useState(false);
    const theme = useSelector((state: RootState) => state.settings.theme);
    const baseUrl = import.meta.env.VITE_RELATIVE_BASE_URL || '';
    const dropMenuRef = useRef<HTMLDivElement>(null);
    const uMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (navClick || showUMenu) {
        document.addEventListener("mousedown", handleDropClickOutside);
      } else {
        document.removeEventListener("mousedown", handleDropClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleDropClickOutside);
      };
    }, [navClick, showUMenu]);

    const handleDropClickOutside = (event: MouseEvent) => {
      if (
        navClick && dropMenuRef.current &&
        !dropMenuRef.current.contains(event.target as Node)
      ) {
        setNavClick(false);
      }
      if (
        showUMenu && uMenuRef.current &&
        !uMenuRef.current.contains(event.target as Node)
      ) {
        setShowUMenu(false);
      }
    };

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
                <ul className={classNames(styles.navbar_drop_list, styles[`nav_border_${theme}`])}>
                    <NavLink
                      to={`${baseUrl}/`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Pagina principale" position='bottom'>
                          <PiHouseLineBold />
                        </Tooltip>
                      </li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/groups`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Comunità" position='bottom'>
                          <GrGroup />
                        </Tooltip>
                      </li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/friends`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Amici" position='top'>
                          <LiaUserFriendsSolid />
                        </Tooltip>
                      </li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/messages`}
                      onClick={handleNavClick}
                      className={({ isActive }) => {
                        return isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Messagi" position='top'>
                          <LuMessageSquare />
                        </Tooltip>
                      </li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/lib`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Biblioteca" position='top'>
                          <LuLibrary />
                        </Tooltip>
                      </li>
                    </NavLink>
                    <NavLink
                      to={`${baseUrl}/vid`}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        isActive ? styles.navigation_link_active : styles.navigation_link
                      }
                    >
                      <li className={styles.navbar_drop_list_item}>
                        <Tooltip text="Video" position='top'>
                          <MdOutlineOndemandVideo />
                        </Tooltip>
                      </li>
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
        )} ref={uMenuRef}>
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
          to={`${baseUrl}/`}
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