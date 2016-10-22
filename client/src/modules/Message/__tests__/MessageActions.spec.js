import {
  GET_MESSAGES,
  GETTING_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  SEND_MESSAGE,
  SENDING_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  REMOVE_LAST_MESSAGE,
  GETTING_MESSAGES_INTL_ID,
  GET_MESSAGES_FAILED_INTL_ID,
  SENDING_MESSAGE_INTL_ID,
  SEND_MESSAGE_FAILED_INTL_ID,
  fetchMessages,
  gettingMessages,
  getMessagesSuccess,
  getMessagesFailed,
  sendMessage,
  sendingMessage,
  sendMessageSuccess,
  sendMessageFailed,
  removeLastMessage,
} from '../MessageActions';

const message1 = { text: 'Message 1', use_intl: false };

describe('message actions', () => {
  it('should return the correct type for fetchMessages', () => {
    const expectedAction = {
      type: GET_MESSAGES,
    };
    expect(fetchMessages()).toEqual(expectedAction);
  });
  it('should return the correct type for gettingMessages', () => {
    const expectedAction = {
      type: GETTING_MESSAGES,
      text: GETTING_MESSAGES_INTL_ID,
      use_intl: true,
    };
    expect(gettingMessages()).toEqual(expectedAction);
  });
  it('should return the correct type for getMessagesSuccess', () => {
    const expectedAction = {
      type: GET_MESSAGES_SUCCESS,
      data: [message1],
    };
    expect(getMessagesSuccess([message1])).toEqual(expectedAction);
  });
  it('should return the correct type for getMessagesFailed', () => {
    const expectedAction = {
      type: GET_MESSAGES_FAILED,
      text: GET_MESSAGES_FAILED_INTL_ID,
      use_intl: true,
    };
    expect(getMessagesFailed()).toEqual(expectedAction);
  });
  it('should return the correct type for sendMessage', () => {
    const text = 'test message 1';
    const expectedAction = {
      type: SEND_MESSAGE,
      text,
      use_intl: false,
    };
    expect(sendMessage(text)).toEqual(expectedAction);
  });
  it('should return the correct type for sendingMessage', () => {
    const expectedAction = {
      type: SENDING_MESSAGE,
      text: SENDING_MESSAGE_INTL_ID,
      use_intl: true,
    };
    expect(sendingMessage()).toEqual(expectedAction);
  });
  it('should return the correct type for sendMessageSuccess', () => {
    const expectedAction = {
      type: SEND_MESSAGE_SUCCESS,
      text: message1.text,
      use_intl: message1.use_intl,
    };
    expect(sendMessageSuccess(message1)).toEqual(expectedAction);
  });
  it('should return the correct type for sendMessageFailed', () => {
    const expectedAction = {
      type: SEND_MESSAGE_FAILED,
      text: SEND_MESSAGE_FAILED_INTL_ID,
      use_intl: true,
    };
    expect(sendMessageFailed()).toEqual(expectedAction);
  });
  it('should return the correct type for removeLastMessage', () => {
    const expectedAction = {
      type: REMOVE_LAST_MESSAGE,
    };
    expect(removeLastMessage()).toEqual(expectedAction);
  });
});
