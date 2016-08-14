import express from 'express';
import Doctor from '../models/Doctor';

let router = express.Router();

router.get('/', (req, res)=> {
  Doctor.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Doctor.findOne({
    id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});

router.put('/:id', (req, res)=> {
  Doctor.update({
    id: req.params.id
  }, req.body, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});

router.post('/', (req, res, next)=> {
  new Doctor({
    name: req.body.name
  }).save((err, todo) => {
    if(err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});

router.delete('/:id', (req, res)=> {
  Doctor.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;