import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { receiveCard } from '../../actions';
import api from '../../lib/api';

const Game = (props) => {
  const HOST = location.origin.replace('8081', '8080');

  const add = (gameProps) => {
    const { dispatch } = gameProps;
    const game = {
      gameId: gameProps.gameId,
      league: gameProps.league,
      homeTeam: gameProps.homeTeam.Abbreviation,
      awayTeam: gameProps.awayTeam.Abbreviation,
      time: gameProps.time,
      date: gameProps.date
    };
    props.addCard(game.gameId, game.homeTeam, game.awayTeam, game.time);
    api.post(`${HOST}/leagues/${gameProps.league}/games/${gameProps.gameId}`, game).then((response) => {
      dispatch(receiveCard(response.response));
    }).catch((err) => {
      props.notify({
        title: 'Problem fetching data',
        status: 'error',
        dismissible: true,
        message: err.responseJSON.message,
        dismissAfter: 2000
      });
      props.failedCardLoad(gameProps.gameId);
    });
    $('.sidebar').removeClass('show');
  };
  const dateFormatted = moment(props.date).format('MMM Do');
  // const timeString = props.league === 'MLB' ? props.time : `${props.time} ${dateFormatted}`;
  const timeString = `${props.time} ${dateFormatted}`;

  return (
    <div className="game-container">
      <a onClick={ () => add(props) } role="button" tabIndex={ 0 }>
        <li className="d-flex justify-content-center game pt-2 pb-2">
          {props.awayTeam.Abbreviation} @ {props.homeTeam.Abbreviation} ({timeString})
        </li>
      </a>
    </div>
  );
};

Game.propTypes = {
  league: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
  awayTeam: PropTypes.shape({
    Abbreviation: PropTypes.string.isRequired
  }).isRequired,
  homeTeam: PropTypes.shape({
    Abbreviation: PropTypes.string.isRequired
  }).isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired
};

export default connect()(Game);
