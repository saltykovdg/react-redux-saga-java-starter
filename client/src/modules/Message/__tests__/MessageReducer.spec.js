import {
  GETTING_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  SENDING_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  REMOVE_LAST_MESSAGE,
  GETTING_MESSAGES_INTL_ID,
  GET_MESSAGES_FAILED_INTL_ID,
  SENDING_MESSAGE_INTL_ID,
  SEND_MESSAGE_FAILED_INTL_ID,
  gettingMessages,
  getMessagesSuccess,
  getMessagesFailed,
  sendingMessage,
  sendMessageSuccess,
  sendMessageFailed,
  removeLastMessage,
} from '../MessageActions';
import reducer from '../MessageReducer';

const message1 = { text: 'Message 1', use_intl: false };
const message2 = { text: 'Message 2', use_intl: false };

const initialState1 = { data: [], state: GETTING_MESSAGES };
const initialState2 = { data: [message1], state: GET_MESSAGES_SUCCESS };
const initialState3 = { data: [message1, message2], state: GET_MESSAGES_SUCCESS };

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState1);
  });
  it('should handle gettingMessages', () => {
    expect(
      reducer(initialState1, gettingMessages())
    ).toEqual({ data: [{ text: GETTING_MESSAGES_INTL_ID, use_intl: true }], state: GETTING_MESSAGES });
    expect(
      reducer(initialState2, gettingMessages())
    ).toEqual({ data: [message1, { text: GETTING_MESSAGES_INTL_ID, use_intl: true }], state: GETTING_MESSAGES });
  });
  it('should handle getMessagesSuccess', () => {
    expect(
      reducer(initialState1, getMessagesSuccess([message1]))
    ).toEqual({ data: [message1], state: GET_MESSAGES_SUCCESS });
    expect(
      reducer(initialState2, getMessagesSuccess([message1, message2]))
    ).toEqual({ data: [message1, message2], state: GET_MESSAGES_SUCCESS });
  });
  it('should handle getMessagesFailed', () => {
    expect(
      reducer(initialState1, getMessagesFailed())
    ).toEqual({ data: [{ text: GET_MESSAGES_FAILED_INTL_ID, use_intl: true }], state: GET_MESSAGES_FAILED });
    expect(
      reducer(initialState2, getMessagesFailed())
    ).toEqual({ data: [message1, { text: GET_MESSAGES_FAILED_INTL_ID, use_intl: true }], state: GET_MESSAGES_FAILED });
  });
  it('should handle sendingMessage', () => {
    expect(
      reducer(initialState1, sendingMessage())
    ).toEqual({ data: [{ text: SENDING_MESSAGE_INTL_ID, use_intl: true }], state: SENDING_MESSAGE });
    expect(
      reducer(initialState2, sendingMessage())
    ).toEqual({ data: [message1, { text: SENDING_MESSAGE_INTL_ID, use_intl: true }], state: SENDING_MESSAGE });
  });
  it('should handle sendMessageSuccess', () => {
    expect(
      reducer(initialState1, sendMessageSuccess(message1))
    ).toEqual({ data: [message1], state: SEND_MESSAGE_SUCCESS });
    expect(
      reducer(initialState2, sendMessageSuccess(message2))
    ).toEqual({ data: [message1, message2], state: SEND_MESSAGE_SUCCESS });
  });
  it('should handle sendMessageSuccess', () => {
    expect(
      reducer(initialState1, sendMessageFailed())
    ).toEqual({ data: [{ text: SEND_MESSAGE_FAILED_INTL_ID, use_intl: true }], state: SEND_MESSAGE_FAILED });
    expect(
      reducer(initialState2, sendMessageFailed())
    ).toEqual({ data: [message1, { text: SEND_MESSAGE_FAILED_INTL_ID, use_intl: true }], state: SEND_MESSAGE_FAILED });
  });
  it('should handle removeLastMessage', () => {
    expect(
      reducer(initialState2, removeLastMessage())
    ).toEqual({ data: [], state: REMOVE_LAST_MESSAGE });
    expect(
      reducer(initialState3, removeLastMessage())
    ).toEqual({ data: [message1], state: REMOVE_LAST_MESSAGE });
  });
});
