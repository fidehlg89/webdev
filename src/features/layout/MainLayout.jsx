
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './MainLayout.module.css'
import PropTypes from 'prop-types'
import { useUI } from '../../context/UIContext'

const MainLayout = ({ children }) => {
  const { isSidebarOpen } = useUI();

  return (
    <div className={`${styles.layout} ${isSidebarOpen ? styles.sidebarVisible : ''}`}>
      <Header />
      <div className={styles.mainSection}>
        <Sidebar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
