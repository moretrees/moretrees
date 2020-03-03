const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema(
  {
    photoUrl: {
      type: String,
      default: null
    },
    latitude: {
      type: Number,
      default: 0,
      required: true
    },
    longitude: {
      type: Number,
      default: 0,
      required: true
    },
    status: {
      type: String,
      default: 'incomplete'
    },
    createdBy_username: {
      type: String,
      required: false
    },
    createdBy_id: {
      type: String,
      required: false
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const db = mongoose.model('trees', treeSchema);
module.exports = db;