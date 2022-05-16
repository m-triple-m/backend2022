const multer = require("multer");
const express = require("express");
const router = express.Router();

// setting the upload  file name and folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage: storage });

router.post("/uploadfile", uploader.single("file"), (req, res) => {
  res.status(200).json({ message: "file uploaded" });
});

module.exports = router;
