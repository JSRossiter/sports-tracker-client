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
    gamesMLB: [[{ id: '37323', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:05AM', awayTeam: { ID: '115', City: 'Tampa Bay', Name: 'Rays', Abbreviation: 'TB' }, homeTeam: { ID: '114', City: 'New York', Name: 'Yankees', Abbreviation: 'NYY' }, location: 'Yankee Stadium', gameId: 37323, league: 'MLB' }, { id: '37383', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:07AM', awayTeam: { ID: '125', City: 'Oakland', Name: 'Athletics', Abbreviation: 'OAK' }, homeTeam: { ID: '112', City: 'Toronto', Name: 'Blue Jays', Abbreviation: 'TOR' }, location: 'Rogers Centre', gameId: 37383, league: 'MLB' }, { id: '35823', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:10AM', awayTeam: { ID: '131', City: 'Chicago', Name: 'Cubs', Abbreviation: 'CHC' }, homeTeam: { ID: '135', City: 'Cincinnati', Name: 'Reds', Abbreviation: 'CIN' }, location: 'Great American Ball Park', gameId: 35823, league: 'MLB' }, { id: '36120', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:10AM', awayTeam: { ID: '116', City: 'Cleveland', Name: 'Indians', Abbreviation: 'CLE' }, homeTeam: { ID: '117', City: 'Detroit', Name: 'Tigers', Abbreviation: 'DET' }, location: 'Comerica Park', gameId: 36120, league: 'MLB' }, { id: '35359', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:35AM', awayTeam: { ID: '127', City: 'New York', Name: 'Mets', Abbreviation: 'NYM' }, homeTeam: { ID: '130', City: 'Atlanta', Name: 'Braves', Abbreviation: 'ATL' }, location: 'Turner Field', gameId: 35359, league: 'MLB' }, { id: '37191', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '10:35AM', awayTeam: { ID: '120', City: 'Minnesota', Name: 'Twins', Abbreviation: 'MIN' }, homeTeam: { ID: '126', City: 'Washington', Name: 'Nationals', Abbreviation: 'WAS' }, location: 'Nationals Park', gameId: 37191, league: 'MLB' }, { id: '37701', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '11:00AM', awayTeam: { ID: '129', City: 'Philadelphia', Name: 'Phillies', Abbreviation: 'PHI' }, homeTeam: { ID: '134', City: 'Milwaukee', Name: 'Brewers', Abbreviation: 'MIL' }, location: 'Miller Park', gameId: 37701, league: 'MLB' }, { id: '36403', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '11:10AM', awayTeam: { ID: '121', City: 'Texas', Name: 'Rangers', Abbreviation: 'TEX' }, homeTeam: { ID: '119', City: 'Chicago', Name: 'White Sox', Abbreviation: 'CWS' }, location: 'U.S. Cellular Field', gameId: 36403, league: 'MLB' }, { id: '35516', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '11:15AM', awayTeam: { ID: '111', City: 'Baltimore', Name: 'Orioles', Abbreviation: 'BAL' }, homeTeam: { ID: '118', City: 'Kansas City', Name: 'Royals', Abbreviation: 'KC' }, location: 'Kauffman Stadium', gameId: 35516, league: 'MLB' }, { id: '36828', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '12:35PM', awayTeam: { ID: '123', City: 'Seattle', Name: 'Mariners', Abbreviation: 'SEA' }, homeTeam: { ID: '124', City: 'Los Angeles', Name: 'Angels', Abbreviation: 'LAA' }, location: 'Angel Stadium of Anaheim', gameId: 36828, league: 'MLB' }, { id: '37029', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '01:05PM', awayTeam: { ID: '128', City: 'Miami', Name: 'Marlins', Abbreviation: 'MIA' }, homeTeam: { ID: '136', City: 'San Francisco', Name: 'Giants', Abbreviation: 'SF' }, location: 'AT&T Park', gameId: 37029, league: 'MLB' }, { id: '35197', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '01:10PM', awayTeam: { ID: '132', City: 'Pittsburgh', Name: 'Pirates', Abbreviation: 'PIT' }, homeTeam: { ID: '140', City: 'Arizona', Name: 'Diamondbacks', Abbreviation: 'ARI' }, location: 'Chase Field', gameId: 35197, league: 'MLB' }, { id: '36273', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '01:10PM', awayTeam: { ID: '137', City: 'Los Angeles', Name: 'Dodgers', Abbreviation: 'LAD' }, homeTeam: { ID: '138', City: 'Colorado', Name: 'Rockies', Abbreviation: 'COL' }, location: 'Coors Field', gameId: 36273, league: 'MLB' }, { id: '37541', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '01:40PM', awayTeam: { ID: '133', City: 'St. Louis', Name: 'Cardinals', Abbreviation: 'STL' }, homeTeam: { ID: '139', City: 'San Diego', Name: 'Padres', Abbreviation: 'SD' }, location: 'Petco Park', gameId: 37541, league: 'MLB' }, { id: '35680', scheduleStatus: 'Normal', originalDate: null, originalTime: null, delayedOrPostponedReason: null, date: '2016-04-24', time: '05:05PM', awayTeam: { ID: '113', City: 'Boston', Name: 'Red Sox', Abbreviation: 'BOS' }, homeTeam: { ID: '122', City: 'Houston', Name: 'Astros', Abbreviation: 'HOU' }, location: 'Minute Maid Park', gameId: 35680, league: 'MLB' }]],
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
