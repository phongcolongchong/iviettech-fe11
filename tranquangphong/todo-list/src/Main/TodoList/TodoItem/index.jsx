import React from 'react';
import './styles.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';

function TodoItem() {
  return (
    <div className="todo-item">
      <BsCircle className="icon check" color="green" />
      <div className="content">Go to coffee shop</div> 
      <FaEdit className="icon edit" color="grey" />
      <AiFillDelete className="icon" color="grey" />
    </div>
  );
}

export default TodoItem;