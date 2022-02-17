import { ApiError } from "./ApiError";

export class ApiUnknownError extends ApiError {
  constructor(public status: number) {
    super(status, [
      {
        code: "UnkownError",
        message: "Ocorreu um erro desconhecido.",
      },
    ]);
  }
}
