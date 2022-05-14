import express from 'express';
import configViewengine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

configViewengine(app);
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
