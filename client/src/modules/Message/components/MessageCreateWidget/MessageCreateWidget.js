import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import './MessageCreateWidget.scss';

export class MessageCreateWidget extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  _postMessage() {
    if (this.state.input !== '') {
      this.props.onPost(this.state.input);
      this.setState({ input: '' });
    }
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._postMessage();
    }
  }

  _onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="post-form">
        <input
          type="text"
          onChange={::this._onChange}
          onKeyPress={::this._handleKeyPress}
          value={this.state.input}
        />
        <input
          type="button"
          onClick={::this._postMessage}
          value={this.props.intl.messages.messageCreateWidgetSendButton}
        />
      </div>
    );
  }
}

MessageCreateWidget.propTypes = {
  onPost: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(MessageCreateWidget);
