/**
 * Created by myc on 10/1/16.
 */
import mongoose from 'mongoose';

const Activity = mongoose.model('Activity', {
  creator: String,
  activityName: String,
  activityTime: String,
  activityLocation: String,
  instruction: String,
  comment: [String],
  participator: [String]
});

export default Activity;