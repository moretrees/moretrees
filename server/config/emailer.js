const config = require('../config');
const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  service: config.MAILER.SERVICE,
  auth: {
    user: config.MAILER.EMAIL,
    pass: config.MAILER.PASSWORD
  }
});

module.exports = smtpTransport;