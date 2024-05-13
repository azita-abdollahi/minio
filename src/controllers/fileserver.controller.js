const { putObject, downloadFile } = require('../services/fileserver.service');
const Response = require('../utils/response/index')

exports.fileUpload = async (req, res, next) => {
    try {
        const bucketName = process.env.bucketName;
        const prefix = `image/`;
        const file = req.files.file[0];
        const filename = file.originalname;
        const fObjectName = `${prefix}${filename}`;
        let fObject;
        if ( file && fObjectName ) {
            fObject = await putObject(fObjectName, file.buffer, bucketName);
        }
        const response = new Response(true, { fObject }, 'Upload file Success');
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

exports.fileDownload = async (req, res, next) => {
    try {
        const bucketName = process.env.bucketName;
        const { objectName } = req.body;
        const { dataStream, filename } = await downloadFile(objectName, bucketName);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        dataStream.pipe(res);
    } catch (err) {
        next(err);
    }
};
