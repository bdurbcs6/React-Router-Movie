import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={Math.random()} className="saved-movie"><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
        ))}
        <div className="home-button">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    );
  }
}
