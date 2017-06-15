import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import sportsApp from './reducers/index';
import App from './components/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 0,
    rooms: [],
    emojiPicker: false
  },
  cards: [],
  user: { },
  sidebar: {
    gamesNHL: [],
    gamesNFL: [],
    gamesMLB: [],
    gamesNBA: [],
    favoriteGames: [],
    receivedAt: Date.now()
  },
  modal: {
    modal: 'NONE'
  }
};

const SOCKET_HOST = location.origin.replace(/^http/, 'ws').replace('8081', '8080');
const socket = io(SOCKET_HOST);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const middlewares = [
  thunk,
  socketIoMiddleware
];

const store = createStore(
  sportsApp,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares),
  ));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
