import React, { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import ModifyListModal from '../ModifyListModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import './styles.css';

function TodoList() {
  const [todoListData, setTodoListData] = useState([
    {
      id: 1,
      title: 'Learning English',
      description: 'everyday at home'
    },
    {
      id: 2,
      title: 'Go to coffee shop',
      description: 'every morning in coffee shop'
    },
    {
      id: 3,
      title: 'Learning ReactJS',
      description: 'Monday, Wednesday, Friday in center'
    },
  ]);

  const [searchKey, setSearchKey] = useState('');
  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [modifyModalData, setModifyModalData] = useState({});
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);
  const [moreInfoList, setMoreInfoList] = useState([]);
  const [completeListData, setCompleteListData] = useState([]);

  const filterTodoListData = todoListData.filter((item) => {
    return (item.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1);
  });

  const handleShowModifyModal = (modifyType, modifyValue) => {
    setIsShowModifyModal(true);
    if (modifyType === 'create') {
      setModifyModalData({ 
        type: modifyType
      });
    } else {
      setModifyModalData({ 
        type: modifyType, 
        title: modifyValue.title, 
        description: modifyValue.description, 
        id: modifyValue.id 
      });
    }
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
    setConfirmModalData({});
  }

  const handleSubmitForm = (values, type, editedId) => {
    if (type === 'create') {
      setTodoListData([
        {
          id: Math.floor(Math.random() * 100),
          title: values.title,
          description: values.description,
        },
        ...todoListData
      ]);
    } else {
      const newTodoListData = todoListData;
      const taskIndex = todoListData.findIndex((item) => item.id === editedId);
      const editedTask = {
        ...todoListData[taskIndex],
        title: values.title,
        description: values.description
      } 
      newTodoListData.splice(taskIndex, 1, editedTask);
      setTodoListData([
        ...newTodoListData
      ]);
    }
    setIsShowModifyModal(false);
  }

  const handleDeleteTask = (deletedId) => {
    const newTodoListData = todoListData;
    const taskIndex = todoListData.findIndex((item) => item.id === deletedId) 
    newTodoListData.splice(taskIndex, 1);
    setTodoListData([
      ...newTodoListData
    ]);
    setIsShowConfirmModal(false);
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setSearchKey(value);
  }

  const handleToggleMoreInfo = (id) => {
    const moreInfoIndex = moreInfoList.findIndex((moreId) => moreId === id);
    if (moreInfoIndex === -1) {
      setMoreInfoList([
        ...moreInfoList,
        id
      ])
    } else {
      const newMoreInfoList = moreInfoList
      newMoreInfoList.splice(moreInfoIndex, 1);
      setMoreInfoList([
        ...newMoreInfoList
      ]);
    }
  }

  const handleCompleteTask = (e, completeItem) => {
    e.preventDefault();
    const { checked } = e.target;
    if (checked) {
      const newTodoListData = todoListData;
      const taskIndex = todoListData.findIndex((item) => item.id === completeItem.id)
      setCompleteListData([
        completeItem,
        ...completeListData
      ]);
      newTodoListData.splice(taskIndex, 1);
      setTodoListData([
        ...newTodoListData 
      ]);
    }
  }

  const renderTodoTaskList = () => {
    return filterTodoListData.map((item, itemIndex) => {
      if (!isShowMore & itemIndex > 4) {
        return null;
      }
      return (
        <ListGroup.Item key={`todolist-${item.id}-${itemIndex}`}>
          <div className="todo-item-container">
            <div className="d-flex">
              <Form.Check type="checkbox" onChange={(e) => handleCompleteTask(e, item)} />
              <div className="ml-2">{item.title}</div>
            </div>
            <div className="todo-item-action">
              <Button 
                variant="outline-secondary" 
                className="mr-2"
                onClick={() => handleToggleMoreInfo(item.id)}
              >
                {moreInfoList.findIndex((moreId) => moreId === item.id) === -1 ? 'Show' : 'Hide'}
              </Button>
              <Button 
                variant="outline-info" 
                className="mr-2"
                onClick={() => handleShowModifyModal('edit', item)}
              >
                Edit
              </Button>
              <Button 
                variant="outline-danger"
                onClick={() => handleShowConfirmModal(item.id)}
              >
                Delete
              </Button>
            </div>
          </div>
          {(moreInfoList.findIndex((id) => id === item.id) !== -1) && (
            <div className="todo-list-description">
              {item.description}
            </div>
          )}
        </ListGroup.Item>
      );
    }); 
  }

  const renderCompleteTaskList = () => {
    return completeListData.map((item, itemIndex) => {
      return (
        <ListGroup.Item key={itemIndex} className="d-flex" style={{ backgroundColor: '#EEE'}}>
          <Form.Check type="checkbox" checked />
          <div className="ml-2"><del>{item.title}</del></div>
        </ListGroup.Item> 
      );
    }); 
  }
 
  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <h4 className="mb-3">Todo list</h4>
          <div className="todo-list-title">
            <input 
              className="form-control"
              placeholder="Search..."
              style={{width: 300}}
              onChange={(e) => handleChangeSearch(e)}
            />  
            <Button variant="primary" onClick={() => handleShowModifyModal('create')}>
              Add task
            </Button>
          </div>
          <div className="mt-3">
            <ListGroup>
              { renderTodoTaskList() }
            </ListGroup>
            {(!isShowMore && filterTodoListData.length > 5) && (
              <div className="d-flex justify-content-center mt-3">
                <Button 
                  variant="info"
                  className="rounded-pill"
                  onClick={() => setIsShowMore(true)}
                >
                  Show more
                </Button>
              </div>
            )}
          </div>
          <div className="mt-3">
          <h4 className="mb-3">Completed todo list</h4>
            <ListGroup>
              { renderCompleteTaskList() }
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