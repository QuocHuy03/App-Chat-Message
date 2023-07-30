// saga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import { login, register } from './api'; 
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from './authSlice';

function* loginUser(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

function* registerUser(action) {
  try {
    const response = yield call(register, action.payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerError(error.message));
  }
}

function* watchAuth() {
  yield takeLatest('auth/loginRequest', loginUser);
  yield takeLatest('auth/registerRequest', registerUser);
}

export default function* authSaga() {
  yield watchAuth();
}
