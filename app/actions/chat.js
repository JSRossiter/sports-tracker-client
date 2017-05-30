export const receiveMessage = message => ({
  type: 'RECEIVE_MESSAGE',
  message
});

export const inputChange = (input, roomId) => ({
  type: 'INPUT_CHANGE',
  input,
  roomId
});

export const addEmoji = (emoji, roomId) => ({
  type: 'ADD_EMOJI',
  emoji,
  roomId
});

export const joinRoom = room => ({
  type: 'JOIN_ROOM',
  payload: {
    room
  }
});

export const changeRoom = roomId => ({
  type: 'CHANGE_ROOM',
  roomId
});

export const updateUserCount = ({ room, userCount }) => ({
  type: 'UPDATE_USER_COUNT',
  room,
  userCount
});

export const postMessage = payload => ({
  type: 'POST_MESSAGE',
  payload
});

export const leaveRoom = roomId => ({
  type: 'LEAVE_ROOM',
  payload: {
    roomId
  }
});

