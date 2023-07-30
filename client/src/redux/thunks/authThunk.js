import { createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services/AuthService";

export const loginRequest = createAsyncThunk(
  "auth/loginRequest",
  async (data, { dispatch }) => {
    try {
      const response = await postlogin(data);
      return response;
    } catch (error) {
      dispatch(loginError(error));
      throw new Error(error);
    }
  }
);
