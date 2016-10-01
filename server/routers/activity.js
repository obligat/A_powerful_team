/**
 * Created by myc on 10/1/16.
 */
import express from 'express';
import Activity from '../models/Activity';

let router = express.Router();

router.get('/', (req, res)=> {
  Activity.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Activity.findOne({
    id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});

router.put('/:id', (req, res)=> {
  Activity.update({
    id: req.params.id
  }, req.body, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});

router.post('/', (req, res, next)=> {
  new Activity({
    activityName: req.body.activityName
  }).save((err, todo) => {
    if(err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});

router.delete('/:id', (req, res)=> {
  Activity.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;