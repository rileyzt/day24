const express = require("express");

const app = express();


app.get("/api/courses", (req, res) => {

  res.json({
    message: "Courses API Working",
  });

});


app.get("/api/users", (req, res) => {

  res.json({
    message: "Users API Working",
  });

});
app.get("/status", (req, res) => {
  res.send("App is live");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});


module.exports = app;