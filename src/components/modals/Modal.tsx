import React, { ReactNode } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';

type Props = {
  title: string;
  body: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  btns: React.ReactNode;
};

const GlobalModal = ({ title, body, isOpen, onClose, btns }: Props) => {
  return (
    <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{btns}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GlobalModal;
