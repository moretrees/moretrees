const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const express = require("express");
const config = require("./config.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const PORT = config.PORT;
const app = express();

require('./db/db');

if(process.env.NODE_ENV !== 'production'){
  app.use(logger("dev"));
}
// logger
app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/index');
app.use("/api/v1", apiRoutes);



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
