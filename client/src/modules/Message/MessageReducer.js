import {
  GETTING_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  REMOVE_LAST_MESSAGE,
  SENDING_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
} from './MessageActions';

// Initial State
const initialState = { data: [], state: GETTING_MESSAGES };
const _SENDING_MESSAGE = 'Sending message...';
const _SEND_MESSAGE_FAILED = 'Send message failed.';
const _GETTING_MESSAGES = 'Getting messages...';
const _GET_MESSAGES_FAILED = 'Get messages failed.';

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_MESSAGES: {
      return {
        data: [...state.data, _GETTING_MESSAGES],
        state: action.type,
      };
    }
    case GET_MESSAGES_SUCCESS: {
      return {
        data: action.data,
        state: action.type,
      };
    }
    case GET_MESSAGES_FAILED: {
      return {
        data: [...state.data, _GET_MESSAGES_FAILED],
        state: action.type,
      };
    }
    case SENDING_MESSAGE: {
      return {
        data: [...state.data, _SENDING_MESSAGE],
        state: action.type,
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        data: [...state.data, action.text],
        state: action.type,
      };
    }
    case SEND_MESSAGE_FAILED: {
      return {
        data: [...state.data, _SEND_MESSAGE_FAILED],
        state: action.type,
      };
    }
    case REMOVE_LAST_MESSAGE: {
      const newData = [...state.data];
      newData.pop();
      return {
        data: newData,
        state: action.type,
      };
    }
    default:
      return state;
  }
};

/* Selectors */

// Get all messages
export const getMessages = state => state.messages.data;
export const getLastState = state => state.messages.state;

// Export Reducer
export default messageReducer;
