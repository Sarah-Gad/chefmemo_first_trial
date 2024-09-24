const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  profilePhoto: {
    type: Object,
    default: {
      url: 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png',
      publicId: null,
    },
  },
  bio: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);
module.exports = {
  User,
};
