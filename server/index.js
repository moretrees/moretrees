const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const express = require("express");
const config = require("./config/config");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const MONGODB_URI = config.MONGODB_URI;
const PORT = config.PORT;
const app = express();

// logger
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// requiring users model
require('./models/user');
require('./config/passport');


const usersRoutes = require("./routes/users");
app.use("/api/v1/users", usersRoutes);

const treesRoutes = require("./routes/trees");
app.use("/api/v1/trees", treesRoutes);



if(process.env.NODE_ENV === 'production'){
  // via: https://www.youtube.com/watch?v=W-b9KGwVECs
  const publicURL = path.resolve(`${__dirname}/public`);
  // Set your static server
  app.use(express.static(publicURL));
  
  // handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })
}


app.listen(PORT, () => {
  console.log(`see the magic: http://localhost:${PORT}`);
});
