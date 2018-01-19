import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let data = this.props.data
    if (data.notFound === 'Not Found') {
      return <h3 className="card__notFound">User not ofund. Try again!</h3>
    } else {

      return (
        <div className="card">
        <a href={data.url} target="_blank">
        <img className="card__avatar" src={data.avatar} />             
        </a>
        <h2 className="card__username">
        <a className="card__link" href={data.url} target="_blank">{data.username}</a></h2>
        <dl>
        <dt>Real name</dt>
        <dd>{data.realName}</dd>

        <dt>Location</dt>
        <dd>{data.location}</dd>

        <dt>Number of public repos</dt>
        <dd>{data.repos}</dd>

        <dt>Number of followers</dt>
        <dd>{data.followers}</dd>
        </dl>
        </div>
      )
    }
  }
}

export default Card;
