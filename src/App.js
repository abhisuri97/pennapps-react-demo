import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'abhisuri97',
      realName: '',
      avatar: '',
      location: '', 
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    }
  }
    
  fetchUser(username) {
    let url = `https://api.github.com/users/${username}`
    this.fetchApi(url);
  }

  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchApi(url)
  }

  fetchApi(url) {
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
        })
      })
      .catch((err) => console.log('error'))
  }

  render() {
    return (
      <div>
        <SearchBox fetchUser = {this.fetchUser.bind(this)} />
        <Card data={this.state}/>
      </div>
    );
  }
}

export default App;
