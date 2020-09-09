import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import ModifyListModal from '../ModifyListModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

import './styles.css';

function TodoList() {
  const [todoListData, setTodoListData] = useState([
    {
      id: 1,
      title: 'Viết code',
      description: 'Ahihi 1',
    },
    {
      id: 2,
      title: 'Dạy online',
      description: 'Ahihi 2',
    },
    {
      id: 3,
      title: 'Dạy online 2',
      description: 'Ahihi 3',
    },
    {
      id: 4,
      title: 'Dạy online 3',
      description: 'Ahihi 4',
    },
    {
      id: 5,
      title: 'Dạy online 4',
      description: 'Ahihi 5',
    },
    {
      id: 6,
      title: 'Dạy online 5',
      description: 'Ahihi 6',
    },
    {
      id: 7,
      title: 'Dạy online 6',
      description: 'Ahihi 7',
    }
  ]);
  const [searchKey, setSearchKey] = useState('');
  const [isShowModifyModal, setIsShowModifyModal] = useState(false);
  const [modifyModalData, setModifyModalData] = useState({});
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);
  const [moreInfoList, setMoreInfoList] = useState([]);
  console.log('Log: TodoList -> moreInfoList', moreInfoList);

  const filterTodoListData = todoListData.filter((item) => {
    return (item.title.toLowerCase()).indexOf(searchKey.toLowerCase()) !== -1;
  });

  // Show/hide Modify Modal
  const handleShowModifyModal = (modifyType, modifyValue, index) => {
    setIsShowModifyModal(true);
    setModifyModalData({
      type: modifyType,
      title: modifyValue,
      index: index,
    });
  }
  const handleHideModifyModal = () => {
    setIsShowModifyModal(false);
    setModifyModalData({});
  }

  // Show/hide Confirm Modal
  const handleShowConfirmModal = (index) => {
    setIsShowConfirmModal(true);
    setConfirmModalData({ index: index });
  }
  const handleHideConfirmModal = () => {
    setIsShowConfirmModal(false);
    setConfirmModalData({});
  }

  const handleSubmitForm = (values, type, editedId) => {
    if (type === 'create') {
      setTodoListData([
        {
          title: values.title,
        },
        ...todoListData,
      ]);
    } else {
      const newTodoListData = todoListData;
      const taskIndex = todoListData.findIndex((item) => item.id === editedId);
      newTodoListData.splice(taskIndex, 1, { title: values.title });
      setTodoListData([
        ...newTodoListData,
      ]);
    }
    setIsShowModifyModal(false);
  }

  const handleDeleteTask = (deletedId) => {
    const newTodoListData = todoListData;
    const taskIndex = todoListData.findIndex((item) => item.id === deletedId);
    newTodoListData.splice(taskIndex, 1);
    setTodoListData([
      ...newTodoListData,
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
        id,
      ]);
    } else {
      const newMoreInfoList = moreInfoList;
      newMoreInfoList.splice(moreInfoIndex, 1);
      setMoreInfoList([
        ...newMoreInfoList,
      ]);
    }
  }
  
  const renderItemList = () => {
    return filterTodoListData.map((item, itemIndex) => {
      if (!isShowMore && itemIndex > 4) {
        return null;
      }
      return (
        <ListGroup.Item key={itemIndex}>
          <div className="todo-item-container">
            <p>{item.title}</p>
            <div className="todo-item-action">
              <Button
                variant="outline-secondary"
                className="mr-2"
                onClick={() => handleToggleMoreInfo(item.id)}
              >
                {moreInfoList.findIndex((moreId) => moreId === item.id) === -1 ? 'Hiện' : 'Ẩn'}
              </Button>
              <Button
                variant="outline-danger"
                className="mr-2"
                onClick={() => handleShowConfirmModal(item.id)}
              >
                Xóa
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => handleShowModifyModal('edit', item.title, item.id)}
              >
                Sửa
              </Button>
            </div>
          </div>
          {(moreInfoList.findIndex((id) => id === item.id) !== -1) && (
            <div className="todo-item-description">
              {item.description}
            </div>
          )}
        </ListGroup.Item>
      );
    });
  }

  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <h4>Todo List</h4>
          <div className="todo-list-title">
            <input
              className="form-control"
              placeholder="Tìm kiếm..."
              onChange={(e) => handleChangeSearch(e)}
              style={{ width: 300 }}
            />
            <Button variant="primary" onClick={() => handleShowModifyModal('create')}>
              Thêm công việc
            </Button>
          </div>
          <div className="mt-2">
            <ListGroup>
              {renderItemList()}
            </ListGroup>
            {(!isShowMore && filterTodoListData.length > 5) && (
              <div className="d-flex justify-content-center mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={() => setIsShowMore(true)}
                >
                  Hiển thị thêm
                </Button>
              </div>
            )}
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
