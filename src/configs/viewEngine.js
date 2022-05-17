import express from 'express';

const configViewengine = (app) => {
  app.use(express.static('./src/public')); //Quan ly muc share tren public
  app.set('view engine', 'ejs'); //setup view se nhan .ejs
  app.set('views', './src/views'); //chi ra thu muc co file .ejs
};

export default configViewengine;
