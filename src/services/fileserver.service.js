const { createMinioClient } = require("../utils/minioConnect");

const putObject = async (objectName, imageData, bucketName) => {
    try {
      const minioClient = createMinioClient()  

      const bucketExists = await new Promise((resolve, reject) => {
        minioClient.bucketExists(bucketName, (err, exists) => {
          if (err) reject(err);
          resolve(exists);
        });
      });
  
      if (!bucketExists) {
        await new Promise((resolve, reject) => {
          minioClient.makeBucket(bucketName, (err) => {
            if (err) reject(err);
            resolve();
          });
        });
      }
  
      const etag = await new Promise((resolve, reject) => {
        minioClient.putObject(bucketName, objectName, imageData, (err, etag) => {
          if (err) reject(err);
          resolve(etag);
        });
      });

      const obName = `${objectName}`;
      return { objectName: obName, etag: etag.etag};
    } catch (err) {
      throw err;
    }
};
const downloadFile = async (objectName, bucketName) => {
    try {
      const minioClient = createMinioClient()
      return new Promise((resolve, reject) => {
        const filename = objectName.split('/').pop(); 
        minioClient.getObject(bucketName, objectName, (e, dataStream) => {
          if (e) {
            reject(e);
          } else {
              resolve({ dataStream, filename });
          }
        });
      });
    } catch (err) {
      throw err;
    }
  };

  module.exports = { 
    putObject,
    downloadFile
   };