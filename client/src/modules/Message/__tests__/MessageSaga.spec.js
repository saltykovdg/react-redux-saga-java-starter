import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { _sendMessage, _getMessages, watchSendMessage, watchGetMessage } from '../MessageSaga';
import {
  GET_MESSAGES,
  SEND_MESSAGE,
  sendingMessage,
  sendMessageSuccess,
  removeLastMessage,
  sendMessageFailed,
  gettingMessages,
  getMessagesSuccess,
  getMessagesFailed,
} from '../MessageActions';
import { fetchMessages, sendMessage } from '../MessageApi';

describe('get messages saga', () => {
  const generator = _getMessages();
  it('should put gettingMessages', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(gettingMessages()));
  });
  it('should call fetchMessages', () => {
    const next = generator.next();
    expect(next.value).toEqual(call(fetchMessages));
  });
  it('should call delay 1500ms', () => {
    const next = generator.next();
    expect(next.value).toEqual(call(delay, 1500));
  });
  it('should put removeLastMessage', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(removeLastMessage()));
  });
  it('should put getMessagesFailed', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(getMessagesFailed()));
  });
  it('should put getMessagesSuccess', () => {
    const generator2 = _getMessages();
    const response = { text: 'test', use_intl: false };
    generator2.next();
    generator2.next();
    generator2.next(response);
    generator2.next();
    const next = generator2.next();
    expect(next.value).toEqual(put(getMessagesSuccess(response)));
  });
});

describe('send message saga', () => {
  const generator = _sendMessage({ text: 'test' });
  it('should put sendingMessage', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(sendingMessage()));
  });
  it('should call sendMessage', () => {
    const next = generator.next();
    expect(next.value).toEqual(call(sendMessage, 'test'));
  });
  it('should call delay 1500ms', () => {
    const next = generator.next();
    expect(next.value).toEqual(call(delay, 1500));
  });
  it('should put removeLastMessage', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(removeLastMessage()));
  });
  it('should put sendMessageFailed', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(sendMessageFailed()));
  });
  it('should put sendMessageSuccess', () => {
    const generator2 = _sendMessage({ text: 'test' });
    const response = { text: 'test', use_intl: false };
    generator2.next();
    generator2.next();
    generator2.next(response);
    generator2.next();
    const next = generator2.next();
    expect(next.value).toEqual(put(sendMessageSuccess(response)));
  });
});

describe('message watch saga', () => {
  it('should call takeLatest in watchGetMessage', () => {
    const generator = watchGetMessage();
    const next = generator.next();
    expect(next.value).toEqual(call(takeLatest, GET_MESSAGES, _getMessages));
  });
  it('should call takeLatest in watchSendMessage', () => {
    const generator = watchSendMessage();
    const next = generator.next();
    expect(next.value).toEqual(call(takeLatest, SEND_MESSAGE, _sendMessage));
  });
});
