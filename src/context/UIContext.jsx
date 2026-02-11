import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useUIState } from '../hooks/useUIState';

const UIContext = createContext(undefined);

export const UIProvider = ({ children }) => {
  const uiState = useUIState();

  return (
    <UIContext.Provider value={uiState}>
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
