import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

import CardMainNBA from './CardMainNBA';
import CardMainNHL from './CardMainNHL';
import CardMainMLB from './CardMainMLB';
import PlayByPlay from './PlayByPlay';
import CardFooter from './CardFooter';
import cardProps from '../../prop_validations/card';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.gameId,
      index: props.index
    };
  }
};
const cardTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);
  }
};

@DropTarget('card', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))
@DragSource('card', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends React.Component {

  render() {
    const { isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
    const name = `${this.props.awayTeam}/${this.props.homeTeam}`;
    const opacity = isDragging || isOver ? 0.5 : 1;

    return connectDragSource(connectDropTarget(
      <div className="game-card" style={ { opacity } }>
        { this.props.league === 'NBA' && <CardMainNBA
          { ...this.props }
        />
    }
        { this.props.league === 'MLB' && <CardMainMLB
          { ...this.props }
        />
    }
        { this.props.league === 'NHL' && <CardMainNHL
          { ...this.props }
        />
    }

        <PlayByPlay plays={ this.props.plays } display={ this.props.displayPlayByPlay } />

        <CardFooter
          name={ name }
          joinRoom={ this.props.joinRoom }
          gameId={ this.props.gameId }
          togglePlayByPlay={ this.props.togglePlayByPlay }
          gameStarted={ this.props.gameStarted }
        />
      </div>
    ));
  }
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
