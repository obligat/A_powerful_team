const regRouter = (app)=> {
  app.use('/doctors', require('./doctors'));
};

export default regRouter;