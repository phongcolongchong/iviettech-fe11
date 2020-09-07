import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';
import ModifyListModal from './ModifyListModal';
import TodoItem from './TodoItem';
import TodoItemCheck from './TodoItemCheck';
import './styles.css';

function TodoList() {
  const [todoListData, setTodoListData] = useState([
    {
      title: 'Go to coffee shop'
    },
    {
      title: 'Learning ReactJS'
    },
  ])

  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => setIsShowModal(true);
  const handleHideModal = () => setIsShowModal(false);

  const handleSubmitForm = (values) => {
    setTodoListData([
      {
        title: values.title
      },
      ...todoListData
    ]);
    handleHideModal();
  }

  const renderItemList = () => {
    return todoListData.map((item, itemIndex) => (
      <div className="todo-item" key={itemIndex}>
        <BsCircle className="icon icon-check" color="green" />
        <div className="content">{item.title}</div> 
        <FaEdit className="icon icon-edit" color="grey" />
        <AiFillDelete className="icon icon-delete" color="grey" />
      </div>
    ))
  }

  return (
    <div>
      <div className="container-todo-list">
        <div className="container-title">
          Todo List
        </div>
        <div className="container-todo-item">
          { renderItemList() }
          <TodoItemCheck />
        </div>
        <div className="add-task">
          <input className="input" type="text" />
          <button className="add-btn" onClick={() => handleShowModal()}>Add</button>
        </div>
      </div>
      <ModifyListModal 
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default TodoList;