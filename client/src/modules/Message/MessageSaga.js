import { takeLatest, delay } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { fetchMessages, sendMessage } from './MessageApi';

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
} from './MessageActions';

export function* _sendMessage(action) {
  yield put(sendingMessage());
  const response = yield call(sendMessage, action.text);
  yield delay(1500);
  yield put(removeLastMessage());
  if (!response.error) {
    yield put(sendMessageSuccess(response));
  } else {
    yield put(sendMessageFailed());
  }
}

export function* watchSendMessage() {
  yield* takeLatest(SEND_MESSAGE, _sendMessage);
}

export function* _getMessages() {
  yield put(gettingMessages());
  const response = yield call(fetchMessages);
  yield delay(1500);
  yield put(removeLastMessage());
  if (!response.error) {
    yield put(getMessagesSuccess(response));
  } else {
    yield put(getMessagesFailed());
  }
}

export function* watchGetMessage() {
  yield* takeLatest(GET_MESSAGES, _getMessages);
}

export const rootMessageSaga = [
  fork(watchGetMessage),
  fork(watchSendMessage),
];
