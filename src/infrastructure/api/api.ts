import axios from "axios";
import { authenticationInterceptor } from "./authentication.interceptor";
import { errorTreatmentInterceptor } from "./errorTreatment.interceptor";

const api = axios.create({
  baseURL: process.env.HEROKU_BASEURL,
});

api.interceptors.request.use(authenticationInterceptor);
api.interceptors.response.use(undefined, errorTreatmentInterceptor);

export { api };
