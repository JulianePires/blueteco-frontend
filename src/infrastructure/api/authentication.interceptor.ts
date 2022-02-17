import { AxiosRequestConfig } from "axios";
import { Authentication } from "../auth";

export async function authenticationInterceptor(
  cfg: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  const autenticator = new Authentication();
  const token = await autenticator.getTokenData();

  if (token) {
    cfg.headers = {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    };
  }

  return cfg;
}
