import { useState } from 'react'
import { NavLink } from 'react-router'
import styles from './navigation.module.scss'
import { FaTimes, FaGithub } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci";

function Navigation() {

    const [navClick, setNavClick] = useState(false);
    const handleNavClick = () => setNavClick(!navClick);

  const dropContent = (
        <>
            <div className="navbar-drop-container bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <Link to="/issues">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Issues</li>
                    </Link>
                    <Link to="/logs">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Logs</li>
                    </Link>
                </ul>
            </div>
        </>
    )

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