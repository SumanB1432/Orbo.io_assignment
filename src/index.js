//****************Importing modules *******************/ 
const express = require("express");
const path = require("path");
let app = express();

const serveFileController = require("./controller")

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("/getFile/:fileName", serveFileController.serveFile);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server run in PORT NO: ${PORT}`);
    } else {
        console.log(err);
    }
});
