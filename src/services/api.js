import keys from '../../config/api_keys.json';

export const request = (path) =>
  fetch(`https://api.example.com${path}`, {
    headers: { 'X-Api-Key': keys.api_key },
  }).then((r) => r.json());
