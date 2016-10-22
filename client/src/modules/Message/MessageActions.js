// Export Constants
export const GET_MESSAGES = 'GET_MESSAGES';
export const GETTING_MESSAGES = 'GETTING_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILED = 'GET_MESSAGES_FAILED';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SENDING_MESSAGE = 'SENDING_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';
export const REMOVE_LAST_MESSAGE = 'REMOVE_LAST_MESSAGE';

export const GETTING_MESSAGES_INTL_ID = 'gettingMessages';
export const GET_MESSAGES_FAILED_INTL_ID = 'getMessagesFailed';
export const SENDING_MESSAGE_INTL_ID = 'sendingMessage';
export const SEND_MESSAGE_FAILED_INTL_ID = 'sendMessageFailed';

// Export Actions
export const fetchMessages = () => {
  return {
    type: GET_MESSAGES,
  };
};

export const gettingMessages = () => {
  return {
    type: GETTING_MESSAGES,
    text: GETTING_MESSAGES_INTL_ID,
    use_intl: true,
  };
};

export const getMessagesSuccess = (data) => {
  return {
    type: GET_MESSAGES_SUCCESS,
    data,
  };
};

export const getMessagesFailed = () => {
  return {
    type: GET_MESSAGES_FAILED,
    text: GET_MESSAGES_FAILED_INTL_ID,
    use_intl: true,
  };
};

export const sendMessage = (text) => {
  return {
    type: SEND_MESSAGE,
    text,
    use_intl: false,
  };
};

export const sendingMessage = () => {
  return {
    type: SENDING_MESSAGE,
    text: SENDING_MESSAGE_INTL_ID,
    use_intl: true,
  };
};

export const sendMessageSuccess = (message) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    text: message.text,
    use_intl: message.use_intl,
  };
};

export const sendMessageFailed = () => {
  return {
    type: SEND_MESSAGE_FAILED,
    text: SEND_MESSAGE_FAILED_INTL_ID,
    use_intl: true,
  };
};

export const removeLastMessage = () => {
  return {
    type: REMOVE_LAST_MESSAGE,
  };
};
