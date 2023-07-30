import Http from "../utils/http";
const http = new Http();

export const login = async (data) => {
  const res = await http.post("/login", data);
  return res.data;
};

export const register = async (data) => {
  const res = await http.post("/register", data);
  return res.data;
};
