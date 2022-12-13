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
    ],
    term: '',
    filter: 'All'
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    });
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items
    }
    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onFilterSelect = (filter) => {
    this.setState({
        filter: filter
    })
  }

  filtePost = (items, filter) => {
    switch (filter) {
        case 'Active':
            return items.filter(item => !item.done);
        case 'Done':
            return items.filter(item => item.done);   
        default:
            return items;             
    }
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
    const { todoData, term, filter } = this.state;

    const todoCount = todoData.filter(item => {
      return item.done === false
    }).length;
    const doneCount = todoData.length - todoCount;

    const visibleData = this.filtePost(this.searchEmp(todoData, term), filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <ItemStatusFilter onFilterSelect={this.onFilterSelect}
          filter={filter} />
        </div>
  
        <TodoList todos={visibleData} onDeleted={this.deleteItem} onToggleProp={this.onToggleProp} />

        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
}
export default App;