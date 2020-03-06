const {NODE_ENV} = process.env;
if(NODE_ENV === "production"){
  require("dotenv").config({path:"../server/.env.development"});
} else if (NODE_ENV === "development"){
  require("dotenv").config({path:"../server/.env.development"});
} else {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/moretrees",
  JWT_KEY: process.env.JWT_KEY || "happydays",
  MAILER:{
      EMAIL: process.env.MAILER_EMAIL || 'test@example.com', 
      PASSWORD:process.env.MAILER_PASSWORD || 'secret',
      SERVICE: process.env.MAILER_SERVICE || 'Gmail',
      DEFAULT_ADDRESS: process.env.MAILER_ADDRESS || 'First Last <test@example.com>'
  },
  AWS:{
      ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID || 'ABC123', 
      SECRET:process.env.AWS_SECRET_ACCESS_KEY || 'ABC123', 
      S3_BUCKET_NAME:process.env.S3_BUCKET_NAME || 'moretrees-static', 
      REGION:process.env.AWS_REGION || 'aws-east-1', 
  }
};
