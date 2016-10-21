import React, { PropTypes } from 'react';

function MessageListItem(props) {
  return (
    <li>
      {props.message}
    </li>
  );
}

MessageListItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageListItem;
