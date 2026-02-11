import { useState, useCallback } from 'react';
import UserView from './UserView';
import Toast from '../../components/common/Toast/Toast';

const UserContainer = () => {
  const [roles, setRoles] = useState([
    { id: 'pm', label: 'Project Manager', checked: false, disabled: true },
    { id: 'dev', label: 'Developer', checked: true },
    { id: 'arch', label: 'Architect', checked: true },
  ]);

  const [formData, setFormData] = useState({
    email: import.meta.env.VITE_USER_DEFAULT_EMAIL || '',
    phone: '+351',
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const handleRoleChange = useCallback((id) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, checked: !role.checked } : role
      )
    );
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email incorrecto';
    }

    // Phone validation (simple example)
    if (formData.phone && !/^\+?[0-9\s-]{3,}$/.test(formData.phone)) {
      newErrors.phone = 'Número de teléfono inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted with roles:', roles, 'Data:', formData);
      setToast({ message: '¡Alterações guardadas com sucesso!', type: 'success' });
    } else {
      setToast({ message: 'Por favor, corrija los errores del formulario.', type: 'error' });
    }
  }, [roles, formData]);

  const handleCancel = useCallback(() => {
    if (window.confirm('Tem a certeza que deseja cancelar? As alterações não guardadas serão perdidas.')) {
      setToast({ message: 'Acción cancelada.', type: 'info' });
    }
  }, []);

  return (
    <>
      <UserView
        roles={roles}
        formData={formData}
        errors={errors}
        onRoleChange={handleRoleChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default UserContainer;
