const AWS = require("aws-sdk");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");

const BASE_IMAGE_URL =
  "https://stove-s3-bucket.s3.ap-northeast-2.amazonaws.com/";

AWS.config.region = process.env.AWS_CONFIG_REGION; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.AWS_CONFIG_IDENTITYPOOLID,
});
const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "stove-s3-bucket", // 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
    acl: "public-read", // 클라이언트에서 자유롭게 가용하기 위함
    key: (req, file, cb) => {
      let extension = path.extname(file.originalname);
      cb(null, file.fieldname + "/" + Date.now().toString() + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});

const deleteS3Images = (deleteObjects) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: "stove-s3-bucket",
      Delete: {
        Objects: deleteObjects,
        Quiet: false,
      },
    };
    s3.deleteObjects(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { upload, deleteS3Images, BASE_IMAGE_URL };
