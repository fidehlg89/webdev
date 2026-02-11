
import logo from '@/assets/LOGO-WDR.svg'
import styles from './Navbar.module.css'
import { useUI } from '@/context/UIContext'

const Navbar = () => {
  const { toggleSidebar } = useUI()

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <span className={styles.menuIcon}></span>
      </button>
      <img src={logo} alt="WebDev Logo" className={styles.logo} />
    </nav>
  )
}

export default Navbar
