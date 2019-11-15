import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }: any) {
  const { email, password } = payload;

  const response = yield call(api.post, '/auth/login/', {
    email,
    password,
    company: 'ab72a5fb-4c1d-41fa-ad26-564308f2104e',
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
