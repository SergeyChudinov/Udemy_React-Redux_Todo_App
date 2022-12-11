import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SerchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return(
    <div>
      <AppHeader/>
      <SerchPanel/>
      <TodoList/>
    </div> 
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

