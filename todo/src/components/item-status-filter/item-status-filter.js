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
