import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <form 
      className="searchbox" 
      onSubmit={this.handleClick.bind(this)}>
      <input
      ref="search"
      className="searchbox__input" 
      type="text" 
      placeholder="type username..."/>

      <input
      type="submit"
      className="searchbox__button"
      value="Search GitHub User" />
      </form>
    )
  }

  handleClick(e) {
    e.preventDefault()
    let username = this.refs.search.value
    this.props.fetchUser(username)
    this.refs.search.value = ''
  }
}

export default SearchBox;
