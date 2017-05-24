import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sportsApp from './reducers/index';
import App from './containers/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 0,
    rooms: []
  },
  cards: [
    {
      gameId: 1,
      league: 'NBA',
      display: 'BASIC', // 'STATS', 'PLAY_BY_PLAY' other options
      homeTeam: 'SAS',
      awayTeam: 'GSW',
      homeScore: 150,
      awayScore: 85,
      quarter: '4',
      timeRemaining: '10:09',
      displayPlayByPlay: true,
      scoreLoading: false,
      plays: [
        { id: 1, content: 'Steph scores a 3', sport: 'nba' },
        { id: 2, content: 'Steph scores a 3', sport: 'nba' },
        { id: 3, content: 'Steph scores a FG', sport: 'nba' },
        { id: 4, content: 'Someone else scores?', sport: 'nba' }
      ],
      gameStarted: true
    },
    {
      gameId: 2,
      league: 'NHL',
      homeTeam: 'MTL',
      awayTeam: 'PHI',
      homeScore: 10,
      awayScore: 3,
      period: '3',
      timeRemaining: '8:30',
      displayPlayByPlay: false,
      scoreLoading: false,
      plays: [],
      gameStarted: false
    },
    {
      gameId: 3,
      league: 'MLB',
      homeTeam: 'PIT',
      awayTeam: 'NYY',
      homeScore: 9,
      awayScore: 5,
      innings: '4',
      inningsHalf: 'top',
      scoreLoading: true,
      displayPlayByPlay: false,
      plays: []
    },
    {
      gameId: 4,
      league: 'NBA',
      homeTeam: 'LAL',
      awayTeam: 'SAC',
      homeScore: 35,
      awayScore: 25,
      quarter: '2',
      timeRemaining: 36,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    },
    {
      gameId: 5,
      league: 'MLB',
      homeTeam: 'MIA',
      awayTeam: 'BAL',
      homeScore: 3,
      awayScore: 4,
      quarter: '2',
      timeRemaining: 100,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    }
  ],
  user: {
    name: 'George'
  },
  sidebar: {
    gamesNHL: [],
    gamesNFL: [],
    gamesMLB: [],
    gamesNBA: [],
    receivedAt: Date.now()
  }
};

const store = createStore(
  sportsApp,
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
