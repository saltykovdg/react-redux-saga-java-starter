import callApi from '../../util/apiCaller';

export function fetchMessages() {
  return callApi('message/list');
}

export function sendMessage(message) {
  return callApi('message', 'post', { text: message });
}
