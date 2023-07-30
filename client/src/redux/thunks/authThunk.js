import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/AuthService";

export const loginRequest = createAsyncThunk(
  "auth/loginRequest",
  async (data, { dispatch }) => {
    try {
      const response = await login(data);
      return response;
    } catch (error) {
      dispatch(loginError(error));
      throw new Error(error);
    }
  }
);
