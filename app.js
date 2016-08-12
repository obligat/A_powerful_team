import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=> {
  res.send('abc');
});

app.get('/demo', (res, req)=> {
  req.send({
    error: null,
    data: 12334
  });
});

app.listen(3000, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;