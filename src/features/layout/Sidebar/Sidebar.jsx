import styles from './Sidebar.module.css'
import { useUI } from '@/context/UIContext'

const Sidebar = () => {
  const { activeItem, setActiveItem } = useUI()
  const navItems = ['Lorem Ipsum', 'Utilizador', 'Quantum solum', 'Marcus Tremer'];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={`${index + item}`} className={`${styles.navItem} ${item === activeItem ? styles.active : ''}`}>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className={styles.navButton}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <footer className={styles.footer}>
        2019© Premium-minds.com
      </footer>
    </aside>
  )
}

export default Sidebar
