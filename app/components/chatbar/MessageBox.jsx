import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';

const MessageBox = ({ input, onChange, handleSubmit }) => (
  <form className="chat-input-form d-flex justify-content-center" onSubmit={ handleSubmit }>
    <Picker
      autofocus
      native
      style={ { position: 'fixed', bottom: '65px', right: '25px' } }
      onClick={ (emoji, event) => {

      } }
    />
    <div className="input-group">
      <input type="text" className="form-control" id="chat-input" value={ input } onChange={ onChange } autoComplete="off" placeholder="Type something..." />
      <span className="input-group-btn">
        <button className="btn btn-info" type="submit">Send</button>
      </span>
    </div>
  </form>
);

MessageBox.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MessageBox;
