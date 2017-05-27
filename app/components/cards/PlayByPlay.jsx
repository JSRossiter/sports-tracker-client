import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const PlayByPlay = ({ ...props }) => (<div className="game-card-pbp">
  <ul>
    { props.plays.map((play) => {
      switch (play.sport) {
        case 'NHL':
          return (
            <li key={ play.id } className={ play.style }>
              { play.content }
            </li>
          );
        case 'MLB':
          return <li key={ play.id } className={ play.style }>{ play.content }</li>;
        case 'NBA':
          return (
            <li key={ play.id }>
              <span className="time-play-nba">{ play.time } - </span>
              { play.content }
            </li>);
        default:
          return null;
      }
    })}
  </ul>
</div>);

PlayByPlay.propTypes = {
  display: PropTypes.bool.isRequired,
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default PlayByPlay;
