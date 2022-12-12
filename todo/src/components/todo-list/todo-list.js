import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleProp }) => {

    const elements = todos.map(({id, ...props}) => {
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...props}
                    onDeleted={() => onDeleted(id)}
                    onToggleProp={(prop) => onToggleProp(id, prop)}/>
            </li>
          )
    })

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    )
}
export default TodoList;