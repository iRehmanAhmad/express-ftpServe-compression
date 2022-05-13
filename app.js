const express = require("express")
const app = express();
const serveIndex = require("serve-index");

app.use("/main", express.static("public/"), serveIndex("public/"));

app.listen("4000", ()=>{
console.log("server listening");
});