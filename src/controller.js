const path = require("path");
const fs = require("fs");


////////////////////////-------------UPLOAD FILE IN PUBLIC FOLDER ------------------///////////////////////////////
const createFile = function(req,res){
  try {
    let file = req.files;
    let fileName = file[0].originalname;
    let data = file[0].buffer;
    
    let directory = path.join(__dirname,"../public")
    let file_path = `${directory}/${fileName}`
    
    fs.writeFile(file_path,`${data}`,(err)=>{
      if(!err){
        return res.status(201).send({status:true,message:"created successfully"})
      }
    })
  
    
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: err.message,
    });
    
  }
}

/////////////////////////////-------------GET FILE FROM PUBLIC FOLDER -------------------------//////////////////////////

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
  serveFile,createFile
};