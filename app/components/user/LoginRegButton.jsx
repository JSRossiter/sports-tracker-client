import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';

export default class LoginRegButton extends Component {
  static propTypes = {
    handleLoginSession: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      regModalIsOpen: false,
      loginModalIsOpen: false
    };
  }

  onModalOpen = () => {
    document.querySelector('input').focus();
  }

  // reset state
  resetState = () => {
    this.setState({
      regModalIsOpen: false,
      loginModalIsOpen: false
    });
  }

  regOpenModal = () => {
    this.setState({
      loginModalIsOpen: false,
      regModalIsOpen: true
    });
    $('#topnavbar').removeClass('show');
  }

  regCloseModal = () => {
    this.resetState();
  }

  loginOpenModal = () => {
    this.setState({
      loginModalIsOpen: true,
      regModalIsOpen: false
    });
    $('#topnavbar').removeClass('show');
  }

  loginCloseModal = () => {
    this.resetState();
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
      <ul className="navbar-nav ml-auto">
        <li className="nav-item text-right pb-2 pt-2">
          <a className="reg-btn navitem" onClick={ () => this.props.showModal('REGISTER') }>Registration</a>
          <Modal
            isOpen={ this.state.regModalIsOpen }
            onRequestClose={ this.regCloseModal }
            onAfterOpen={ this.onModalOpen }
            style={ modalStyles }
            shouldCloseOnOverlayClick={ false }
            contentLabel="Reg Modal"
          >
            <h3 className="pl-0 d-flex modal-header">Registration: <i className="fa fa-times justify-content-right" onClick={ this.regCloseModal } /></h3>
            <RegForm
              close={ this.regCloseModal }
              handleLoginSession={ this.props.handleLoginSession }
              notify={ this.props.notify }
            />
          </Modal>
        </li>

        <li className="nav-item text-right pb-2 pt-2">
          <a className="login-btn navitem" onClick={ () => this.props.showModal('LOGIN') }>Login</a>
          <Modal
            isOpen={ this.state.loginModalIsOpen }
            onRequestClose={ this.loginCloseModal }
            onAfterOpen={ this.onModalOpen }
            style={ modalStyles }
            shouldCloseOnOverlayClick={ false }
            contentLabel="Reg Modal"
          >
            <h3 className="pl-0 d-flex modal-header">Login: <i className="fa fa-times justify-content-right" onClick={ this.loginCloseModal } /></h3>
            <LoginForm
              close={ this.loginCloseModal }
              handleLoginSession={ this.props.handleLoginSession }
              notify={ this.props.notify }
              receiveCard={ this.props.receiveCard }
            />
          </Modal>
        </li>
      </ul>
    );
  }
}
