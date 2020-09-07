import React from 'react';
import { Button, Modal, Form as FormBootstrap } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ModifyListModal({
  isShowModal,
  handleHideModal,
  handleSubmitForm,
  modalData
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{`${modalData.type === 'create' ? 'Add' : 'Edit'} task`}</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ title: modalData.type === 'create' ? '' : modalData.title }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Please input your task')
            .max(50, 'Must be 50 characters or less'),
        })}
        enableReinitialize
        onSubmit = {(values) => handleSubmitForm(values, modalData.type, modalData.index)}
      >
        <Form>
          <Modal.Body>
            <FormBootstrap.Group>
              <label htmlFor="title">Task name</label>
              <Field 
                className="form-control"
                type="text" 
                name="title"
                placeholder="Input your task name" 
              />
              <div className="text-danger">
                <ErrorMessage name="title" />
              </div>
            </FormBootstrap.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleHideModal()}>
              Close
            </Button>
            <Button 
              type="submit" 
              variant="primary"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>          
    </Modal>
  );
}

export default ModifyListModal;