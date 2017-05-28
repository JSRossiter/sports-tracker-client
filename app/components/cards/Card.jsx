import React from 'react';
import PropTypes from 'prop-types';
import CardMainNBA from './CardMainNBA';
import CardMainNHL from './CardMainNHL';
import CardMainMLB from './CardMainMLB';
import PlayByPlay from './PlayByPlay';
import CardFooter from './CardFooter';
import cardProps from '../../prop_validations/card';

export default function Card({ ...props }) {
  const name = `${props.awayTeam}/${props.homeTeam}`;
  return (
    <div className="game-card">
      { props.league === 'NBA' && <CardMainNBA
        gameId={ props.gameId }
        league={ props.league }
        homeTeam={ props.homeTeam }
        awayTeam={ props.awayTeam }
        homeScore={ props.homeScore }
        awayScore={ props.awayScore }
        isCompleted={ props.isCompleted }
        quarter={ props.quarter }
        timeRemaining={ props.timeRemaining }
        closeCard={ props.closeCard }
        startTime={ props.startTime  }
      />
    }
      { props.league === 'MLB' && <CardMainMLB
        gameId={ props.gameId }
        homeTeam={ props.homeTeam }
        awayTeam={ props.awayTeam }
        homeScore={ props.homeScore }
        awayScore={ props.awayScore }
        isCompleted={ props.isCompleted }
        currentInning={ props.currentInning }
        currentInningHalf={ props.currentInningHalf }
        innings={ props.innings }
        plays={ props.plays }
        gameStarted={ props.gameStarted }
        gameCompleted={ props.gameCompleted }
        closeCard={ props.closeCard }
        startTime={ props.startTime }
      />
    }
      { props.league === 'NHL' && <CardMainNHL
        gameId={ props.gameId }
        league={ props.league }
        homeTeam={ props.homeTeam }
        awayTeam={ props.awayTeam }
        homeScore={ props.homeScore }
        awayScore={ props.awayScore }
        isCompleted={ props.isCompleted }
        period={ props.period }
        periods={ props.periods }
        timeRemaining={ props.timeRemaining }
        closeCard={ props.closeCard }
        startTime={ props.startTime }
      />
    }

      <PlayByPlay plays={ props.plays } display={ props.displayPlayByPlay } />

      <CardFooter
        name={ name }
        socket={ props.socket }
        joinRoom={ props.joinRoom }
        postJoinRoom={ props.postJoinRoom }
        gameId={ props.gameId }
        togglePlayByPlay={ props.togglePlayByPlay }
        gameStarted={ props.gameStarted }
      />
    </div>
  );
}

Card.propTypes = {
  ...cardProps,
  displayPlayByPlay: PropTypes.bool.isRequired,
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  joinRoom: PropTypes.func.isRequired,
  closeCard: PropTypes.func.isRequired
};
