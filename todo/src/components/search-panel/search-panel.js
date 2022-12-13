import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {  
    term: ''         
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({
      term: term
    });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input onChange={this.onUpdateSearch}
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term} />
    );
  }
}
