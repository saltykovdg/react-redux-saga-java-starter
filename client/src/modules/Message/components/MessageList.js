import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Components
import MessageListItem from './MessageListItem/MessageListItem';
import './MessageList.scss';

function MessageList(props) {
  return (
    <div>
      <h4>
        <FormattedMessage id="messageListHeader" />
      </h4>
      <ul className="messages">
        {
          props.messages.map((message, index) => (
            <MessageListItem key={index} message={message} />
          ))
        }
      </ul>
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MessageList;
