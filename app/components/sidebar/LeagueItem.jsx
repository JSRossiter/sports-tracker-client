import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const LeagueItem = ({ leagueClick, league, gameData, isActive, addCard }) => {
  const activeLeagueClass = `d-flex justify-content-center league-heading pl-0 pt-3 pb-3 nav-link ${isActive ? 'active' : ''}`;

  return (
    <ul className="nav nav-pills mb-0 flex-column">
      <li className="nav-item" data-toggle="collapse" data-target={ `#${league}` }>
        <div
          onClick={ leagueClick }
          className={ activeLeagueClass }
          role="button"
          tabIndex={ 0 }
        >
          <img className="league-icon mr-2" src={ `/img/${league.toLowerCase()}.png` } alt={ league } />
          { league.toUpperCase() }
        </div>
      </li>
      <ul className="sub-menu collapse pl-0 league-heading" id={ league }>
<<<<<<< HEAD
        { gameData.map(game => (
          <Game
            key={ game.gameId }
            league={ league }
            addCard={ addCard }
            { ...game }
          />
        ))}
        { gameData.length === 0 && <div className="game-container">
          <li className="d-flex justify-content-center game pt-2 pb-2 pl-0">Sorry, no games today</li>
        </div> }
=======
        { gameData.map(game => <Game key={ game.gameId } league={ league } { ...game } />) }
        { gameData.length === 0 && <div className="game-container"><li className="d-flex justify-content-center no-game pt-2 pb-2 pl-0">Sorry, no games today</li></div> }
>>>>>>> master
      </ul>
    </ul>
  );
};

LeagueItem.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  leagueClick: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  league: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default LeagueItem;
