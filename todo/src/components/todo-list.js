import React from 'react';

import TodoListItem from './todo-lict-item';

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label='Drink Coffe'/></li>
        <li><TodoListItem label='Build React App' important/></li>
      </ul>
    )
}
export default TodoList;