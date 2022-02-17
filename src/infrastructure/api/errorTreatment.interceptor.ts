import axios, { AxiosError } from "axios";
import { match, when } from "ts-pattern";
import {
  ApiAuthenticationError,
  ApiConflictError,
  ApiInternalServerError,
  ApiNotFoundError,
  ApiUnknownError,
  ApiValidationError,
  CancelError,
  Error,
} from "./errors";

type ErrorApiResponse = {
  errors: Error[];
};

const defaultError: Error[] = [
  {
    code: "UnkownError",
    message: "Ocorreu um erro desconhecido",
  },
];

export function errorTreatmentInterceptor(error: AxiosError<ErrorApiResponse>) {
  if (axios.isCancel(error)) {
    return Promise.reject(new CancelError());
  }

  const errorMessage = error?.response?.data?.errors || defaultError;
  const httpStatusCode = Number(error?.response?.status) || 0;

  const resultado = match(httpStatusCode)
    .with(500, (status) => Promise.reject(new ApiInternalServerError(status)))
    .with(401, (status) => Promise.reject(new ApiAuthenticationError(status)))
    .with(400, (status) =>
      Promise.reject(new ApiValidationError(status, errorMessage))
    )
    .with(404, (status) => Promise.reject(new ApiNotFoundError(status)))
    .with(409, (status) => Promise.reject(new ApiConflictError(status)))
    .with(422, (status) =>
      Promise.reject(new ApiValidationError(status, errorMessage))
    )
    .with(
      when((value: number) => value >= 400),
      (status) =>
        Promise.reject(
          new ApiValidationError(status, [
            { code: "", message: "Ocorreu algum erro na requisição." },
          ])
        )
    )
    .otherwise(() => Promise.reject(new ApiUnknownError(httpStatusCode)));

  return resultado;
}
