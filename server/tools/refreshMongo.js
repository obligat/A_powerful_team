import mongoose from 'mongoose';
import activityRawData from './fixture/activityRawData';
import Activity from '../models/Activity';
import Community from '../models/Community';

const modelsMap = {
  Activity,
  Community
};

let acti = Object.keys(activityRawData);

mongoose.connect('mongodb://localhost/activity');

Object.keys(activityRawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(activityRawData[v], ()=> {
      acti = acti.filter(doc => doc !== v);
      // console.log(`The data of ${v} created`);
      if (acti.length === 0) {
        // console.log(`All data refreshed`);
        process.exit(0);
      }
    });
  });
});

