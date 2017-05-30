export default (state = 'NONE', action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        display: action.modal,
        ...action
      };
    case 'CLOSE_MODAL':
      return { display: 'NONE' };
    default:
      return state;
  }
};
