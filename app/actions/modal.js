export function showModal(modal) {
  return {
    type: 'SHOW_MODAL',
    modal
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
