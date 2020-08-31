import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './styles.css';
import TodoItem from './TodoItem';
import TodoItemCheck from './TodoItemCheck';

function TodoList() {
  let date = new Date();
  return (
    <div className="container-todo-list">
      <div className="container-title">
        {/* <Moment className="time">{date}</Moment> */}
      </div>
      <div className="container-todo-item">
        <TodoItem />
        <TodoItem />
        <TodoItemCheck />
        <TodoItemCheck />
      </div>
      <div className="add-input">
        <input className="input" type="text" />
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default TodoList;