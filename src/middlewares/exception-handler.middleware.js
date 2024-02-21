import { CustomError } from "../errors/custom.error.js";

export const exceptionHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    const { message, statusCode } = error;

    return res.status(statusCode).json({
      status: false,
      message,
    });
  }

  // Default error
  const errorMessage = error.message ?? "Algo salió mal, inténtalo de nuevo más tarde";

  // TODO: Add custom errors
  return res.status(500).json({
    status: false,
    message: errorMessage,
  });
};
