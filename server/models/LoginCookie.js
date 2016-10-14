import mongoose from 'mongoose';

var LoginCookie = mongoose.model('LoginCookie', {
  username: String,
  randomId: String
});

export default LoginCookie;