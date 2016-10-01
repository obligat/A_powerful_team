const regRouter = (app)=> {
  app.use('/activity', require('./activity'));
};

export default regRouter;