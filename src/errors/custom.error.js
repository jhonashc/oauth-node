export class CustomError extends Error {
  constructor(statusCode, message, name) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }

  static badRequest(message) {
    return new CustomError(400, message, "Bad Request");
  }

  static conflict(message) {
    return new CustomError(409, message, "Conflict");
  }

  static unauthorized(message) {
    return new CustomError(401, message, "Unauthorized");
  }

  static forbidden(message) {
    return new CustomError(403, message, "Forbidden");
  }

  static notFound(message) {
    return new CustomError(404, message, "Not Found");
  }

  static internalServer(message) {
    return new CustomError(500, message, "Internal Server");
  }
}
