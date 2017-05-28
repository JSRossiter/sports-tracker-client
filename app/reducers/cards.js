const defaultState = {
  allCards: []
};

function cards(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      if (state.find(card => card.gameId === action.game.gameId)) {
        return [...state];
      }
      return [...state, action.game];
    case 'TOGGLE_PLAY_BY_PLAY': {
      return state.map((card) => {
        if (card.gameId === action.gameId) {
          return {
            ...card,
            displayPlayByPlay: !card.displayPlayByPlay
          };
        }
        return card;
      });
    }
    case 'REMOVE_CARD': {
      return state.filter(card => card.gameId !== action.gameId);
    }
    case 'REPOSITION_CARD': {
      const from = action.oldPos;
      const cardOrder = state.slice(0, from).concat(state.slice(from + 1));
      const newCards = cardOrder.slice(0, action.newPos).concat(state[from]).concat(cardOrder.slice(action.newPos));
      return newCards;
    }
    default:
      return state;
  }
}

export default cards;
