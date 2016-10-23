import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

function MessageListItem(props) {
  const message = props.message;
  const messageText = message.use_intl ? <FormattedMessage id={message.text} /> : message.text;
  return (
    <li>{messageText}</li>
  );
}

MessageListItem.propTypes = {
  message: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default MessageListItem;
