import mongoose from 'mongoose';

const Doctor = mongoose.model('Doctor', {
  id: Number,
  name: String,
  image: String,
  email: String,
  type: String,
  hospital: String,
  certificaties: String
});

export default Doctor;