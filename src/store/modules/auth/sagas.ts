import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import history from 'services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/auth/login/', {
      email,
      password,
      company: 'ab72a5fb-4c1d-41fa-ad26-564308f2104e',
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `jwt ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }: any) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `jwt ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
