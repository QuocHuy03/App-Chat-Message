import Http from "../utils/http";
const http = new Http();

export const getUserByID = async (data) => {
  const res = await http.get(`/user/getUserById/${data}`);
  return res;
};


