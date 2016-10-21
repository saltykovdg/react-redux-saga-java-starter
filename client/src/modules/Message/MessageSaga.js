import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchMessages, sendMessage } from './MessageApi';

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
} from './MessageActions';

export function* _sendMessage(action) {
  yield put({ type: SENDING_MESSAGE });
  const response = yield call(sendMessage, action.text);
  yield delay(1500);
  yield put({ type: REMOVE_LAST_MESSAGE });
  if (!response.error) {
    yield put({ type: SEND_MESSAGE_SUCCESS, text: response.text });
  } else {
    yield put({ type: SEND_MESSAGE_FAILED });
  }
}

export function* watchSendMessage() {
  yield* takeLatest(SEND_MESSAGE, _sendMessage);
}

export function* _getMessages() {
  yield put({ type: GETTING_MESSAGES });
  const response = yield call(fetchMessages);
  yield delay(1500);
  yield put({ type: REMOVE_LAST_MESSAGE });
  if (!response.error) {
    yield put({ type: GET_MESSAGES_SUCCESS, data: response });
  } else {
    yield put({ type: GET_MESSAGES_FAILED });
  }
}

export function* watchGetMessage() {
  yield* takeLatest(GET_MESSAGES, _getMessages);
}
