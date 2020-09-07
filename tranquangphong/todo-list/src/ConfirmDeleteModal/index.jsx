import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ConfirmDeleteModal({
  isShowModal,
  handleHideModal,
  handleDeleteTask,
  modalData
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete this task?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleHideModal()}>
          Cancel
        </Button>
        <Button 
          type="submit" 
          variant="danger"
          onClick={() => handleDeleteTask(modalData.index)}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;