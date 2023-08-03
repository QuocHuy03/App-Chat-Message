import Http from "../utils/http";
const http = new Http();

export const getChatUser = async (userID, userIDChat) => {
  const res = await http.get(`/chat/getChatUser/${userID}/${userIDChat}`);
  return res;
};
