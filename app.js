const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", (req, res) => {
  console.log("called currenttime");

  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", (req, res) => {
  console.log("called root path");

  res.send(
    "<form method='POST' action='/store-user'><label>Your Name: </label><input name='username' type='text'><button type='submit'>Submit</button></form>"
  );
});

app.post("/store-user", (req, res) => {
  const userName = req.body.username;
  console.log(userName);

  res.send("<h1>UserName stored</h1>");
});

app.listen(3000);
