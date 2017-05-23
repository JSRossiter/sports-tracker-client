import React from 'react';
import PropTypes from 'prop-types';

const CardMain = ({ ...props }) => (
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
    );

CardMain.propTypes = {
  league: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  quarter: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired
};

export default CardMain;

