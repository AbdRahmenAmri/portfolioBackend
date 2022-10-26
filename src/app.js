const express = require("express");
const userRoute = require("./routes/user");
const app = express();

/* DEV VARs */
const port = process.env.PORT || 4000;

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.json("hello world");
});


app.listen(port, () => {
  console.log("App is runnig ...");
});
