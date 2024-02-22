import { ZodError } from "zod";

import { CustomError } from "../errors/custom.error.js";

export const exceptionHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    const { message, statusCode } = error;

    return res.status(statusCode).json({
      status: false,
      message,
    });
  }

  if (error instanceof ZodError) {
    const errors = error.issues.map((issue) => issue.message);

    return res.status(400).json({
      status: false,
      message: errors.length === 1 ? errors.join("") : errors,
    });
  }

  return res.status(500).json({
    status: false,
    message: "Algo salió mal, inténtalo de nuevo más tarde",
  });
};
