import fetch from 'isomorphic-fetch';

export default function callApi(endpoint, method = 'get', body) {
  return fetch(`${process.env.API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    return { error };
  });
}
