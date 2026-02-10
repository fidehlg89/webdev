
import React, { useState } from 'react'

import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './MainLayout.module.css'
import PropTypes from 'prop-types'

const MainLayout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.layout} ${isSidebarOpen ? styles.sidebarVisible : ''}`}>
      <Header onToggleSidebar={toggleSidebar}/>
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
