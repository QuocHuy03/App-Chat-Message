import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from "../../stores/authSlice";
import { postRegister, postlogin } from "../../services/AuthService";

function* loginUser(action) {
  try {
    const response = yield call(postlogin, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

function* registerUser(action) {
  try {
    const response = yield call(postRegister, action.payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerError(error.message));
  }
}

function* watchAuth() {
  yield takeLatest("auth/loginRequest", loginUser);
  yield takeLatest("auth/registerRequest", registerUser);
}

export default function* authSaga() {
  yield watchAuth();
}
