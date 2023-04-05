const express = require("express"); // serving static files in the public folder
const app = express();
const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening"));

app.use(express.static("public"));
