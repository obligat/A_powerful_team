const regRouter = (app)=> {
    app.use('/activity', require('./activity'));
    app.use('/community',require('./community'));
};

export default regRouter;