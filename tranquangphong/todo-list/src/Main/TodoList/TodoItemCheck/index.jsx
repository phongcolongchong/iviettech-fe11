import React from 'react';
import './styles.css';
import { FaCheckCircle, FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function TodoItemCheck() {
  return (
    <div className="todo-item">
      <FaCheckCircle className="icon check" color="green" />
      <div className="content-check">Go to shopping</div> 
      <FaEdit className="icon edit" color="grey" />
      <AiFillDelete className="icon" color="grey" />
    </div>
  );
}

export default TodoItemCheck;