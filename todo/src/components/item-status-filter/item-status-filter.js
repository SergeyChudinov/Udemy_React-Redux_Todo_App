import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttonData = [
    {name: 'All', label: 'All'},
    {name: 'Active', label: 'Active'},
    {name: 'Done', label: 'Done'}
  ];

  render() {
    const {filter, onFilterSelect} = this.props;

    const buttons = this.buttonData.map(({name}) => {
      const active = filter === name;
      const clazz = active ? "btn btn-info" : "btn btn-outline-secondary";
  
      return (
        <button onClick={() => onFilterSelect(name)} type="button"
            className={clazz} key={name}>{name}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

// const buttonData = [
//   {name: 'all', label: 'Все сотрудники', colored: false},
//   {name: 'rise', label: 'На повышение', colored: false},
//   {name: 'moreThen1000', label: 'З/П больше 1000$', colored: false},
//   {name: 'lessThen1000', label: 'З/П меньше 1000$', colored: true}
// ];
// const buttons = buttonData.map(({name, label, colored}) => {
//   const active = props.filter === name;
//   const clazz = active ? "btn btn-light" : "btn btn-outline-light";
//   const red = colored ? 'red' : '';
//   return (
//       <button 
//       onClick={() => props.onFilterSelect(name)}
//           className={clazz}
//           type="button"
//           key={name}
//           style={{color: red}}>
//           {label}
//       </button>
//   )
// })
// return (
//   <div className="btn-group">
//       {buttons}
//   </div>
// );