const regRouter = (app)=> {
    app.use('/activity', require('./activity'));
    app.use('/community',require('./community'));
    app.use('/community/register',require('./community'));
};

export default regRouter;
