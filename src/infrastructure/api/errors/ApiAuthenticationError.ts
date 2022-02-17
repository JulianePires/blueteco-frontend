import { ApiError } from "./ApiError";

export class ApiAuthenticationError extends ApiError {
  constructor(public status: number) {
    super(status, [
      {
        code: "401",
        message: "Não autorizado.",
      },
    ]);
  }
}
