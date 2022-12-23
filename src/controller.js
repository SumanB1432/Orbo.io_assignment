const path = require("path");
const fs = require("fs");
const html = require("html");

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
      let data = fs.readFileSync(file_path, "utf-8");

      let file_string = fileName.toString();

      let filenameArr = file_string.split(".");

      let json_data = null;

      if (filenameArr.indexOf("json") != -1) {
        json_data = JSON.parse(data);
      } else if (filenameArr.indexOf("txt") != -1) {
        json_data = JSON.parse(JSON.stringify(data));
      } else if (filenameArr.indexOf("html") != -1) {
        data.replace("{ user }", "Node JS");
        json_data = JSON.parse(JSON.stringify(data));
      }
      return res.status(200).send({
        status: true,
        message: "successful",
        data: json_data,
      });
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
