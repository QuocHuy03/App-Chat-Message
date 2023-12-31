import axios from "axios";
import { httpApi } from "../env";

class Http {
  constructor() {
    this.huydev = axios.create({
      baseURL: `${httpApi}/api`,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.accessToken = null;
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
    this.createHeader(accessToken);
  }

  createHeader(token) {
    if (token) {
      this.huydev.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.huydev.defaults.headers.common["Authorization"];
    }
  }

  async get(url, params) {
    try {
      const response = await this.huydev.get(url, { params });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async post(url, data) {
    try {
      const response = await this.huydev.post(url, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async update(url, data, slug) {
    try {
      const response = await this.huydev.put(url, { data, slug });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(url, id) {
    try {
      const response = await this.huydev.delete(url, { data: { id } });
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
}

export default Http;
