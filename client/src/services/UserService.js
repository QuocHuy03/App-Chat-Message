import Http from "../utils/http";
import { store } from "../stores/app.store";
const http = new Http();

export const getUserByID = async (data) => {
  const state = store.getState();
  const accessToken = state.auth.user.accessToken;
  http.setAccessToken(accessToken);
  const res = await http.get(`/user/getUserById/${data}`);
  return res;
};

export const getAllUser = async () => {
  const state = store.getState();
  const accessToken = state.auth.user.accessToken;
  http.setAccessToken(accessToken);
  const res = await http.get(`/user/getAllUser`);
  return res;
};
