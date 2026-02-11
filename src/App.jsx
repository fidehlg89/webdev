import MainLayout from './features/layout/MainLayout';
import UserContainer from './features/user/UserContainer';
import { UIProvider, useUI } from './context/UIContext';

const AppContent = () => {
  const { activeItem } = useUI();

  const renderContent = () => {
    switch (activeItem) {
      case 'Lorem Ipsum':
        return <span>Lorem Ipsum</span>;
      case 'Utilizador':
        return <UserContainer />;
      case 'Quantum solum':
        return <span>Quantum solum</span>;
      case 'Marcus Tremer':
        return <span>Marcus Tremer</span>;
      default:
        return <UserContainer />;
    }
  };

  return <MainLayout>{renderContent()}</MainLayout>;
};

function App() {
  return (
    <UIProvider>
      <AppContent />
    </UIProvider>
  );
}

export default App;
