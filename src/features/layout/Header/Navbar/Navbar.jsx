
import logo from '@/assets/LOGO-WDR.svg'
import styles from './Navbar.module.css'
import PropTypes from 'prop-types'

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={onToggleSidebar}
        aria-label="Toggle Menu"
      >
        <span className={styles.menuIcon}></span>
      </button>
      <img src={logo} alt="WebDev Logo" className={styles.logo} />
    </nav>
  )
}

Navbar.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
}

export default Navbar
