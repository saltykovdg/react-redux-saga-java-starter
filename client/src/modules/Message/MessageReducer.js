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

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS: {
      return {
        data: action.data,
        state: action.type,
      };
    }
    case GETTING_MESSAGES:
    case GET_MESSAGES_FAILED:
    case SENDING_MESSAGE:
    case SEND_MESSAGE_SUCCESS:
    case SEND_MESSAGE_FAILED: {
      return {
        data: [...state.data, { text: action.text, use_intl: action.use_intl }],
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
