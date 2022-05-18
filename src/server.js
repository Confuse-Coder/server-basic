import express from 'express';
import configViewengine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from '../configs/connectDB';

require('dotenv').config();
var morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//morgan
app.use((req, res, next) => {
  //check => return res.send()
  console.log('>>> run into my middleware');
  console.log(req.method);
  next();
});

app.use(morgan('combined'));

// setup view engine
configViewengine(app);

//init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

//error 404 page
app.use((req, res) => {
  return res.render('404.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
