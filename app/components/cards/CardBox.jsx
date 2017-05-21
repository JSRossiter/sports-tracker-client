import PropTypes from 'prop-types'; // for React v15.5
import React, { Component } from 'react';
import Card from './Card';

export default class CardBox extends Component {
  render() {
    // cards container rendering all cards
    const { allCards } = this.props;

    return (
      <div className="container" id="main">
        <div className="row">
          <div className="card-container col-xs-12 col-md-9">
            <div className="row">
              { allCards.map(card => <Card key={ card.gameId } { ...card } />) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardBox.propTypes = {
  allCards: PropTypes.array.isRequired
};