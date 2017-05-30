import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addNotification as notify } from 'reapop';
import { login, closeModal, receiveCard } from '../actions';
import ModalConductor from '../components/modals/ModalConductor';

class ModalWrapper extends Component {

  onModalOpen = () => {
    document.querySelector('input').focus();
  }

  render() {
    const modalStyles = {
      content: {
        width: '50vw',
        padding: '30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: '5000',
        marginRight: '-50%',
        transition: 'all 400ms ease-in-out',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <Modal
        isOpen={ this.props.modal.display !== 'NONE' }
        onRequestClose={ this.props.closeModal }
        onAfterOpen={ this.onModalOpen }
        style={ modalStyles }
        shouldCloseOnOverlayClick={ false }
        contentLabel="Modal"
      >
        <ModalConductor { ...this.props } />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = {
  login,
  closeModal,
  notify,
  receiveCard
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
