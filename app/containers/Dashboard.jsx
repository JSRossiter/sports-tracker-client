import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import ChatBar from './ChatBar';
import { joinRoom } from '../actions/chat';

const Dashboard = props => (
  <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <h1>Dashboard</h1>
    <section className="row">
      <CardBox { ...props } />
      <ChatBar />
    </section>
  </main>
);

const mapStateToProps = state =>
    // const something
  ({
    allCards: state.cards,
    socket: state.chat.socket
  });
const mapDispatchToProps = dispatch => ({
  joinRoom: (room) => {
    dispatch(joinRoom(room));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
