import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveMLB, receiveNBA, receiveNHL, receiveNFL } from '../actions/api';
import { receiveCard } from '../actions/card';
import LeagueItem from '../components/sidebar/LeagueItem';
import api from '../lib/api';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    // to identify league that has been clicked
    this.state = { activeLeague: '' };
  }

  componentDidMount() {
    const HOST = location.origin.replace('8081', '8080');

    const { dispatch } = this.props;
    api.get(`${HOST}/leagues/nhl`).then((response) => {
      dispatch(receiveNHL(response.response));
    });

    api.get(`${HOST}/users/get`).then((response) => {
      if (Object.keys(response.response).length) {
        response.response.forEach((card) => {
          api.post(`${HOST}/leagues/${card.league}/games/${card.gameId}`, card).then((response) => {
            dispatch(receiveCard(response.response));
          });
        });
      }
    });

<<<<<<< HEAD
    const pathArray = window.location.pathname.split('/');
    if (pathArray[0] === 'game') {
      this.addCard();
    }
=======
    $('.sidebar').on(('shown.bs.collapse'), function(){
      $('body').addClass('noScroll');
    });

    $('.sidebar').on(('hidden.bs.collapse'), function(){
      $('body').removeClass('noScroll');
    });
>>>>>>> master
  }

  addCard = (gameProps) => {
    const { dispatch } = gameProps;
    const HOST = location.origin.replace('8081', '8080');
    const game = {
      gameId: gameProps.gameId,
      league: gameProps.league,
      homeTeam: gameProps.homeTeam.Abbreviation,
      awayTeam: gameProps.awayTeam.Abbreviation,
      location: gameProps.homeTeam.City,
      time: gameProps.time,
      date: gameProps.date
    };
    api.post(`${HOST}/leagues/${gameProps.league}/games/${gameProps.gameId}`, game).then((response) => {
      dispatch(receiveCard(response.response));
    });
    $('.sidebar').removeClass('show');
  };

  // handle toggle highlight of league
  leagueClick(league) {
    if (league === this.state.activeLeague) {
      league = '';
    }
    this.setState(Object.assign({}, this.state, { activeLeague: league }));
  }

  render() {
    return (
      <nav className="col-sm-3 bg-faded navbar-collapse collapse sidebar pt-0" id="collapseLeagueItem">
        <h5 className="d-flex justify-content-center mb-0 league-game-heading">Leagues & Games</h5>
        <div className="nav-item league-heading">
          {
            this.props.leagues.map(league => (
              <LeagueItem
                key={ league.name }
                leagueClick={ this.leagueClick.bind(this, league.name) }
                league={ league.name }
                gameData={ league.data }
                isActive={ this.state.activeLeague === league.name }
                addCard={ this.addCard }
              />
            ))
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  leagues: [{
    name: 'NHL',
    data: state.sidebar.gamesNHL
  }, {
    name: 'NFL',
    data: state.sidebar.gamesNFL
  }, {
    name: 'NBA',
    data: state.sidebar.gamesNBA
  }, {
    name: 'MLB',
    data: state.sidebar.gamesMLB
  }],
  receivedAt: state.sidebar.receivedAt
});

export default connect(mapStateToProps)(Sidebar);
