import React, { Component, PropTypes } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import './MessageCreateWidget.scss';

export class MessageCreateWidget extends Component {
  postMessage = () => {
    const messageTextRef = this.messageText;
    if (messageTextRef.value) {
      this.props.onPost(messageTextRef.value);
      messageTextRef.value = '';
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.postMessage();
    }
  }

  render() {
    return (
      <div className="post-form">
        <input type="text" onKeyPress={this.handleKeyPress} ref={(node) => { this.messageText = node; }} />
        <button type="button" onClick={this.postMessage}>
          <FormattedMessage id="messageCreateWidgetSendButton" />
        </button>
      </div>
    );
  }
}

MessageCreateWidget.propTypes = {
  onPost: PropTypes.func.isRequired,
};

export default injectIntl(MessageCreateWidget);
