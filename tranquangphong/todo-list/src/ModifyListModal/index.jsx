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
        initialValues={modalData.type === 'create'
          ? {
            title: '',
            description: ''
          }
          : {
            title: modalData.title,
            description: modalData.description
          }
        }
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Please input your task')
            .max(50, 'Must be 50 characters or less'),
            description: Yup.string()
            .required('Please input your description')
            .max(200, 'Must be 200 characters or less'),
        })}
        enableReinitialize
        onSubmit = {(values) => handleSubmitForm(values, modalData.type, modalData.id)}
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
              <label htmlFor="title">Description</label>
              <Field 
                className="form-control"
                as="textarea" 
                name="description"
                placeholder="Input your description" 
              />
              <div className="text-danger">
                <ErrorMessage name="description" />
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