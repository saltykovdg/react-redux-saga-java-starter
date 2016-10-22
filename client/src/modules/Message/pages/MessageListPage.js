import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import MessageList from '../components/MessageList';
import MessageCreateWidget from '../components/MessageCreateWidget/MessageCreateWidget';

// Import Actions
import { sendMessage, fetchMessages, GETTING_MESSAGES, SENDING_MESSAGE } from '../MessageActions';

// Import Selectors
import { getMessages, getLastState } from '../MessageReducer';

class MessageListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  handleSendMessage = (text) => {
    const lastState = this.props.last_state;
    if (lastState !== SENDING_MESSAGE && lastState !== GETTING_MESSAGES) {
      this.props.dispatch(sendMessage(text));
    }
  };

  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <MessageCreateWidget onPost={this.handleSendMessage} />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    messages: getMessages(state),
    last_state: getLastState(state),
  };
}

MessageListPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape).isRequired,
  last_state: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

MessageListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(MessageListPage);
