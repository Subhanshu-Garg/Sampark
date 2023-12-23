class ApiError extends Error {
  constructor(statusCode, message, isCustomError = false, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.isCustomError = isCustomError;
    if(isCustomError){
      this.name = 'Custom Error'
    }
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;