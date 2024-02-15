export const exceptionHandler = (error, req, res, next) => {
  const errorResponse = error.response;

  // Axios error
  if (errorResponse) {
    const statusCode = errorResponse.status;
    const message = errorResponse.data.message;

    return res.status(statusCode).json({
      status: false,
      message,
    });
  }

  // Default error
  const errorMessage = error.message;

  // TODO: Add custom errors
  return res.status(500).json({
    status: false,
    message: errorMessage ?? "Algo salió mal, inténtalo de nuevo más tarde",
  });
};
