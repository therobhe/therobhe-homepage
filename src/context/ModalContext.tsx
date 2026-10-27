import { createContext, useContext, useState, type ReactNode } from 'react';
import Modal from '../components/Modal';

// Global context for managing multiple modals
interface ModalConfig {
  isOpen: boolean;
  content: ReactNode | null;
}

interface ModalContextValue {
  modalConfig: ModalConfig;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextValue | null>(null);

// ModalProvider component that wraps the application to enable it to call modals
export function ModalProvider({ children }: ModalProviderProps) {
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    isOpen: false,
    content: null
  });

  // Opens a modal with the provided content
  const openModal = (content: ReactNode) => {
    setModalConfig({ isOpen: true, content });
  };

  // Closes the modal and resets the content
  const closeModal = () => {
    setModalConfig({ isOpen: false, content: null });
  };

  // Modal uses the context information which can be changed in the application (e.g. Footer.tsx)
  return (
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
      >
        {modalConfig.content}
      </Modal>
    </ModalContext.Provider>
  );
}

// Custom hook to enable each component to call the methods of the ModalContext
export const useModal = () => useContext(ModalContext)!;