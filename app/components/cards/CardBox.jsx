import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import cardProps from '../../prop_validations/card';

const masonryOptions = {
  transitionDuration: 500,
  fitWidth: true,
  horizontalOrder: true,
  stagger: 30
};

@DragDropContext(HTML5Backend)
export default class CardBox extends React.Component {

  closeCard = (gameId) => {
    this.props.leaveRoom(gameId);
    this.props.removeCard(gameId);
  };

  moveCard = (dragIndex, hoverIndex) => {
    this.props.repositionCard(dragIndex, hoverIndex);
  };

  render() {
    const { allCards, joinRoom, postJoinRoom, togglePlayByPlay, chatActive } = this.props;

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
              postJoinRoom={ postJoinRoom }
              togglePlayByPlay={ togglePlayByPlay }
              closeCard={ this.closeCard }
              moveCard={ this.moveCard }
              index={ i }
              { ...card }
            />
        ))}
        </Masonry>
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
  postJoinRoom: PropTypes.func.isRequired,
  chatActive: PropTypes.bool.isRequired
};
