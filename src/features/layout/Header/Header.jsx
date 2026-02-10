import Navbar from './Navbar/Navbar'
import styles from './Header.module.css'
import PropTypes from 'prop-types'

const Header = ({onToggleSidebar}) => {
  return (
    <header className={styles.header}>
      <Navbar onToggleSidebar={onToggleSidebar} />
    </header>
  )
}

Header.propTypes = {
  onToggleSidebar: PropTypes.func
}

export default Header
