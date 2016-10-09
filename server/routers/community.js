import express from "express";
import Community from "../models/Community";

let router = express.Router();

router.get('/', (req, res)=> {

    Community
        .where({communityName: req.query.clubName})
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
                return res.send({error: 'User is registered .'})
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
                    })
            }
        })
});


module.exports = router;