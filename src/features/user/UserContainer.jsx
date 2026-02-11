import { useState, useCallback } from 'react';
import UserView from './UserView';
import Toast from '../../components/common/Toast/Toast';

const UserContainer = () => {
  const [roles, setRoles] = useState([
    { id: 'pm', label: 'Project Manager', checked: false },
    { id: 'dev', label: 'Developer', checked: true },
    { id: 'arch', label: 'Architect', checked: true },
  ]);

  const [formData, setFormData] = useState({
    email: import.meta.env.VITE_USER_DEFAULT_EMAIL || '',
    phone: '+351 ',
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
    let formattedValue = value;

    // Auto-format phone: +351 999111222
    if (field === 'phone') {
      // Ensure it starts with +351 prefix
      if (!value.startsWith('+351') && value.length > 0) {
        // If they just started typing digits, prepended +351
        if (/^\d/.test(value)) {
          formattedValue = `+351 ${value}`;
        } else {
          formattedValue = '+351';
        }
      }

      // Auto-insert space after prefix if missing
      if (formattedValue.startsWith('+351') && formattedValue.length > 4 && formattedValue[4] !== ' ') {
        formattedValue = `+351 ${formattedValue.slice(4).trim()}`;
      }
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validate = (field = null) => {
    const newErrors = { ...errors };

    // Standard email regex ensuring @ and .
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Phone validation: MUST start with +351, followed by a space or nothing, then 9 digits
    const phoneRegex = /^\+351\s?[23789][0-9]{8}$/;

    if (!field || field === 'email') {
      if (!formData.email) {
        newErrors.email = 'O email é obrigatório';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Por favor, insira um email válido (ex: pm@premium-minds.com)';
      } else {
        delete newErrors.email;
      }
    }

    if (!field || field === 'phone') {
      if (!formData.phone) {
        newErrors.phone = 'O número de telefone es obligatorio';
      } else if (!formData.phone.startsWith('+351')) {
        newErrors.phone = 'O número deve começar com o prefixo +351';
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Número de telefone inválido (deve ter +351 seguido de 9 dígitos)';
      } else {
        delete newErrors.phone;
      }
    }

    // Role validation (at least one must be checked)
    const hasRole = roles.some(role => role.checked);
    if (!hasRole && (!field || field === 'roles')) {
      // We might want a general error or one associated with the section
      // For now, let's toast if it's a submit, or just log it.
      // The UI doesn't have a specific error field for the group in the design.
      // We'll handle this in handleSubmit specifically.
    }

    setErrors(newErrors);
    return Object.keys(newErrors).filter(key => newErrors[key]).length === 0 && hasRole;
  };

  const handleBlur = (field) => {
    validate(field);
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const isFormValid = validate();
    const hasRole = roles.some(role => role.checked);

    if (!hasRole) {
      setToast({ message: 'Selecione pelo menos um tipo de utilizador.', type: 'error' });
      return;
    }

    if (isFormValid) {
      console.log('Form submitted with roles:', roles, 'Data:', formData);
      setToast({ message: 'Alterações guardadas com sucesso!', type: 'success' });
    } else {
      setToast({ message: 'Por favor, corrija os erros do formulário.', type: 'error' });
    }
  }, [roles, formData, errors]);

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
        onBlur={handleBlur}
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
