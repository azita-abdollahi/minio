const Joi = require('joi');

const downloadFileSchema = Joi.object({
    objectName: Joi.string()
      .required()
  });
  
const uploadFileSchema = Joi.object({
    file: Joi.array().items(
        Joi.object({
            fieldname: Joi.string().required(),
            originalname: Joi.string().required(),
            encoding: Joi.string().required(),
            mimetype: Joi.string().required(),
            buffer: Joi.binary().required(),
            size: Joi.number().required(),
        })
        )
        .required()
});

module.exports = { 
    downloadFileSchema, 
    uploadFileSchema
  };