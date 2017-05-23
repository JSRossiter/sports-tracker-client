import React from 'react';
import PropTypes from 'prop-types';
import CardFooter from './CardFooter';
import PlayByPlay from './PlayByPlay';

export default function Card({ ...props }) {
  const name = `${props.awayTeam} @ ${props.homeTeam}`;

  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-block">
          <div className="d-flex justify-content-around">
            <div className="card-title">{ props.league }</div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="card-title">April 1, 2017</div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="card-text d-flex flex-column">
              <div className="text-center">{ props.awayTeam }</div>
              <div>{ props.awayScore }</div>
            </div>

            <div className="card-text d-flex flex-column">
              <div>{ props.homeTeam }</div>
              <div>{ props.homeScore }</div>
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="card-title">Quarter: { props.quarter } </div>
            <div className="card-title">Time Remaining: { props.timeRemaining } </div>
          </div>

        </div>

        <PlayByPlay plays={ props.plays } />

        <CardFooter
          name={ name }
          socket={ props.socket }
          joinRoom={ props.joinRoom }
          gameId={ props.gameId }
        />

      </div>
    </div>
  );
}

Card.propTypes = {
  plays: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  league: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  quarter: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  gameId: PropTypes.number.isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired
};
