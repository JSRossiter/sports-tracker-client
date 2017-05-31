import React from 'react';
import { connect } from 'react-redux';
import { addNotification as notify } from 'reapop';
import CardBox from '../components/cards/CardBox';
import { showModal, joinRoom, leaveRoom, togglePlayByPlay, removeCard, repositionCard, shareGame } from '../actions';
import { socketAction } from '../middlewares/websocket';

const Dashboard = props => (
  <CardBox { ...props } />
);

const mapStateToProps = state => ({
  allCards: state.cards,
  chatActive: state.chat.active !== 0,
  username: state.user.name
});
const mapDispatchToProps = {
  leaveRoom: socketAction(leaveRoom),
  togglePlayByPlay,
  shareGame,
  removeCard,
  repositionCard,
  notify,
  showModal,
  joinRoom: socketAction(joinRoom)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
