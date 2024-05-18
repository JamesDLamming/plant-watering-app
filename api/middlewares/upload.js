const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    // acl: 'public-read',
    key: function (req, file, cb) {
      const fileName = Date.now().toString() + path.extname(file.originalname);
      console.log('Uploading file:', file.originalname, 'as', fileName);
      cb(null, fileName);
    }
  }),
  fileFilter: function (req, file, cb) {
    console.log('File Filter:', file);
    cb(null, true);
  },
  limits: { fileSize: 1024 * 1024 * 5 } // 5MB file size limit
});

module.exports = upload;
