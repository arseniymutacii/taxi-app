import { request } from '../services/api';

export async function login(phone, code) {
  return request('/auth/login', { method: 'POST', body: JSON.stringify({ phone, code }) });
}
