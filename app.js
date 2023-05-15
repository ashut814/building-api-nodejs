const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json()); // middleware

// 1: middlewares
app.use(morgan('dev'));
app.use(express.json());
// creating our own middleware
app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});  

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})



// 3) Routes

/* app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createTour);
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour); */

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) start server  


module.exports = app;