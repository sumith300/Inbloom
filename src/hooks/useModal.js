import { useState } from 'react';

export const useModal = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return { selectedItem, openModal, closeModal };
}; 