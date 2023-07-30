import Http from "../utils/http";
const http = new Http();

export const postlogin = async (data) => {
  const res = await http.post("/login", data);
  return res;
};

export const postRegister = async (data) => {
  const res = await http.post("/register", data);
  return res;
};
