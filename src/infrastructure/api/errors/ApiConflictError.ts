import { ApiError } from "./ApiError";

export class ApiConflictError extends ApiError {
  constructor(public status: number) {
    super(status, [
      {
        code: "409",
        message: "Conflito de informações, por favor, verifique.",
      },
    ]);
  }
}
