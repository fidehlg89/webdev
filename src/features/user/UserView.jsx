import PropTypes from 'prop-types';
import styles from './UserView.module.css';
import UserForm from './UserForm';

const UserView = ({
  roles,
  formData,
  errors,
  onRoleChange,
  onInputChange,
  onBlur,
  onSubmit,
  onCancel
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Utilizador</h1>
      </header>

      <UserForm
        roles={roles}
        formData={formData}
        errors={errors}
        onRoleChange={onRoleChange}
        onInputChange={onInputChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

UserView.propTypes = {
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string,
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    password: PropTypes.string,
  }),
  onRoleChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

export default UserView;
