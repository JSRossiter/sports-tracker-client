import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
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
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    console.log('dragIndex', dragIndex, '\nhoverIndex', hoverIndex, '\npropsId', props.id);
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //   return;
    // }

    // // Dragging upwards
    // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //   return;
    // }

    // Time to actually perform the action
    setTimeout(() => {
      props.moveCard(dragIndex, hoverIndex);
    }, 100);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

@DropTarget('card', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('card', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Card extends React.Component {

  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const name = `${this.props.awayTeam}/${this.props.homeTeam}`;
    const opacity = isDragging ? 0.5 : 1;

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
          postJoinRoom={ this.props.postJoinRoom }
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
