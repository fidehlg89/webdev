import PropTypes from 'prop-types';
import styles from './UserForm.module.css';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import Checkbox from '../../components/common/Checkbox/Checkbox';
import Section from '../../components/common/Section/Section';

const UserForm = ({
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
            onBlur={() => onBlur('email')}
            error={errors.email}
            required
          />
          <Input
            label="Palavra-passe"
            type="password"
            placeholder="********"
            value={formData.password}
            onChange={(e) => onInputChange('password', e.target.value)}
            onBlur={() => onBlur('password')}
            error={errors.password}
          />
          <Input
            label="Telefone"
            type="text"
            placeholder="+351"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            onBlur={() => onBlur('phone')}
            error={errors.phone}
            required
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
  );
};

UserForm.propTypes = {
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

export default UserForm;
