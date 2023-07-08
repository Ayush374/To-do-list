const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
var items =[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//app.use("view engine", "ejs");

app.get("/", (req, res) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
var today = new Date();

let din = today.getDay();
var day = today.toLocaleDateString("en-US", options);

res.render("list",{ListTitle:day,newlistitems:items});
  

  
});
app.post("/",(req,res)=>{
  var item = req.body.NewItem;
  items.push(item);
  res.redirect("/")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
