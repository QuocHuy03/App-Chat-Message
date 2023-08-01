import Http from "../utils/http";
const http = new Http();

export const postLogin = async (data) => {
  const res = await http.post("/user/login", data);
  return res;
};

export const postRegister = async (data) => {
  const res = await http.post("/user/register", data);
  return res;
};
