# Orbo.io_assignment

** START COMMAND :- `nmp start`

PROBLEM STATEMENT :- `Implement a simple web server that serves static files from a given directory`.

APPROACH :-

1) I use `express` web application framework to perform this assignment.(`npm i express`)
2)`File System , Path` core modules are used for find out the file locations.
3)When user hit a GET request in postman with the file name in path params, then he/she get the particular file context in postman Body,
If file is not found in `public` folder then its return error with status code `404`.

4)I use `public` folder to store the static files, and I serve files from `public` folder.
5)USER CAN ONLY UPLOAD HTML/TXT/JSON FILES.