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

// Export Actions
export const sendMessage = (text) => {
  return {
    type: SEND_MESSAGE,
    text,
  };
};

export const fetchMessages = () => {
  return {
    type: GET_MESSAGES,
  };
};
