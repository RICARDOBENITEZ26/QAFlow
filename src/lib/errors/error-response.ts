import { ApplicationError } from "./application-error";

export type ErrorResponse = {
  error: {
    code: string;
    message: string;
    requestId?: string;
  };
};

export function toErrorResponse(error: unknown, requestId?: string): ErrorResponse {
  if (error instanceof ApplicationError) {
    return {
      error: {
        code: error.code,
        message: error.message,
        requestId,
      },
    };
  }

  return {
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred.",
      requestId,
    },
  };
}
