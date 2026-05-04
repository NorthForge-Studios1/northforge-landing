import { createContext, useContext } from 'react';

interface ModalContextType {
  openSubmit: () => void;
  openContact: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openSubmit: () => {},
  openContact: () => {},
});

export const useModal = () => useContext(ModalContext);
