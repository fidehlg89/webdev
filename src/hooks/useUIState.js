import { useState, useCallback } from 'react';

export const useUIState = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleSetActiveItem = useCallback((item) => {
    setActiveItem(item);
  }, []);

  return {
    activeItem,
    setActiveItem: handleSetActiveItem,
    isSidebarOpen,
    toggleSidebar,
  };
};
