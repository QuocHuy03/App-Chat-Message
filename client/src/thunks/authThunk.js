import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin, postRegister } from "../services/AuthService";
import { verifyToken } from "../middlewares/verifyToken";
import { message } from "antd";

export const loginRequest = createAsyncThunk(
  "auth/login",
  async (data, { dispatch }) => {
    try {
      const response = await postLogin(data);
      if (response.status === true) {
        // const user = await verifyToken(response.accessToken);
        message.success(`${response.message}`);
        return response;
      } else {
        message.error(`${response.message}`);
        throw new Error(response.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const registerRequest = createAsyncThunk(
  "auth/register",
  async (data, { dispatch }) => {
    try {
      const response = await postRegister(data);
      if (response.status === true) {
        message.success(`${response.message}`);
        return response;
      } else {
        message.error(`${response.message}`);
        throw new Error(response.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
