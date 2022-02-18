import axios from "axios";
import { Authentication } from "../auth";
import { errorTreatmentInterceptor } from "./errorTreatment.interceptor";

const api = axios.create({
  baseURL: "https://blueteco-backend.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
});

api.interceptors.request.use(
  async function (config) {
    const autenticator = new Authentication();
    const token = autenticator.getTokenData();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(undefined, errorTreatmentInterceptor);

export { api };

