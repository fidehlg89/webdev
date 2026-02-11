import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, className = '', id, ...props }) => {
  const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <label htmlFor={checkboxId} className={`${styles.checkboxLabel} ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className={styles.hiddenCheckbox}
        {...props}
      />
      <div className={styles.styledCheckbox}>
        <svg viewBox="0 0 24 24" className={styles.icon}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className={styles.labelTexts}>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Checkbox;
