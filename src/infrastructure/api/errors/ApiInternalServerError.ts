import { ApiError } from "./ApiError";

export class ApiInternalServerError extends ApiError {
  constructor(public status: number) {
    super(status, [
      {
        code: "500",
        message: "Ocorreu um erro no servidor.",
      },
    ]);
  }
}
