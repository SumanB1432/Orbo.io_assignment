//****************Importing modules *******************/ 
const express = require("express");
const path = require("path");
let app = express();
const multer=require('multer')

const serveFileController = require("./controller")

const static_path = path.join(__dirname, "../public");
app.use(multer().any())
app.use(express.static(static_path));

app.get("/getFile/:fileName", serveFileController.serveFile);//GET FILE API
app.post("/createFile",serveFileController.createFile)//UPLOAD FILE API

const PORT = 3000;
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server run in PORT NO: ${PORT}`);
    } else {
        console.log(err);
    }
});
