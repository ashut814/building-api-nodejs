const app = require('./app');

const port = 6001;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
