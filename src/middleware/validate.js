const { SchemaValidationException } = require('../utils/appError/index');

function validate(schema) {
    return function(req, res, next) {
      const dataToValidate = {
        ...req.body,
        ...req.file, 
        ...req.files
      };
      const { error, value } = schema.validate(dataToValidate, { allowUnknown: true });
      if (error) {
        throw new SchemaValidationException(error.details[0].message);
      }
      req.validatedData = value;
      next();
    };
  }
  
  module.exports = {
    validate
  };