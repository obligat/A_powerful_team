import express from 'express';
import cookieParser from 'cookie-parser';
import uuid from 'node-uuid';
import Community from '../models/Community';
import LoginCookie from '../models/LoginCookie';

let router = express.Router();
router.use(cookieParser());

router.get('/', (req, res)=> {

  Community
      .where({username: req.query.username})
      .find((err, data)=> {
        if (err) {
          res.send(err);
        }
        else {
          res.send(data);
        }
      });
});

router.post('/register', (req, res)=> {

  Community
      .where({username: req.body.username})
      .findOne((err, user)=> {
        if (err) {
          throw err;
        }
        if (user) {
          return res.send({error: 'User is registered .'});
        }
        else {
          new Community(req.body)
              .save((err, data)=> {
                if (err) {
                  throw err;
                }
                else {
                  return res.send({error: ''});
                }
              });
        }
      });
});

router.post('/login/isUserExist', (req, res)=> {

  Community.where({username: req.body.username})
      .findOne((err, user)=> {
        if (user) {
          return res.send({userError: ''});
        }
        else {
          return res.send({userError: "用户不存在"});
        }
      });
});

router.post('/login/isValidLogin', (req, res)=> {

  Community
      .where({username: req.body.username})
      .findOne((err, user)=> {
        if (user) {
          if (user.password === req.body.password) {
            var randomId = uuid.v4();
            new LoginCookie({
              username: req.body.username,
              randomId: randomId
            }).save((err, user)=> {
              if (err) {
                throw err;
              }
              else {
                res.cookie('randomId', randomId);
                res.send({pwsError: ''});
              }
            })
          }
          else {
            res.send({pwsError: "密码不正确"});
          }
        }
      });
});


router.get('/reqUserName', (req, res)=> {

  if (req.cookies.randomId) {
    LoginCookie.findOne({randomId: req.cookies.randomId}, (err, doc)=> {
      if (err) {
        throw err;
      } else {
        res.send(doc.username);
      }
    });
  }
  else {

  }
});

router.get('/userCenter/:username', (req, res)=> {

  Community.findOne({username: req.params.username}, (err, doc)=> {
    if (err) {
      throw err;
    } else {
      res.send({
        username: doc.username,
        schoolName: doc.schoolName,
        communityName: doc.communityName,
        logo: doc.logo,
        description: doc.description,
        email: doc.email,
        tel: doc.tel
      });
    }
  })
});


module.exports = router;