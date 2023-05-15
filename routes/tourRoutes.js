const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();
const fs = require('fs');

router.param('id', tourController.checkID);

// create a checkbody middleware
// check if body contains the name and price property
// if not, send back 400 (bad request)
// add it to post handler request


router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;  