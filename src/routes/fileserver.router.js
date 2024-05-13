const router = require('express').Router();
const { fileUpload, fileDownload } = require("../controllers/fileserver.controller");
const upload = require('../middleware/upload');
const { validate } = require('../middleware/validate');
const { uploadFileSchema, downloadFileSchema } = require('../schemas/fileserver.schema');

router.post("/upload/file", upload.fields([{
    name: 'file', maxCount: 1
  }]), validate(uploadFileSchema), fileUpload);
router.post("/download/file", validate(downloadFileSchema), fileDownload);

module.exports = router;