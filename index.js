const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const profileRoute = require("./routes/profiles");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/developers", profileRoute);

app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.get("*", (req, res) => {
  const index = path.join(__dirname, "client/build", "index.html");
  res.sendFile(index);
});

app.listen(PORT, function () {
  console.log("Server up and running on:" + PORT);
});
