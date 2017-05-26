import React from 'react';
import PropTypes from 'prop-types';
// const Packery = require('react-packery-component');
import Packery from 'react-packery-draggabilly';
import Card from './Card';
import cardProps from '../../prop_validations/card';

const packeryOptions = {
  transitionDuration: 500,
  // fitWidth: true,
  // horizontalOrder: true,
  stagger: 30
};

export default function CardBox(props) {
    // cards container rendering all cards
  const { allCards, joinRoom, socket = {}, togglePlayByPlay, chatActive } = props;

  const closeCard = (gameId) => {
    props.leaveRoom(gameId);
    props.removeCard(gameId);
  };

  return (
    <main className={ chatActive ? 'dashboard chat-active' : 'dashboard' }>
      <h1>Dashboard</h1>
      <Packery
        className="game-card-box"
        elementType={ 'div' }
        options={ packeryOptions }
        disableImagesLoaded={ false }
      >
        { allCards.map(card => (
          <Card
            key={ card.gameId }
            joinRoom={ joinRoom }
            socket={ socket }
            togglePlayByPlay={ togglePlayByPlay }
            closeCard={ closeCard }
            { ...card }
          />
        ))}
      </Packery>
    </main>
  );
}

CardBox.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.shape({
    ...cardProps,
    displayPlayByPlay: PropTypes.bool.isRequired,
    plays: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object,
  chatActive: PropTypes.bool.isRequired
};
