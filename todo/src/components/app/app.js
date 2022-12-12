import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '..//search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {

  maxId = 100;
  
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, done: false, id: 1 },
      { label: 'Make Awesome App', important: false, done: false, id: 2 },
      { label: 'Have a lunch', important: false, done: false, id: 3 }
    ]
  }

  onToggleProp = (id, prop) => {
    this.setState(({todoData}) => ({
      todoData: todoData.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item
        })
    }))
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => ({
      todoData: todoData.filter(item => {
        return item.id !== id
      })
    }))
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });

  };

  render() {
    let { todoData } = this.state;

    let todoCount = todoData.filter(item => {
      return item.done === false
    }).length;
    let doneCount = todoData.length - todoCount;


    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleProp={this.onToggleProp} />

        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}
export default App;