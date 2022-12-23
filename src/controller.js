const path = require("path");
const fs = require("fs");


const serveFile = function (req, res) {
  try {
    let fileName = req.params.fileName;

    const static_path = path.join(__dirname, "../public");

    let file_path = `${static_path}/${fileName}`;

    let exist = fs.existsSync(file_path);

    if (exist == false) {
      return res.status(404).send({
        status: false,
        message: `${fileName} is not found in given directory`,
      });
    } else {
      return res.status(200).sendFile(file_path)
    }
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
  }
};
module.exports = {
  serveFile,
};