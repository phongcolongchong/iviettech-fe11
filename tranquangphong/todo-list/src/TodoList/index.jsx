import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import ModifyListModal from '../ModifyListModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import './styles.css';

function TodoList() {
  const [todoListData, setTodoListData] = useState([
    {
      title: 'Learning English'
    },
    {
      title: 'Go to coffee shop'
    },
  ]);

  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [modifyModalData, setModifyModalData] = useState({});
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState({});

  const handleShowModifyModal = (modifyType, modifyValue, index) => {
    setIsShowModifyModal(true);
    setModifyModalData({ type: modifyType, title: modifyValue, index: index });
  }

  const handleHideModifyModal = () => {
    setIsShowModifyModal(false);
    setModifyModalData({});
  }

  const handleShowConfirmModal = (index) => {
    setIsShowConfirmModal(true);
    setConfirmModalData({index: index});
  }

  const handleHideConfirmModal = () => {
    setIsShowConfirmModal(false);
    setIsShowConfirmModal({});
  }

  const handleSubmitForm = (values, type, index) => {
    if (type === 'create') {
      setTodoListData([
        {
          title: values.title
        },
        ...todoListData
      ]);
    } else {
      const newTodoListData = todoListData;
      newTodoListData.splice(index, 1, { title: values.title });
      setIsShowConfirmModal([
        ...newTodoListData
      ]);
    }
    setIsShowModifyModal(false);
  }

  const handleDeleteTask = (index) => {
    const newTodoListData = todoListData;
    newTodoListData.splice(index, 1);
    setIsShowConfirmModal([
      ...newTodoListData
    ]);
    setIsShowConfirmModal(false);
  }

  const renderItemList = () => {
    return todoListData.map((item, itemIndex) => (
      <ListGroup.Item key={itemIndex} className="todo-item-container">
        <div>{item.title}</div>
        <div className="todo-item-action">
          <Button 
            variant="outline-info" 
            className="mr-2"
            onClick={() => handleShowModifyModal('edit', item.title, itemIndex)}
          >
            Edit
          </Button>
          <Button 
            variant="outline-danger"
            onClick={() => handleShowConfirmModal(itemIndex)}
          >
            Delete
          </Button>
        </div>
      </ListGroup.Item>
    ))
  }

  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <div className="todo-list-title">
            <h4>Todo list</h4>
            <Button variant="primary" onClick={() => handleShowModifyModal('create')}>
              Add task
            </Button>
          </div>
          <div className="mt-3">
            <ListGroup>
              { renderItemList() }
            </ListGroup>
          </div>
        </div>
      </div>
      <ModifyListModal
        isShowModal={isShowModifyModal}
        handleHideModal={handleHideModifyModal}
        handleSubmitForm={handleSubmitForm}
        modalData={modifyModalData}
      />
      <ConfirmDeleteModal
        isShowModal={isShowConfirmModal}
        handleHideModal={handleHideConfirmModal}
        handleDeleteTask={handleDeleteTask}
        modalData={confirmModalData}
      />
    </div>
  );
}

export default TodoList;