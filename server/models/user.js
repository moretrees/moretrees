const mongoose = require('mongoose');
const config = require('../config');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

/**
 * Define the user schema
 * this includes:
 * name
 * email
 * password
 * jwt tokens
 */
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({
          error: 'invalid email address'
        })
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7
  },
  reset_password_token:{
    type:String,
  },
  reset_password_expires:{
    type: Date
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

/**
 * Add a method to the user schema that says:
 * for this user, create a jwt token
 * add it to it's list of jwts
 * then save that user with that new jwt
 * and return it
 */
userSchema.methods.generateAuthToken = async function () {
  // generate an auth token for the user
  const user = this;
  const token = jwt.sign({
    _id: user._id
  }, config.JWT_KEY)
  user.tokens = user.tokens.concat({
    token
  });

  await user.save();
  return token;
}


/**
 * before saving a new user
 * make sure that the user password
 * is hashed
 * then continue
 */
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

/**
 * creates a function 
 * to the user schema that
 * takes an email and password
 * and then checks to see if email and password
 * are a match
 */
userSchema.statics.findByCredentials = async (email, password) => {
  try {
    
    const user = await User.findOne({
      "email": email
    });

    if (!user) {
      throw new Error({
        error: 'invalid login credentials - no email found'
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error({
        error: 'invalid login credentials - incorrect password'
      });
    }

    return user;

  } catch (err) {
    throw new Error('error in auth')
  }

}

const User = mongoose.model('User', userSchema);

module.exports = User;