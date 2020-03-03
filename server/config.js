const {NODE_ENV} = process.env;
if(NODE_ENV === "production"){
  require("dotenv").config({path:"../.env.production"});
} else if (NODE_ENV === "development"){
  require("dotenv").config({path:"../.env.development"});
} else {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/moretrees",
  JWT_KEY: process.env.JWT_KEY || "happydays"
};
