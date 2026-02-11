import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({
  title,
  children,
  collapsible = true,
  defaultOpen = true,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    if (collapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div
        className={`${styles.header} ${collapsible ? styles.collapsible : ''}`}
        onClick={toggleOpen}
      >
        <h3 className={styles.title}>{title}</h3>
        {collapsible && (
          <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
            {isOpen ? '—' : '+'}
          </span>
        )}
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  collapsible: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Section;
