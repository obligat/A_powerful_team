/**
 * Created by myc on 10/1/16.
 */
import mongoose from "mongoose";

const Community = mongoose.model('Community', {
  username:String,
  password:String,
  schoolName:String,
  communityName:String,
  logo:String,
  description:String,
  email:String,
  tel:String
});

export default Community;