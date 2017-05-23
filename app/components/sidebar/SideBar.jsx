import React, { Component } from 'react';
import NBA from './NBA';
import NFL from './NFL';
import NHL from './NHL';
import MLB from './MLB';

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item" data-toggle="collapse" data-target="#nfl">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nhl.png" alt="nhl" /> NHL <span className="arrow" /></a>
          </li>
          <ul className="sub-menu collapse" id="nfl">
            <li>Game 1</li>
            <li>Game 2</li>
            <li>Game 3</li>
          </ul>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nba.png" alt="nhl" /> NBA <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/mlb.png" alt="mlb" /> MLB <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nfl.png" alt="nhl" /> NFL <span className="arrow" /></a>
          </li>
        </ul>
      </nav>
    );
  }
}
