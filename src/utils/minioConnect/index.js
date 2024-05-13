const Minio = require('minio');
require('dotenv').config();

const minioInstance = { endpoint: process.env.MINIO_ENDPOINT, accessKey: process.env.MINIO_ACCESS_KEY, secretKey: process.env.MINIO_SECRET_KEY };

function initMinioClient(config) {
  return new Minio.Client({
    endPoint: config.endpoint,
    port: parseInt(process.env.MINIO_PORT,  10),
    useSSL: process.env.MINIO_USE_SSL = false, 
    accessKey: config.accessKey,
    secretKey: config.secretKey
  });
}


function createMinioClient() {
  const client = initMinioClient(minioInstance);
  return client;
 }

module.exports = { createMinioClient };
