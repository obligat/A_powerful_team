import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import activityRawData from './fixture/activityRawData';
import Doctor from '../models/Doctor';
import Activity from '../models/Activity';

const modelsMap = {
  Activity
};

let acti = Object.keys(activityRawData);

mongoose.connect('mongodb://localhost/activity');

Object.keys(activityRawData).forEach(v => {
  modelsMap[v].remove(()=> {
    modelsMap[v].create(activityRawData[v], ()=> {
      acti = acti.filter(doc => doc !== v);
     // console.log(`The data of ${v} created`);
      if(acti.length === 0) {
       // console.log(`All data refreshed`);
        process.exit(0);
      }
    });
  });
});

