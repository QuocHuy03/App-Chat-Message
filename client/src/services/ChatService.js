import Http from "../utils/http";
const http = new Http();
import { store } from "../stores/app.store";

export const getAllChat = async () => {
  const state = store.getState();
  const accessToken = state.auth.user.accessToken;
  http.setAccessToken(accessToken);
  const res = await http.get(`/chat/getChatUser`);
  return res;
};
