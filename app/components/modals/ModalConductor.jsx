import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import ShareForm from './ShareForm';

class ModalConductor extends Component {
  render() {
    switch (this.props.modal.display) {
      case 'NONE':
        return null;
      case 'LOGIN':
        return (
          <LoginForm
            close={ this.props.closeModal }
            notify={ this.props.notify }
            login={ this.props.login }
            receiveCard={ this.props.receiveCard }
          />
        );
      case 'REGISTER':
        return (
          <RegForm
            close={ this.props.closeModal }
            notify={ this.props.notify }
            login={ this.props.login }
          />
        );
      case 'SHARE':
        return (
          <ShareForm
            close={ this.props.closeModal }
            notify={ this.props.notify }
            { ...this.props.modal }
          />
        );
      default:
        return null;
    }
  }
}

ModalConductor.propTypes = {
  closeModal: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    display: PropTypes.string.isRequired
  }).isRequired
};

export default ModalConductor;
