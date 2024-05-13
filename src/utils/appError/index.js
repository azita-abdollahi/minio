class ApiError extends Error {
	constructor(message) {
	  super(message);
	  this.name = this.constructor.name;
	  Error.captureStackTrace(this, this.constructor);
	}
  }
  
  class NotFoundException extends ApiError {
	constructor(message) {
	  super(message ?? "The requested resource was not found.");
	  this.name = "NotFoundException";
	}
  }
  
  class SchemaValidationException extends ApiError {
	constructor(message) {
	  super(message ?? "The request data did not pass schema validation.");
	  this.name = "SchemaValidationException";
	}
  }
  
  class ForbiddenException extends ApiError {
	constructor(message) {
	  super(message ?? "Access to the requested resource was forbidden.");
	  this.name = "ForbiddenException";
	}
  }
  
  class DuplicateException extends ApiError {
	constructor(message) {
	  super(message ?? "The requested resource already exists.");
	  this.name = "DuplicateException";
	}
  }
  
  class TimeoutException extends ApiError {
	constructor(message) {
	  super(message ?? "The operation has timed out.");
	  this.name = "TimeoutException";
	}
  }
  
module.exports = {
	NotFoundException,
	SchemaValidationException,
	ForbiddenException,
	DuplicateException,
	TimeoutException
}