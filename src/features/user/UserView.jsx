import PropTypes from 'prop-types';
import styles from './UserView.module.css';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import Checkbox from '../../components/common/Checkbox/Checkbox';
import Section from '../../components/common/Section/Section';

const UserView = ({
  roles,
  formData,
  errors,
  onRoleChange,
  onInputChange,
  onSubmit,
  onCancel
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Utilizador</h1>
      </header>

      <form className={styles.formContent} onSubmit={onSubmit}>
        <Section title="Tipo de utilizador">
          <div className={styles.checkboxGroup}>
            {roles.map((role) => (
              <Checkbox
                key={role.id}
                label={role.label}
                checked={role.checked}
                disabled={role.disabled}
                onChange={() => onRoleChange(role.id)}
              />
            ))}
          </div>
        </Section>

        <Section title="Contacto">
          <div className={styles.fieldGrid}>
            <Input
              label="Email"
              type="email"
              placeholder="pm@premium-minds.com"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              error={errors.email}
              required
            />
            <Input
              label="Palavra-passe"
              type="password"
              placeholder="********"
              defaultValue="password123"
              disabled
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="+351"
              value={formData.phone}
              onChange={(e) => onInputChange('phone', e.target.value)}
              error={errors.phone}
            />
          </div>
        </Section>

        <footer className={styles.formFooter}>
          <Button variant="outline" type="button" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            GUARDAR
          </Button>
        </footer>
      </form>
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
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  onRoleChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

export default UserView;
