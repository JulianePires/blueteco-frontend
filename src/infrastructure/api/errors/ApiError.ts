import { Error } from "./Error";

export class ApiError {
  constructor(public status: number, public errors: Error[]) {}
}
