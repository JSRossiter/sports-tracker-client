import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import dndBackend from '../../lib/dndBackend';
import Card from './Card';
import cardProps from '../../prop_validations/card';

const masonryOptions = {
  transitionDuration: 500,
  fitWidth: true,
  horizontalOrder: true,
  stagger: 30
};

@DragDropContext(MultiBackend(dndBackend))
export default class CardBox extends React.Component {

  closeCard = (gameId) => {
    this.props.leaveRoom(gameId);
    this.props.removeCard(gameId);
  };

  moveCard = (dragIndex, hoverIndex) => {
    this.props.repositionCard(dragIndex, hoverIndex);
  };

  generatePreview = (type, item, style) => {
    Object.assign(style, { backgroundColor: item.color, width: '350px', height: '250px' });
    return <div style={ { backgroundColor: 'black', opacity: 1 } } />;
  }

  render() {
    const { allCards, joinRoom, togglePlayByPlay, chatActive } = this.props;

    return (
      <main className={ chatActive ? 'dashboard chat-active' : 'dashboard' }>
        <h1>Dashboard</h1>
        <Masonry
          className="game-card-box"
          elementType={ 'div' }
          options={ masonryOptions }
        >
          { allCards.map((card, i) => (
            <Card
              key={ card.gameId }
              joinRoom={ joinRoom }
              togglePlayByPlay={ togglePlayByPlay }
              closeCard={ this.closeCard }
              moveCard={ this.moveCard }
              index={ i }
              notify={ this.props.notify }
              { ...card }
            />
        ))}
        </Masonry>
        <Preview generator={ this.generatePreview } />
      </main>
    );
  }
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
  repositionCard: PropTypes.func.isRequired,
  leaveRoom: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  chatActive: PropTypes.bool.isRequired
};
