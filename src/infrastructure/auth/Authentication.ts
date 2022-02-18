import { authenticate } from "../api/functions";
import { LoginRequest } from "../api/schemas/requests/Login";
import * as storage from "../storage";
import { IAuthentication } from "./IAuthentication";

export class Authentication implements IAuthentication {
  async login(info: LoginRequest) {
    const result = await authenticate(info);

    storage.saveSessionData(result.data.token, result.data.user);

    return result.data;
  }

  async logout() {
    storage.deleteSessionData();
  }

  getTokenData() {
    try {
      const sessionData = storage.getSessionData();
      const accessToken = sessionData.token;
      return accessToken;
    } catch {
      return null;
    }
  }
}
