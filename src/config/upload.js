const multer = require("multer");
const path = require("path");
const { randomBytes } = require("crypto");

const uploadFolder = path.resolve(__dirname, "..", "..", "upload");

module.exports = {
  directory: uploadFolder,
  Storage: multer.diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const fileHash = randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
