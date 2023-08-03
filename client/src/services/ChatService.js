import Http from "../utils/http";
const http = new Http();

export const getAllChat = async () => {
  const res = await http.get(`/chat/getChatUser`);
  return res;
};
