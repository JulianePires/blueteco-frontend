import { ApiError } from "./ApiError";

export class ApiNotFoundError extends ApiError {
  constructor(public status: number) {
    super(status, [
      {
        code: "404",
        message: "Objeto não encontrado.",
      },
    ]);
  }
}
