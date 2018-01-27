const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/app/views");

app.use(
	[express.static(__dirname + "/public")],
	[express.urlencoded({extended: false})],
	[]
).listen(3000);

app.get("/", (req, res, next)=>{
	res.send("Hello World!");
});
